import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });

  // 定义媒体查询
  const isMobileOrTablet = window.matchMedia("(max-width: 768px)");

  // 根据屏幕宽度决定是否显示加载屏幕
  if (isMobileOrTablet.matches) {
    return null; // 在移动设备或平板电脑上不显示加载屏幕
  }

  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader">
          <div className="loading-text">LOADING...</div>
        </div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/assets/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
