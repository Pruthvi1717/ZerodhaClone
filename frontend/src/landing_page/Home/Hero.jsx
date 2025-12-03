import React from "react";

export default function Hero() {
  
  return (
    <div className='container p-5 mb-5'>
     <div className='row text-center'>
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/> 
        <h1 className="mt-3">Invest In EveryThing</h1>
        <p>Online Platform to invest in stocks,derivatives, mutual funds,and more</p>
        <button type="button" className="btn btn-primary p-2 fs-5" style={{width : "20%", margin:"0px auto"}}>Signup now</button>
      </div>
    </div>
  );
}
