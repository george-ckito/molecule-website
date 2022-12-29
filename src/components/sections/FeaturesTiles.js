import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Build up the whole picture",
    paragraph:
      "Molecule is a simple Command Line Application written in C#. It helps you generate discord.js bots. Its currently only available on Windows.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Easy to use</h4>
                  <p className="m-0 text-sm">
                    Using molecule is pretty straightforward and easy.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Events</h4>
                  <p className="m-0 text-sm">
                    Molecule has the list of events. In molecule event files, it
                    also specifies events link in documentation.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Commands</h4>
                  <p className="m-0 text-sm">
                    Bring your command ideas to life. No need to worry about
                    handling slash commands, molecule does it for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Database</h4>
                  <p className="m-0 text-sm">
                    Molecule has the connectivity to database set up too.
                    Molecule connects your bot to a MongoDB.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Open Source</h4>
                  <p className="m-0 text-sm">
                    Molecule is written in C# and uses some of external
                    packages. The source code is on molecule github page
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Configuration</h4>
                  <p className="m-0 text-sm">
                    Molecule stores projects configuration in a simple json file
                    called: molecule.json.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
