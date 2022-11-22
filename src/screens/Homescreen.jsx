import React from 'react';
import pizzas from '../pizzasdata';
import Pizza from '../components/Pizza';
export default function Homescreen() {
  return (
    <div>
      <div className="row" style={{width: "100%"}}>
        {pizzas.map(pizza=>{
          return <div className="col-md-4">
            <Pizza pizza={pizza} />
             </div>
        })}
      </div>
    </div>
    


  )
}
