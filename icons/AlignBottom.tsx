import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgAlignBottom = (props: SvgProps) => (
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
      d="M9 3C9 2.44772 8.55229 2 8 2H7C6.44772 2 6 2.44772 6 3L6 14H1.5C1.22386 14 1 14.2239 1 14.5C1 14.7761 1.22386 15 1.5 15L6 15H9H13.5C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14H9V3Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgAlignBottom;
