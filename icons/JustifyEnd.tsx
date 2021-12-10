import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgJustifyEnd = (props: SvgProps) => (
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
      d="M13.95 1.49953C13.95 1.251 13.7485 1.04953 13.5 1.04953C13.2514 1.04953 13.05 1.251 13.05 1.49953L13.05 13.4995C13.05 13.7481 13.2514 13.9495 13.5 13.9495C13.7485 13.9495 13.95 13.7481 13.95 13.4995L13.95 1.49953ZM3.99997 5.99997L11 5.99997L11 8.99997L3.99997 8.99997L3.99997 5.99997ZM11.25 4.99997C11.6642 4.99997 12 5.33576 12 5.74997L12 9.24997C12 9.66418 11.6642 9.99997 11.25 9.99997L3.74997 9.99997C3.33576 9.99997 2.99997 9.66418 2.99997 9.24997L2.99997 5.74997C2.99998 5.33576 3.33576 4.99997 3.74998 4.99997L11.25 4.99997Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgJustifyEnd;
