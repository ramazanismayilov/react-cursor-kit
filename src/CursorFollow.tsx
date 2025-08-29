import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CursorFollowProps, PositionType } from './types';

const CursorFollow: React.FC<CursorFollowProps> = ({
  innerSize = 7,
  innerColor = '#FF2D00',
  innerBorder = '',
  outerSize = 50,
  outerColor = '',
  outerOpacity = 0.1,
  outerScale = 1,
  outerBorder = '2px solid #FF2D00',
  outerStyle = {},
  innerStyle = {},
  trailingSpeed = 4,
  showSystemCursor = false,
}) => {
  const [mousePosition, setMousePosition] = useState<PositionType>({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState<PositionType>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const isAnimatingRef = useRef(false);

  // Memoized viewport boundaries calculation
  const boundaries = useMemo(() => {
    const { innerWidth, innerHeight } = window;
    const scaledOuterSize = outerSize * outerScale;

    return {
      inner: {
        maxX: innerWidth - innerSize,
        maxY: innerHeight - innerSize,
        minX: 0,
        minY: 0
      },
      outer: {
        maxX: innerWidth - scaledOuterSize,
        maxY: innerHeight - scaledOuterSize,
        minX: 0,
        minY: 0
      }
    };
  }, [innerSize, outerSize, outerScale]);

  // Optimized position calculation with boundary constraints
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

  // Smooth animation loop with performance optimizations
  const animateCursor = useCallback(() => {
    const outerElement = cursorOuterRef.current;
    const innerElement = cursorInnerRef.current;

    if (!outerElement || !innerElement) {
      animationFrameRef.current = requestAnimationFrame(animateCursor);
      return;
    }

    // Calculate inner cursor position (follows mouse directly)
    const innerTarget = calculateBoundedPosition(
      mousePosition.x,
      mousePosition.y,
      innerSize
    );

    // Calculate outer cursor position with smooth trailing
    const outerTarget = calculateBoundedPosition(
      mousePosition.x,
      mousePosition.y,
      outerSize,
      outerScale
    );

    const newOuterX = outerPosition.x + (outerTarget.x - outerPosition.x) / trailingSpeed;
    const newOuterY = outerPosition.y + (outerTarget.y - outerPosition.y) / trailingSpeed;

    setOuterPosition({ x: newOuterX, y: newOuterY });

    // Apply transforms using GPU acceleration
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

  // Event handlers with performance optimizations
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
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

  // Setup and cleanup effects
  useEffect(() => {
    const events = [
      { type: 'mousemove', handler: handleMouseMove },
      { type: 'mouseenter', handler: handleMouseEnter },
      { type: 'mouseleave', handler: handleMouseLeave },
    ] as const;

    // Add event listeners with passive option for better performance
    events.forEach(({ type, handler }) => {
      document.addEventListener(type, handler, { passive: true });
    });

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start animation immediately
    handleMouseEnter();

    return () => {
      // Cleanup all event listeners
      events.forEach(({ type, handler }) => {
        document.removeEventListener(type, handler);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleVisibilityChange]);

  // Memoized base styles for better performance
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

  const outerCursorStyle: React.CSSProperties = useMemo(() => ({
    ...baseStyle,
    width: outerSize,
    height: outerSize,
    backgroundColor: outerColor,
    opacity: outerOpacity,
    border: outerBorder,
    boxSizing: 'border-box',
    ...outerStyle,
  }), [baseStyle, outerSize, outerColor, outerOpacity, outerBorder, outerStyle]);

  const innerCursorStyle: React.CSSProperties = useMemo(() => ({
    ...baseStyle,
    width: innerSize,
    height: innerSize,
    backgroundColor: innerColor,
    border: innerBorder,
    boxSizing: 'border-box',
    ...innerStyle,
  }), [baseStyle, innerSize, innerColor, innerBorder, innerStyle]);

  // Global cursor hiding styles
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

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <>
      {/* Outer Cursor */}
      <div
        ref={cursorOuterRef}
        style={outerCursorStyle}
        aria-hidden="true"
        data-cursor="outer"
      />

      {/* Inner Cursor */}
      <div
        ref={cursorInnerRef}
        style={innerCursorStyle}
        aria-hidden="true"
        data-cursor="inner"
      />

      {/* Global cursor hiding styles */}
      {globalCursorStyles && (
        <style dangerouslySetInnerHTML={{ __html: globalCursorStyles }} />
      )}
    </>
  );
};

export default React.memo(CursorFollow);