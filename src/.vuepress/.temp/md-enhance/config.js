import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.26_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9_@types+nod_hj6skumxmgtkcv4ianp5gv5hmm/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Tabs from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.38_markdown-it@14.1.0_vuepress@2.0.0-rc.9_@vuepress+bundl_tc2xwsoujx2yl5jltqv4ecmseq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
