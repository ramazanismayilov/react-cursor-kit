import { CSSProperties } from 'react';

export interface CursorKitType {
  innerSize?: number;
  innerColor?: string;
  innerOpacity?: number
  innerBorderWidth?: number;
  innerBorderStyle?: string;
  innerBorderColor?: string;
  innerBorderRadius?: number | string;
  innerStyle?: CSSProperties;

  outerSize?: number;
  outerColor?: string;
  outerOpacity?: number;
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