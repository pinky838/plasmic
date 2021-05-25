// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j5vejMQNKZgqgWtrVNkPjM
// Component: BdWMeaFQYwVmJ2
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: j5vejMQNKZgqgWtrVNkPjM/projectcss
import * as sty from "./PlasmicBullet.module.css" // plasmic-import: BdWMeaFQYwVmJ2/css
import Done24Pxsvg2Icon from "./icons/PlasmicIcon__Done24Pxsvg2" // plasmic-import: LvmnTYXjfQEU51/icon

export const PlasmicBullet__VariantProps = new Array()

export const PlasmicBullet__ArgProps = new Array("children")

function PlasmicBullet__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Done24Pxsvg2Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />

      {p.renderPlasmicSlot({
        defaultContents: "Lorem ipsum dolor velit",
        value: args.children,
      })}
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBullet__ArgProps,
      internalVariantPropNames: PlasmicBullet__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicBullet__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicBullet"
  } else {
    func.displayName = `PlasmicBullet.${nodeName}`
  }
  return func
}

export const PlasmicBullet = Object.assign(
  // Top-level PlasmicBullet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicBullet
    internalVariantProps: PlasmicBullet__VariantProps,
    internalArgProps: PlasmicBullet__ArgProps,
  }
)

export default PlasmicBullet
/* prettier-ignore-end */
