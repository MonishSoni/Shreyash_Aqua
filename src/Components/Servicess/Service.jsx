import React from 'react';
import Servicecard from '../Servicecard/Servicecard';
import Servicetitle from '../Servicetitle/Servicetitle';
import "./Service.css"

const Service = () => {
    return (
        <>
            <div className="service">
                <Servicetitle title="Our Services" />

                <div className="servicelist">
                    <h1>what we offer</h1>
                    <div className="line"></div>

                    <div className="listcon">
                        <Servicecard title="Routine Service" feature1="Cleaning of Machine & Filter" feature2="Complete Water Purifier Checkup" feature3="Water Quality Test" feature4="Filter / Spare Parts Change if Required" />
                        <Servicecard title="Repair Service" feature1="Visit & Diagnosis" feature2="Chip Control Box Repair" feature3="Water Quality Test" feature4="Filter / Spare Parts Change if Required" />
                        <Servicecard title="RO Installation" feature1="Fixing Water Purifier Stand on Wall" feature2="Connecting Inlet Water Supply to Purifier" feature3="Connecting Electric Supply to Water Purifier" feature4="Water Quality Test" />
                        <Servicecard title="RO Uninstallation" feature1="Dismantling Water Purifier Stand from Wall" feature2="Disconnecting Inlet Water Supply from Purifier" feature3="Disconnecting Electric Supply from Water Purifier" feature4="Water Quality Test" />
                        <Servicecard title="AMC Plan" feature1="Cleaning of Machine & Filter" feature2="Complete Water Purifier Checkup" feature3="Water Quality Test" feature4="Quaterly Service" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service