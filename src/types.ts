import { CSSProperties } from 'react';

export interface CursorFollowProps {
  innerSize?: number;
  innerColor?: string;
  innerBorder?: string;
  outerSize?: number;
  outerColor?: string;
  outerOpacity?: number;
  outerScale?: number;
  outerBorder?: string;
  outerStyle?: CSSProperties;
  innerStyle?: CSSProperties;
  trailingSpeed?: number;
  showSystemCursor?: boolean;
  clickables?: string[];
}

export interface PositionType {
  x: number;
  y: number;
}

export interface CursorStyleType {
  position: 'fixed';
  left: number | string;
  top: number | string;
  width: number | string;
  height: number | string;
  backgroundColor: string;
  borderRadius: string;
  pointerEvents: 'none';
  transform: string;
  transition: string;
  zIndex: number;
  mixBlendMode: 'difference';
  display?: string;
  opacity?: number;
  willChange?: string;
}
