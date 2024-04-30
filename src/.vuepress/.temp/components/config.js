import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.26_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9_@types+nod_hj6skumxmgtkcv4ianp5gv5hmm/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.38_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9__bbzxcfjq5jix5auecqf23mcnhm/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.38_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9__bbzxcfjq5jix5auecqf23mcnhm/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.38_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9__bbzxcfjq5jix5auecqf23mcnhm/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
