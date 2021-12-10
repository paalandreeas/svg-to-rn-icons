import React from "react";
import { SvgProps } from "react-native-svg";
import IconMap from "./icons";

interface Props extends SvgProps {
  name: keyof typeof IconMap;
  size?: number;
}

const Icon: React.FC<Props> = (props: Props): JSX.Element => {
  const Icon = IconMap[props.name];
  return (
    <Icon height={props.size ?? 24} width={props.height ?? 24} {...props} />
  );
};

export default Icon;
