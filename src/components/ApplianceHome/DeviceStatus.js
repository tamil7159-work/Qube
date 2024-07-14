import React from 'react';
import {deviceStatus} from "../../utility/constant";
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';

DeviceStatus.propTypes = {
    applianceList: PropTypes.bool,
};

function DeviceStatus(props) {
    const applianceList = useSelector((state) => state.applianceList);
    const calculateStatusCount = (status) => {
        const statusCount = applianceList.filter(item => item.downloadStatus === status);
        return statusCount.length;
    }
    return (
        <div className={'device-status'}>
            {deviceStatus.map((status) => (
                <div className={'status'}>
                    <span style={{background: status.color}}/>
                    <p>{calculateStatusCount(status.name)} {status.name}</p>
                </div>
            ))}
        </div>
    );
}

export default DeviceStatus;