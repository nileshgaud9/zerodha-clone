import React from "react";

function Universe() {
  return (
    <div className="cantainer  p-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-3">
          <img src="media\image\smallcaseLogo.png" style={{width:"40%"}}></img>
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-3 ">
          <img src="media/image/streakLogo.png"style={{width:"40%"}} ></img>
          <p className="text-muted text-small"> Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/image/sensibullLogo.svg" style={{width:"40%"}}></img>
          <p className="text-muted text-small">Options trading platform</p>
        </div>

        
          <div className="col-4 p-3 mt-3">
            <img src="media/image/zerodhaFundhouse.png"style={{width:"40%"}} ></img>
            <p className="text-muted text-small">Asset management</p>
          </div>
          <div className="col-4 p-3 mt-3">
            <img src="media/image/goldenpiLogo.png" style={{width:"40%"}}></img>
            <p className="text-muted text-small">Bonds trading platform</p>
          </div>
          <div className="col-4 p-3 mt-3">
            <img src="media/image/dittoLogo.png"style={{width:"40%"}} ></img>
            <p className="text-muted text-small" >insurance</p>
          </div>

          <div>
            <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
          </div>
      </div>
    </div>
  );
}

export default Universe;
