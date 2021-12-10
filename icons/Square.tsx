import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgSquare = (props: SvgProps) => (
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
      d="M1 1H1.5H13.5H14V1.5V13.5V14H13.5H1.5H1V13.5V1.5V1ZM2 2V13H13V2H2Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgSquare;
