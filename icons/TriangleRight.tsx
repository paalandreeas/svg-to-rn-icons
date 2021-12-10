import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgTriangleRight = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 15 15"
    fill="none"
    color="#000"
    {...props}
  >
    <Path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
  </Svg>
);

export default SvgTriangleRight;
