import React from 'react';
import {applianceInfo} from "../../utility/constant";

function InfoDetails(props) {
    const {selectedApplianceInfo} = props;
    return (
        <div className={'info-details'}>
            {Object.keys(applianceInfo).map(key => (
                <div className={'info-item'}>
                    <div className={'title'}>{applianceInfo[key]}</div>
                    {key === 'location' ? (
                        <div className={'data'}>
                            {`${selectedApplianceInfo[key].city},${selectedApplianceInfo[key].state},${selectedApplianceInfo[key].country}`}
                        </div>
                    ) : (
                        <div className={'data'}>{selectedApplianceInfo[key]}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default InfoDetails;