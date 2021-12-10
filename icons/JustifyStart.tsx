import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgJustifyStart = (props: SvgProps) => (
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
      d="M1.05005 13.5005C1.05005 13.749 1.25152 13.9505 1.50005 13.9505C1.74858 13.9505 1.95005 13.749 1.95005 13.5005L1.95005 1.50047C1.95005 1.25194 1.74858 1.05047 1.50005 1.05047C1.25152 1.05047 1.05005 1.25194 1.05005 1.50047L1.05005 13.5005ZM11 9.00003L4.00002 9.00003L4.00002 6.00003L11 6.00003L11 9.00003ZM3.75002 10C3.33581 10 3.00002 9.66424 3.00002 9.25003L3.00002 5.75003C3.00002 5.33582 3.33581 5.00003 3.75002 5.00003L11.25 5.00003C11.6642 5.00003 12 5.33582 12 5.75003L12 9.25003C12 9.66424 11.6642 10 11.25 10L3.75002 10Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgJustifyStart;
