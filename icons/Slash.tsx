import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgSlash = (props: SvgProps) => (
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
      d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgSlash;
