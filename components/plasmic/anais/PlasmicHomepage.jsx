// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTPBBsFpDxNXZWEGB1hTFr
// Component: _I5OjG_uQyxs
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: -siGeKZerak/component
import MoreButton from "../../MoreButton"; // plasmic-import: bUJeyBWdrf/component
import Cardlanding from "../../Cardlanding"; // plasmic-import: 1p5fdh61qH/component
import TeamMemberCard from "../../TeamMemberCard"; // plasmic-import: oABxe4ux2c/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kRUbIpMZpFGh/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_anais.module.css"; // plasmic-import: pTPBBsFpDxNXZWEGB1hTFr/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: _I5OjG_uQyxs/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array("children", "slot");

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      >
        <div
          data-plasmic-name={"pageContent"}
          data-plasmic-override={overrides.pageContent}
          className={classNames(defaultcss.all, sty.pageContent)}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
          />

          <div
            data-plasmic-name={"heroImage"}
            data-plasmic-override={overrides.heroImage}
            className={classNames(defaultcss.all, sty.heroImage)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__wXVj
              )}
            >
              {"A vos risques et plaisirs..."}
            </div>
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"descriptionSection"}
            data-plasmic-override={overrides.descriptionSection}
            hasGap={true}
            className={classNames(defaultcss.all, sty.descriptionSection)}
          >
            <div className={classNames(defaultcss.all, sty.box__arrtd)}>
              <div
                data-plasmic-name={"sectionTitle"}
                data-plasmic-override={overrides.sectionTitle}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.sectionTitle
                )}
              >
                <span>
                  <span style={{ fontWeight: 700 }}>{"Qui Sommes Nous?"}</span>
                </span>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobile") ? false : true
              ) ? (
                <MoreButton
                  className={classNames(
                    "__wab_instance",
                    sty.moreButton__gE2Be
                  )}
                />
              ) : null}
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"descriptionContent"}
              data-plasmic-override={overrides.descriptionContent}
              hasGap={true}
              className={classNames(defaultcss.all, sty.descriptionContent)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"descPicRow"}
                data-plasmic-override={overrides.descPicRow}
                hasGap={true}
                className={classNames(defaultcss.all, sty.descPicRow)}
              >
                <div
                  data-plasmic-name={"picture1"}
                  data-plasmic-override={overrides.picture1}
                  className={classNames(defaultcss.all, sty.picture1)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__gsbwe
                    )}
                  >
                    {
                      "Conseils en Cadeaux\nManagement d'Evenements\nDesign d'Emballages"
                    }
                  </div>
                </div>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"descPicCol"}
                  data-plasmic-override={overrides.descPicCol}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.descPicCol)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.box___3XLyN)}
                  />

                  {(
                    hasVariant(globalVariants, "screen", "mobile")
                      ? false
                      : true
                  ) ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__oyVkr)}
                    >
                      <div
                        className={classNames(defaultcss.all, sty.box__kss4N)}
                      />

                      <div
                        className={classNames(defaultcss.all, sty.box__d55Q8)}
                      />
                    </p.Stack>
                  ) : null}
                </p.Stack>

                {(
                  hasVariant(globalVariants, "screen", "mobile") ? true : false
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={
                      hasVariant(globalVariants, "screen", "mobile")
                        ? true
                        : false
                    }
                    className={classNames(defaultcss.all, sty.box__ij1S1)}
                  >
                    <MoreButton
                      className={classNames(
                        "__wab_instance",
                        sty.moreButton__kEAfj
                      )}
                    />
                  </p.Stack>
                ) : null}
              </p.Stack>
            </p.Stack>

            {(
              hasVariant(globalVariants, "screen", "mobile") ? false : false
            ) ? (
              <div className={classNames(defaultcss.all, sty.box__hAmpf)} />
            ) : null}
          </p.Stack>

          <div
            data-plasmic-name={"landingBlogSection"}
            data-plasmic-override={overrides.landingBlogSection}
            className={classNames(defaultcss.all, sty.landingBlogSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__enzuh)}
            >
              <div
                data-plasmic-name={"sectiontitle"}
                data-plasmic-override={overrides.sectiontitle}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.sectiontitle
                )}
              >
                <span>
                  <span style={{ fontWeight: 700 }}>{"Nos Posts Recents"}</span>
                </span>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobile") ? false : true
              ) ? (
                <MoreButton
                  className={classNames(
                    "__wab_instance",
                    sty.moreButton___7Z7Y7
                  )}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"postsCardRow"}
              data-plasmic-override={overrides.postsCardRow}
              hasGap={true}
              className={classNames(defaultcss.all, sty.postsCardRow)}
            >
              <Cardlanding
                className={classNames("__wab_instance", sty.cardlanding__ooqfz)}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__vVyBs
                    )}
                  >
                    <span>
                      <span style={{ fontWeight: 700 }}>
                        {"Le 8 Mars Chez Anais Concept"}
                      </span>
                    </span>
                  </div>
                }
                slot2={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___3Neyq
                    )}
                  >
                    {
                      "Enter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some text"
                    }
                  </div>
                }
              >
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__o4Z7Z)}
                  role={"img"}
                  src={
                    "/plasmic/anais/images/_15848462136998431367985588478540649823775615Njpg.jpeg"
                  }
                />
              </Cardlanding>

              <Cardlanding
                className={classNames("__wab_instance", sty.cardlanding__am6Bq)}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___7AJpZ
                    )}
                  >
                    <span>
                      <span style={{ fontWeight: 700 }}>
                        {"Confisseries Premium By Anais"}
                      </span>
                    </span>
                  </div>
                }
                slot2={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__gHlYr
                    )}
                  >
                    {
                      "Enter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some text"
                    }
                  </div>
                }
              >
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__hKo9L)}
                  role={"img"}
                  src={"/plasmic/anais/images/confisseriepremiumjpg.jpeg"}
                />
              </Cardlanding>

              {(
                hasVariant(globalVariants, "screen", "mobile") ? false : true
              ) ? (
                <Cardlanding
                  className={classNames(
                    "__wab_instance",
                    sty.cardlanding__mvpgY
                  )}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__sVtP
                      )}
                    >
                      <span>
                        <span style={{ fontWeight: 700 }}>
                          {"Vente Flash -  Fevrier 2021"}
                        </span>
                      </span>
                    </div>
                  }
                  slot2={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__lXexR
                      )}
                    >
                      {
                        "Enter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some textEnter some text"
                      }
                    </div>
                  }
                >
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__jIRuH)}
                    role={"img"}
                    src={
                      "/plasmic/anais/images/_14953117036316989869463075300001405183192311Njpg.jpeg"
                    }
                  />
                </Cardlanding>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              ) ? (
                <div className={classNames(defaultcss.all, sty.box__zQoub)}>
                  {(
                    hasVariant(globalVariants, "screen", "mobile")
                      ? false
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__hxr6
                      )}
                    >
                      <span>
                        <span style={{ textDecoration: "underline" }}>
                          {"Voir Plus"}
                        </span>
                      </span>
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobile")
                      ? true
                      : false
                  ) ? (
                    <MoreButton
                      className={classNames(
                        "__wab_instance",
                        sty.moreButton__ywHdA
                      )}
                    />
                  ) : null}
                </div>
              ) : null}
            </p.Stack>
          </div>

          <div
            data-plasmic-name={"landingTeamSection"}
            data-plasmic-override={overrides.landingTeamSection}
            className={classNames(defaultcss.all, sty.landingTeamSection)}
          >
            <div className={classNames(defaultcss.all, sty.box__quoce)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box___4Q8Ks)}
              >
                <div
                  data-plasmic-name={"sectiontitle2"}
                  data-plasmic-override={overrides.sectiontitle2}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.sectiontitle2
                  )}
                >
                  <span>
                    <span style={{ fontWeight: 700 }}>{"Notre Equipe"}</span>
                  </span>
                </div>
              </p.Stack>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__pIySg)}
            >
              <TeamMemberCard
                className={classNames(
                  "__wab_instance",
                  sty.teamMemberCard___8SblE
                )}
                slot={p.renderPlasmicSlot({
                  defaultContents: (
                    <img
                      alt={""}
                      className={classNames(defaultcss.img, sty.img__tneFp)}
                      role={"img"}
                      src={
                        "/plasmic/anais/images/_15221368236570063410822388780045188174324182Njpg.jpeg"
                      }
                    />
                  ),

                  value: args.slot
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "CEO",
                  value: args.children
                })}
              </TeamMemberCard>

              <TeamMemberCard
                className={classNames(
                  "__wab_instance",
                  sty.teamMemberCard__okbIo
                )}
                slot={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__a5CEs)}
                    role={"img"}
                    src={
                      "/plasmic/anais/images/_15175423036570061044155956425191485165780788Njpg.jpeg"
                    }
                  />
                }
              >
                {"Name"}
              </TeamMemberCard>

              <TeamMemberCard
                className={classNames(
                  "__wab_instance",
                  sty.teamMemberCard__o8Wyy
                )}
                slot={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__rw0Bt)}
                    role={"img"}
                    src={
                      "/plasmic/anais/images/_15178427336570062044155858267926866914361805Njpg.jpeg"
                    }
                  />
                }
              >
                {"Name"}
              </TeamMemberCard>

              <TeamMemberCard
                className={classNames(
                  "__wab_instance",
                  sty.teamMemberCard___7E0I3
                )}
                slot={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___62Crk)}
                    role={"img"}
                    src={
                      "/plasmic/anais/images/_15240696936570062777489111945654795989093251Njpg.jpeg"
                    }
                  />
                }
              >
                {"Name"}
              </TeamMemberCard>
            </p.Stack>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__mERr9)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___7GaP
              )}
            >
              {"Anais Concept © Copyright 2021"}
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageContent",
    "navBar",
    "heroImage",
    "descriptionSection",
    "sectionTitle",
    "descriptionContent",
    "descPicRow",
    "picture1",
    "descPicCol",
    "landingBlogSection",
    "sectiontitle",
    "postsCardRow",
    "landingTeamSection",
    "sectiontitle2"
  ],

  pageContent: [
    "pageContent",
    "navBar",
    "heroImage",
    "descriptionSection",
    "sectionTitle",
    "descriptionContent",
    "descPicRow",
    "picture1",
    "descPicCol",
    "landingBlogSection",
    "sectiontitle",
    "postsCardRow",
    "landingTeamSection",
    "sectiontitle2"
  ],

  navBar: ["navBar"],
  heroImage: ["heroImage"],
  descriptionSection: [
    "descriptionSection",
    "sectionTitle",
    "descriptionContent",
    "descPicRow",
    "picture1",
    "descPicCol"
  ],

  sectionTitle: ["sectionTitle"],
  descriptionContent: [
    "descriptionContent",
    "descPicRow",
    "picture1",
    "descPicCol"
  ],

  descPicRow: ["descPicRow", "picture1", "descPicCol"],
  picture1: ["picture1"],
  descPicCol: ["descPicCol"],
  landingBlogSection: ["landingBlogSection", "sectiontitle", "postsCardRow"],
  sectiontitle: ["sectiontitle"],
  postsCardRow: ["postsCardRow"],
  landingTeamSection: ["landingTeamSection", "sectiontitle2"],
  sectiontitle2: ["sectiontitle2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageContent: makeNodeComponent("pageContent"),
    navBar: makeNodeComponent("navBar"),
    heroImage: makeNodeComponent("heroImage"),
    descriptionSection: makeNodeComponent("descriptionSection"),
    sectionTitle: makeNodeComponent("sectionTitle"),
    descriptionContent: makeNodeComponent("descriptionContent"),
    descPicRow: makeNodeComponent("descPicRow"),
    picture1: makeNodeComponent("picture1"),
    descPicCol: makeNodeComponent("descPicCol"),
    landingBlogSection: makeNodeComponent("landingBlogSection"),
    sectiontitle: makeNodeComponent("sectiontitle"),
    postsCardRow: makeNodeComponent("postsCardRow"),
    landingTeamSection: makeNodeComponent("landingTeamSection"),
    sectiontitle2: makeNodeComponent("sectiontitle2"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
