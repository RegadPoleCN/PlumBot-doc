import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.38_markdown-it@14.1.0_vuepress-plugin-search-pro@2.0.0-rc.38_vue_szeiggnkys5sqa7ltl7nrtqble/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.26_vuepress@2.0.0-rc.9_@vuepress+bundler-vite@2.0.0-rc.9_@t_tfxcnh7bd2qirpj5ervucrvqvy/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "C:/Users/luobi/Documents/PlumBot-doc/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.38_markdown-it@14.1.0_vuepress-plugin-search-pro@2.0.0-rc.38_vue_szeiggnkys5sqa7ltl7nrtqble/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});