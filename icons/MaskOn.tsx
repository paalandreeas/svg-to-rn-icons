import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgMaskOn = (props: SvgProps) => (
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
      d="M1 1C0.447715 1 0 1.44772 0 2V13C0 13.5523 0.447715 14 1 14H14C14.5523 14 15 13.5523 15 13V2C15 1.44772 14.5523 1 14 1H1ZM7.5 10.625C9.22589 10.625 10.625 9.22589 10.625 7.5C10.625 5.77411 9.22589 4.375 7.5 4.375C5.77411 4.375 4.375 5.77411 4.375 7.5C4.375 9.22589 5.77411 10.625 7.5 10.625Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgMaskOn;
