import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="cantainer">
      <div className="row p-5">
        <div className="col-6 p-5 text-center">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>{tryDemo}</a>
            <a href={learnMore} style={{ marginLeft: "80px" }}>{learnMore}</a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/image/googlePlayBadge.svg"
                alt="Google Play"
              ></img>
            </a>
            <a href={appStore}>
              <img
                src="media/image/appstoreBadge.svg"
                alt="App Store"
                style={{ marginLeft: "50px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
