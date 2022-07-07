import React, { CSSProperties } from "react";

interface Props {
  className?: string;
  name?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  iconSource?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

// const iconsContext = (require as any).context("../../images", true, /\.svg$/);
//
// const icons = iconsContext.keys().reduce((icons: { [x: string]: any }, file: string | any[]) => {
//   // let iconFilename: string;
//
//   const label = file.slice(2, -4); // strip './' and '.svg'
//
//   // if (typeof file === "string") {
//   //   const [, iconFile] = file.split("/");
//   //   iconFilename = iconFile;
//   // }
//
//   console.log(iconsContext);
//   return {
//     ...icons,
//     [label as any]: React.lazy(() => import(`@images/${label}.svg`)),
//   };
// }, {});
//
// const SVGIconComponent: React.FunctionComponent<Props> = ({ name, ...restProps }) => {
//   const IconComponent = icons[name.slice(2, -4)];
//   console.log(icons);
//   return IconComponent ? <IconComponent {...restProps} /> : null;
// };

// export default SVGIconComponent;

export const Icon: React.FunctionComponent<Props> = ({ iconSource: IconComponent, ...restProps }) => {
  return IconComponent ? <IconComponent {...restProps} /> : null;
};
