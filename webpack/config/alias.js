/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
import { join } from "path";

import { rootDir } from "../utils/env";

export const aliasItems = {
  "@src": join(rootDir, "/src"),
  "@images": join(rootDir, "/src/images"),
  "@styles": join(rootDir, "/src/styles"),
  "@components": join(rootDir, "/src/components"),
  "@assets": join(rootDir, "/src/assets"),
  "@helpers": join(rootDir, "/src/helpers"),
  "@modules": join(rootDir, "/src/modules"),
  "~types": join(rootDir, "/src/@types"),
  "~hooks": join(rootDir, "/src/hooks"),
};
