import React from 'react'

export default function TradingStratgeyTemplate(props) {
  return (
    <div>
      <div class="card bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden" style={{width: "400px",paddingLeft:"20px",paddingTop:"20px",paddingBottom:"20px",paddingRight:'20px'}}>
    <div class="card-body">
        <h5 class="card-title ">Name</h5>
        <h3 class="card-title text-xl font-bold mb-2">{props.name}</h3>
        <h4 class="card-title text-xl mb-2">Description</h4>
        <p class="card-text" style={{paddingBottom:"30px"}}>{props.overview}</p>

        <h5 class="card-title ">Risk Level</h5>
        <h3 class="card-title text-xl font-bold mb-2">{props.riskLevel}</h3>
        <a href="#" class="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-2">Go somewhere</a>
    </div>
</div>

    </div>
  )
}
