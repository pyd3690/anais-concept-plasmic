// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HanbMenusvg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8.667 15h30a1 1 0 100-2h-30a1 1 0 100 2zm0 22h30a1 1 0 100-2h-30a1 1 0 100 2zm0-11h30a1 1 0 100-2h-30a1 1 0 100 2z"
        }
      ></path>
    </svg>
  );
}

export default HanbMenusvg2Icon;
/* prettier-ignore-end */
