import React from "react";
import mouseEffect from "../../common/mouseEffect";
import { useRouter } from "next/router";

const Cursor = () => {
  const router = useRouter();

  React.useEffect(() => {
    // 定义媒体查询
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)");

    // 应用鼠标特效，除非在移动设备上
    if (!isMobileOrTablet.matches) {
      mouseEffect();
    }

    // 监听路由变化
    const handleRouteChange = () => {
      // 当路由变化时，重新应用鼠标特效
      if (!isMobileOrTablet.matches) {
        mouseEffect();
      }
    };

    // 添加路由变化监听器
    router.events.on("routeChangeStart", handleRouteChange);

    // 移除路由变化监听器
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
