// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: j5vejMQNKZgqgWtrVNkPjM
// Component: 8qoPsE15wpV8RJ
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
import * as sty from "./PlasmicAvatar.module.css" // plasmic-import: 8qoPsE15wpV8RJ/css
import profilepic7MkT8JkQbemcoG from "./images/profilepic.png" // plasmic-import: 7mkT8JkQbemcoG/picture

export const PlasmicAvatar__VariantProps = new Array()

export const PlasmicAvatar__ArgProps = new Array("pic")

function PlasmicAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__xFs2O)}
            role={"img"}
            src={profilepic7MkT8JkQbemcoG}
          />
        ),

        value: args.pic,
      })}
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatar__ArgProps,
      internalVariantPropNames: PlasmicAvatar__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatar"
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`
  }
  return func
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps,
  }
)

export default PlasmicAvatar
/* prettier-ignore-end */
