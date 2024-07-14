import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DeviceStatus from "./DeviceStatus";
import Table from "./Table";
import actions from "../../redux/action";
import { Layout } from 'antd';
import '../../styles/applianceList.scss';

function ListHome(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
           type: actions.FETCH_APPLIANCE_LIST,
        });
    }, []);
    return (
        <Layout className="appliances-container">
            <div className={'header'}>
                <span>Devices</span>
            </div>
            <div className={'appliances-body'}>
                <DeviceStatus />
                <Table />
            </div>
        </Layout>
    );
}

export default ListHome;