import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgAlignLeft = (props: SvgProps) => (
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
      d="M0.499995 0.999995C0.223855 0.999995 -5.58458e-07 1.22385 -5.46388e-07 1.49999L-2.18554e-08 13.4999C-9.78492e-09 13.776 0.223855 13.9999 0.499995 13.9999C0.776136 13.9999 0.999991 13.776 0.999991 13.4999L0.999991 8.99993L12 8.99993C12.5523 8.99993 13 8.55222 13 7.99993L13 6.99994C13 6.44766 12.5523 5.99995 12 5.99995L0.999991 5.99995L0.999991 1.49999C0.999991 1.22385 0.776135 0.999995 0.499995 0.999995Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgAlignLeft;
