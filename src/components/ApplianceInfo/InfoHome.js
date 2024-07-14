import React, {useEffect} from 'react';
import {Layout, Breadcrumb, Skeleton} from 'antd'
import '../../styles/applianceInfo.scss';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/action";
import {useLocation} from 'react-router-dom';
import InfoHeader from "./InfoHeader";
import PropTypes from 'prop-types';
import InfoDetails from "./InfoDetails";

InfoHome.propTypes = {
    infoLoader: PropTypes.bool,
    selectedApplianceInfo: PropTypes.object,
};

function InfoHome(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const infoLoader = useSelector((state) => state.infoLoader);
    const selectedApplianceInfo = useSelector((state) => state.selectedApplianceInfo);
    const serialNo = location.pathname.split('/').pop();
    useEffect(() => {
        dispatch({
            type: actions.FETCH_SELECTED_APPLIANCE_INFO,
            serialNo: serialNo,
        });
    }, []);
    const infoBreadCrumbs = [
        {
            title: 'Devices',
            href: '/appliances',
        },
        {
            title: serialNo,
        },
    ]
    return (
        <Layout className={'info-container'}>
            <Breadcrumb
                separator=">"
                items={infoBreadCrumbs}
            />
            {infoLoader ? (
                <Skeleton
                    active
                    title={false}
                    style={{padding: 24}}
                    paragraph={{ rows: 12, width: '100%' }}
                />
            ) : (
                <>
                    {selectedApplianceInfo.serialNo && (
                        <>
                            <InfoHeader {...selectedApplianceInfo} />
                            <InfoDetails selectedApplianceInfo={selectedApplianceInfo} />
                        </>
                    )}
                </>
            )}
        </Layout>
    );
}

export default InfoHome;