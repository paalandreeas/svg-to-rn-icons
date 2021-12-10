import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgTriangleUp = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 15 15"
    fill="none"
    color="#000"
    {...props}
  >
    <Path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor" />
  </Svg>
);

export default SvgTriangleUp;
