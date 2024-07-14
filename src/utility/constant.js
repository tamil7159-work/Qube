import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";
export const deviceStatus = [
    {name: 'Failed', color: '#cf1423', count: 1},
    {name: 'Cancelled', color: '#efa200', count: 1},
    {name: 'Scheduled', color: '#b2b2b2', count: 1},
    {name: 'Downloading', color: '#1e81e3', count: 14},
    {name: 'Downloaded', color: '#0f7c2e', count: 32},
];

export const applianceInfo = {
    serialNo: "Device Serial",
    theatreName: "Location",
    location: "City",
    ispPaymentResponsibility: "ISP Payment Responsibility",
    bandwidth: "Bandwidth",
    avgBandwidth: "Average Bandwidth",
    planStartDate: "Plan Start Date",
    billingCycle: "Billing Cycle",
    downloadStatus: "Download Status",
    osVersion: "OS Version",
    storage: "Storage Available",
}
export const tableColumns = [
    {
        title: 'Device Serial',
        dataIndex: 'serialNo',
        key: 'serialNo',
        width: 140,
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Location',
        dataIndex: 'theatreName',
        key: 'theatreName',
        width: 358,
        render: (text, record) => (
            <>
                <div>{text}</div>
                <div style={{color: '#084782'}}>
                    {record.location.city},{record.location.state},{record.location.country}
                </div>
            </>
        ),
    },
    {
        title: 'Bandwidth',
        dataIndex: 'bandwidth',
        key: 'bandwidth',
        width: 200,
        render: (text, record) => (<>
            <div>{text}</div>
            <div style={{color: '#69788C'}}>{record.avgBandwidth}</div>
        </>),
    },
    {
        title: 'Status',
        dataIndex: 'deviceStatus',
        key: 'deviceStatus',
        width: 166,
        render: (text) => (
            <div className={'status'}>
                <span style={{background: text === 'offline' ? '#cf1423' : '#0f7c2e'}}/>
                <p style={{color: '#084782'}}>{text}</p>
            </div>
        ),
    },
    {
        title: 'Download Status',
        dataIndex: 'downloadStatus',
        key: 'downloadStatus',
        width: 176,
        render: (text) => (
            <div className={'status'}>
                {deviceStatus.map(item => item.name === text && (
                    <span style={{background: item.color}}/>
                ))}
                <p style={{color: '#084782'}}>{text}</p>
            </div>
        ),
    },
    {
        title: 'Version',
        dataIndex: 'osVersion',
        key: 'osVersion',
        width: 160,
        render: (text) => <div>{text}</div>,
    },
    {
        title: '',
        key: 'action',
        dataIndex: 'action',
        width: 92,
        render: (text, record) => (
            <Button className={'view-btn'}>
                <Link to={`/appliances/${record.serialNo}`}>view</Link>
            </Button>
        )
    }
];