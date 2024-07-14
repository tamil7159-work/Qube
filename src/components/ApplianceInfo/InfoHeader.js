import React from 'react';
import { Button, Divider } from 'antd';
import pieChartSvg from '../../assets/pieChart.svg';
import demandSvg from '../../assets/demand.svg';
import logsSvg from '../../assets/logs.svg';

function InfoHeader(props) {
    const {
        serialNo,
        theatreName,
        location,
        deviceStatus,
        storage,
    } = props;
    return (
        <div className={'info-header'}>
            <div className={'title'}>
                <h3>{serialNo}</h3>
                <div className={'options'}>
                    <Button>
                        <img src={demandSvg} className={'type-icon'}/>
                        Speedtest
                    </Button>
                    <Button>
                        <img src={logsSvg} className={'type-icon'}/>
                        Logs
                    </Button>
                </div>
            </div>
            <div>
                <div>{theatreName}</div>
                <div className={'location'}>
                    {`${location.city},${location.state},${location.country}`}
                </div>
            </div>
            <div className={'status-btns'}>
                <div className={'status'}>
                    <span style={{background: deviceStatus === 'offline' ? '#cf1423' : '#0f7c2e'}}/>
                    <p>{deviceStatus}</p>
                </div>
                <div className={'status'}>
                    <img src={pieChartSvg} className={'type-icon'}/>
                    <p>{storage}</p>
                </div>
            </div>
            <Divider />
            <div className={'tab-list'}>
                <div>Details</div>
                <div>Content</div>
                <div>Bandwidth</div>
            </div>
        </div>
    );
}

export default InfoHeader;