/**
 * @see https://webpack.js.org/configuration/dev-server/
 */

import { defaultPort } from "../utils/env";
import { devServerProxyConfig } from "./devServerProxy";

export const devServerConfig = {
  client: {
    overlay: false,
  },
  port: defaultPort,
  headers: { "Access-Control-Allow-Origin": "*" },
  historyApiFallback: true,
  hot: true,
  proxy: devServerProxyConfig,
  static: {
    publicPath: "/",
  },
};
