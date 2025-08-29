import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CursorFollowProps, PositionType } from './types';

const CursorKit: React.FC<CursorFollowProps> = ({ 
  innerSize = 7,
  innerColor = 'rgba(255, 0, 0, 1)',
  innerBorderWidth = 0,
  innerBorderStyle = '',
  innerBorderColor = '',
  innerBorderRadius = '50%',
  innerStyle = {},

  outerSize = 50,
  outerColor = 'transparent',
  outerOpacity = 0.8,
  outerScale = 1,
  outerBorderWidth = 1,
  outerBorderStyle = 'solid',
  outerBorderColor = 'rgba(255, 0, 0, 1)',
  outerBorderRadius = '50%',
  outerStyle = {},

  trailingSpeed = 10,
  showSystemCursor = false,
}) => {
  const [mousePosition, setMousePosition] = useState<PositionType>({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState<PositionType>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const isAnimatingRef = useRef(false);

  const calculateBoundedPosition = useCallback((
    targetX: number,
    targetY: number,
    elementSize: number,
    scale: number = 1
  ): PositionType => {
    const { innerWidth, innerHeight } = window;
    const scaledSize = elementSize * scale;

    return {
      x: Math.max(0, Math.min(targetX - scaledSize / 2, innerWidth - scaledSize)),
      y: Math.max(0, Math.min(targetY - scaledSize / 2, innerHeight - scaledSize))
    };
  }, []);

  const animateCursor = useCallback(() => {
    const outerElement = cursorOuterRef.current;
    const innerElement = cursorInnerRef.current;

    if (!outerElement || !innerElement) {
      animationFrameRef.current = requestAnimationFrame(animateCursor);
      return;
    }

    const innerTarget = calculateBoundedPosition(mousePosition.x, mousePosition.y, innerSize);
    const outerTarget = calculateBoundedPosition(mousePosition.x, mousePosition.y, outerSize, outerScale);

    const newOuterX = outerPosition.x + (outerTarget.x - outerPosition.x) / trailingSpeed;
    const newOuterY = outerPosition.y + (outerTarget.y - outerPosition.y) / trailingSpeed;

    setOuterPosition({ x: newOuterX, y: newOuterY });

    innerElement.style.transform = `translate3d(${innerTarget.x}px, ${innerTarget.y}px, 0)`;
    outerElement.style.transform = `translate3d(${newOuterX}px, ${newOuterY}px, 0) scale(${outerScale})`;

    animationFrameRef.current = requestAnimationFrame(animateCursor);
  }, [
    mousePosition,
    outerPosition,
    calculateBoundedPosition,
    innerSize,
    outerSize,
    outerScale,
    trailingSpeed
  ]);

  const isInteractiveElement = (element: Element): boolean => {
    const interactiveSelectors = ['a', 'button', '[role="button"]', '[tabindex]'];
    return interactiveSelectors.some(selector =>
      element.matches(selector) || element.closest(selector)
    );
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    const target = e.target as Element;
    setIsHovering(isInteractiveElement(target));
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    }
  }, [animateCursor]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    isAnimatingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsVisible(false);
      isAnimatingRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, []);

  useEffect(() => {
    const events = [
      { type: 'mousemove', handler: handleMouseMove },
      { type: 'mouseenter', handler: handleMouseEnter },
      { type: 'mouseleave', handler: handleMouseLeave },
    ] as const;

    events.forEach(({ type, handler }) => {
      document.addEventListener(type, handler, { passive: true });
    });

    document.addEventListener('visibilitychange', handleVisibilityChange);

    handleMouseEnter();

    return () => {
      events.forEach(({ type, handler }) => {
        document.removeEventListener(type, handler);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleVisibilityChange]);

  const baseStyle: React.CSSProperties = useMemo(() => ({
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    zIndex: 9999,
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    perspective: 1000,
  }), []);

  const outerCursorStyle: React.CSSProperties = useMemo(() => {
    const size = isHovering ? outerSize + 20 : outerSize;
    const borderWidth = isHovering ? outerBorderWidth + 1 : outerBorderWidth;
    const opacity = isHovering ? Math.min(outerOpacity + 0.2, 1) : outerOpacity;

    return {
      ...baseStyle,
      width: size,
      height: size,
      backgroundColor: outerColor,
      opacity: opacity,
      borderWidth: `${borderWidth}px`,
      borderStyle: outerBorderStyle,
      borderColor: outerBorderColor,
      borderRadius: typeof outerBorderRadius === 'number' ? `${outerBorderRadius}px` : outerBorderRadius,
      boxSizing: 'border-box',
      transition: 'width 0.2s ease, height 0.2s ease, border-width 0.2s ease, opacity 0.2s ease',
      ...outerStyle,
    };
  }, [
    baseStyle,
    outerSize,
    outerColor,
    outerOpacity,
    outerBorderWidth,
    outerBorderStyle,
    outerBorderColor,
    outerBorderRadius,
    outerStyle,
    isHovering
  ]);

  const innerCursorStyle: React.CSSProperties = useMemo(() => ({
    ...baseStyle,
    width: innerSize,
    height: innerSize,
    backgroundColor: innerColor,
    borderWidth: `${innerBorderWidth}px`,
    borderStyle: innerBorderStyle,
    borderColor: innerBorderColor,
    borderRadius: typeof innerBorderRadius === 'number' ? `${innerBorderRadius}px` : innerBorderRadius,
    boxSizing: 'border-box',
    ...innerStyle,
  }), [
    baseStyle,
    innerSize,
    innerColor,
    innerBorderWidth,
    innerBorderStyle,
    innerBorderColor,
    innerBorderRadius,
    innerStyle
  ]);

  const globalCursorStyles = useMemo(() => {
    if (showSystemCursor) return '';

    return `
      *, *::before, *::after {
        cursor: none !important;
      }
      
      html, body {
        cursor: none !important;
      }
    `;
  }, [showSystemCursor]);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorOuterRef}
        style={outerCursorStyle}
        aria-hidden="true"
        data-cursor="outer"
      />
      <div
        ref={cursorInnerRef}
        style={innerCursorStyle}
        aria-hidden="true"
        data-cursor="inner"
      />
      {globalCursorStyles && (
        <style dangerouslySetInnerHTML={{ __html: globalCursorStyles }} />
      )}
    </>
  );
};

export default React.memo(CursorKit);