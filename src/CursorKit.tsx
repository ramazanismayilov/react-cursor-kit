import React, { useMemo, useEffect, useState } from "react";
import { CursorKitType } from "./types/cursor-type";
import { useCursor } from "./hook/useCursor";
import CursorOuter from "./components/CursorOuter";
import CursorInner from "./components/CursorInner";

const CursorKit: React.FC<CursorKitType> = ({
  innerSize = 7,
  innerColor = "#ff0000",
  innerOpacity = 1,
  innerBorderWidth = 1,
  innerBorderStyle = "solid",
  innerBorderColor = "#ff0000",
  innerBorderRadius = "50%",
  innerStyle = {},

  outerSize = 50,
  outerColor = "transparent",
  outerOpacity = 0.8,
  outerBorderWidth = 1,
  outerBorderStyle = "solid",
  outerBorderColor = "#ff0000",
  outerBorderRadius = "50%",
  outerStyle = {},

  trailingSpeed = 10,
  showSystemCursor = false,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasLargeScreen = window.innerWidth >= 1024;
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isDesktopDevice = hasLargeScreen && !hasTouchScreen && !isMobileDevice;
      setIsDesktop(isDesktopDevice);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const { cursorOuterRef, cursorInnerRef, isVisible } = useCursor(trailingSpeed, innerSize, outerSize);

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    top: 0,
    left: 0,
    zIndex: 9999,
    willChange: "transform",
  };

  const outerCursorStyle: React.CSSProperties = useMemo(
    () => ({
      ...baseStyle,
      width: outerSize,
      height: outerSize,
      backgroundColor: outerColor,
      opacity: outerOpacity,
      borderWidth: `${outerBorderWidth}px`,
      borderStyle: outerBorderStyle,
      borderColor: outerBorderColor,
      borderRadius: typeof outerBorderRadius === "number" ? `${outerBorderRadius}px` : outerBorderRadius,
      ...outerStyle,
    }),
    [outerSize, outerColor, outerOpacity, outerBorderWidth, outerBorderStyle, outerBorderColor, outerBorderRadius, outerStyle]
  );

  const innerCursorStyle: React.CSSProperties = useMemo(
    () => ({
      ...baseStyle,
      width: innerSize,
      height: innerSize,
      backgroundColor: innerColor,
      opacity: innerOpacity,
      borderWidth: `${innerBorderWidth}px`,
      borderStyle: innerBorderStyle,
      borderColor: innerBorderColor,
      borderRadius: typeof innerBorderRadius === "number" ? `${innerBorderRadius}px` : innerBorderRadius,
      ...innerStyle,
    }),
    [innerSize, innerColor, innerOpacity, innerBorderWidth, innerBorderStyle, innerBorderColor, innerBorderRadius, innerStyle]
  );

  const globalCursorStyle = useMemo(() => {
    if (showSystemCursor || !isDesktop) return '';
    return `
      *, *::before, *::after {
        cursor: none !important;
      }
      html, body {
        cursor: none !important;
      }
    `;
  }, [showSystemCursor, isDesktop]);

  if (!isVisible || !isDesktop) return null;

  return (
    <>
      <CursorOuter style={outerCursorStyle} outerRef={cursorOuterRef} />
      <CursorInner style={innerCursorStyle} innerRef={cursorInnerRef} />
      {globalCursorStyle && <style dangerouslySetInnerHTML={{ __html: globalCursorStyle }} />}
    </>
  );
};

export default React.memo(CursorKit);
