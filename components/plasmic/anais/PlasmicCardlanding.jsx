// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTPBBsFpDxNXZWEGB1hTFr
// Component: 1p5fdh61qH
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_anais.module.css"; // plasmic-import: pTPBBsFpDxNXZWEGB1hTFr/projectcss
import * as sty from "./PlasmicCardlanding.module.css"; // plasmic-import: 1p5fdh61qH/css

export const PlasmicCardlanding__VariantProps = new Array();

export const PlasmicCardlanding__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

function PlasmicCardlanding__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box___09LDw)}>
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.children
        })}
      </div>

      <div className={classNames(defaultcss.all, sty.box__pm4Gb)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <span>
              <span style={{ fontWeight: 700 }}>{"Post Title"}</span>
            </span>
          ),

          value: args.slot,
          className: classNames(sty.slotSlot)
        })}
      </div>

      <div className={classNames(defaultcss.all, sty.box__isyZ)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Enter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some text",
          value: args.slot2,
          className: classNames(sty.slotSlot2)
        })}
      </div>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box___9V7Vy
        )}
      >
        {"Lire Plus"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCardlanding__ArgProps,
      internalVariantPropNames: PlasmicCardlanding__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCardlanding__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardlanding";
  } else {
    func.displayName = `PlasmicCardlanding.${nodeName}`;
  }
  return func;
}

export const PlasmicCardlanding = Object.assign(
  // Top-level PlasmicCardlanding renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCardlanding
    internalVariantProps: PlasmicCardlanding__VariantProps,
    internalArgProps: PlasmicCardlanding__ArgProps
  }
);

export default PlasmicCardlanding;
/* prettier-ignore-end */
