import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";

const SvgDragHandleDots1 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 15 15"
    fill="none"
    color="#000"
    {...props}
  >
    <Circle cx={4.5} cy={2.5} r={0.6} fill="currentColor" />
    <Circle cx={4.5} cy={4.5} r={0.6} fill="currentColor" />
    <Circle cx={4.5} cy={6.499} r={0.6} fill="currentColor" />
    <Circle cx={4.5} cy={8.499} r={0.6} fill="currentColor" />
    <Circle cx={4.5} cy={10.498} r={0.6} fill="currentColor" />
    <Circle cx={4.5} cy={12.498} r={0.6} fill="currentColor" />
    <Circle cx={6.5} cy={2.5} r={0.6} fill="currentColor" />
    <Circle cx={6.5} cy={4.5} r={0.6} fill="currentColor" />
    <Circle cx={6.5} cy={6.499} r={0.6} fill="currentColor" />
    <Circle cx={6.5} cy={8.499} r={0.6} fill="currentColor" />
    <Circle cx={6.5} cy={10.498} r={0.6} fill="currentColor" />
    <Circle cx={6.5} cy={12.498} r={0.6} fill="currentColor" />
    <Circle cx={8.499} cy={2.5} r={0.6} fill="currentColor" />
    <Circle cx={8.499} cy={4.5} r={0.6} fill="currentColor" />
    <Circle cx={8.499} cy={6.499} r={0.6} fill="currentColor" />
    <Circle cx={8.499} cy={8.499} r={0.6} fill="currentColor" />
    <Circle cx={8.499} cy={10.498} r={0.6} fill="currentColor" />
    <Circle cx={8.499} cy={12.498} r={0.6} fill="currentColor" />
    <Circle cx={10.499} cy={2.5} r={0.6} fill="currentColor" />
    <Circle cx={10.499} cy={4.5} r={0.6} fill="currentColor" />
    <Circle cx={10.499} cy={6.499} r={0.6} fill="currentColor" />
    <Circle cx={10.499} cy={8.499} r={0.6} fill="currentColor" />
    <Circle cx={10.499} cy={10.498} r={0.6} fill="currentColor" />
    <Circle cx={10.499} cy={12.498} r={0.6} fill="currentColor" />
  </Svg>
);

export default SvgDragHandleDots1;
