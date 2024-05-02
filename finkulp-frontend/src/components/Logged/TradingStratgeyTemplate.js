import React, { useState } from 'react';
import TradingStrategyTemplateDescription from './TradingStrategyTemplateDescription';
export default function TradingStrategyTemplate(props) {
    return (
        <div>
            <div className="card bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden" style={{ width: "400px", paddingLeft: "20px", paddingTop: "20px", paddingRight: '20px' }}>
                <div className="card-body">
                    <h5 className="card-title ">Name</h5>
                    <h3 className="card-title text-xl font-bold mb-2">{props.name}</h3>
                    <h4 className="card-title text-xl mb-2">Description</h4>
                    <p className="card-text" style={{ paddingBottom: "30px" }}>{props.overview}</p>

                    <h5 className="card-title ">Risk Level</h5>
                    <h3 className="card-title text-xl font-bold mb-2">{props.riskLevel}</h3>
                    <div style={{margin:"-52px"}}>
                    <TradingStrategyTemplateDescription style={{paddingBottom:"20px"}} name={props.name} overview={props.overview} riskLevel={props.riskLevel} benchmark={props.benchmark} creator={props.creator} earningPotential={props.earningPotential} recommendedDuration={props.recommendedDuration}></TradingStrategyTemplateDescription>
                    </div>
                </div>
            </div>
        </div>
    );
}
