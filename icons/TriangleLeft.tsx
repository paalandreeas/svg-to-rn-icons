import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgTriangleLeft = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 15 15"
    fill="none"
    color="#000"
    {...props}
  >
    <Path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor" />
  </Svg>
);

export default SvgTriangleLeft;
