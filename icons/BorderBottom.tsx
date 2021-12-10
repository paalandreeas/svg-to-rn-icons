import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

const SvgBorderBottom = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 15 15"
    fill="none"
    color="#000"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 13.25L14 13.25V14.75L1 14.75V13.25Z"
      fill="currentColor"
    />
    <Rect x={7} y={5} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={13} y={5} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={7} y={3} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={13} y={3} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={7} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={7} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={13} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={13} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={5} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={5} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={3} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={3} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={9} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={9} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={11} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={11} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={7} y={9} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={13} y={9} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={7} y={11} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={13} y={11} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={1} y={5} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={1} y={3} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={1} y={7} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={1} y={1} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={1} y={9} width={1} height={1} rx={0.5} fill="currentColor" />
    <Rect x={1} y={11} width={1} height={1} rx={0.5} fill="currentColor" />
  </Svg>
);

export default SvgBorderBottom;
