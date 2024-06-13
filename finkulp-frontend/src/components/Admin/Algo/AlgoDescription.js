import React from 'react';
import AgloshoppingTemplateStats from './AlgoshoppingTemplateStats'
import Chart from "react-apexcharts";

export default function AlgoshoppingDescriptionAdmin(props) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div style={{ paddingTop: '200px', border: "solid", borderColor: "blue", borderWidth: '1px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginTop: "-200px" }}>
              <h1 style={{ fontWeight: "500", fontSize: '25px', paddingLeft: "100px", paddingRight: '100px', color: "blue", textAlign: 'center' }}>Strategy Details</h1>
              <AgloshoppingTemplateStats VeiwAlgoAdmin={props.VeiwAlgoAdmin}></AgloshoppingTemplateStats>
            </div>
          </div>
          <div style={{ paddingLeft: '100px', paddingRight: '50px', marginTop: '-40px' }}>
            <h1 style={{ fontWeight: '400', fontSize: '30px', paddingRight: '100px', color: 'blue' }}>Description</h1>
            <div style={{ position: 'relative', overflow: 'hidden', display: 'flex',marginBottom:'50px' }}>
              <div style={{ padding: '10px', marginLeft: '-1px' }}>
                {props.VeiwAlgoAdmin.smalloverview.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              </div>
            <div style={{ position: 'relative', overflow: 'hidden', display: 'flex' }}>
              <div style={{ padding: '10px', marginLeft: '-1px' }}>
                {props.VeiwAlgoAdmin.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div>
                {props.VeiwAlgoAdmin.graph && props.VeiwAlgoAdmin.graph.year && props.VeiwAlgoAdmin.graph.profit && 
                  <Chart
                    type="area"
                    height={400}
                    width="600"
                    options={{
                      chart: {
                        id: "basic-bar1"
                      },
                      title: {
                        text: "Revenue per Year by the Strategy",
                        style: { fontSize: 20 }
                      },
                      xaxis: {
                        name: 'Year',
                        categories: props.VeiwAlgoAdmin.graph.year
                      }
                    }}
                    series={[
                      {
                        name: "Profit",
                        data: props.VeiwAlgoAdmin.graph.profit
                      }
                    ]}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}