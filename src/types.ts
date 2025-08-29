import { CSSProperties } from 'react';

export interface CursorFollowProps {
  innerSize?: number;
  innerColor?: string;
  innerBorderWidth?: number;
  innerBorderStyle?: string;
  innerBorderColor?: string;
  innerBorderRadius?: number | string;
  innerStyle?: CSSProperties;

  outerSize?: number;
  outerColor?: string;
  outerOpacity?: number;
  outerScale?: number;
  outerBorderWidth?: number;
  outerBorderStyle?: string; 
  outerBorderColor?: string;
  outerBorderRadius?: number | string;
  outerStyle?: CSSProperties;

  trailingSpeed?: number;
  showSystemCursor?: boolean
}

export interface PositionType {
  x: number;
  y: number;
}