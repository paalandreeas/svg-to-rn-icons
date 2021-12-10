import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgTriangleDown = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 15 15"
    fill="none"
    color="#000"
    {...props}
  >
    <Path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
  </Svg>
);

export default SvgTriangleDown;
