export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Project home","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"Disabling layout and features","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"Encryption Article","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"Layout","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown Enhance","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"Page Config","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Features demo","i":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar feature","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo feature","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/luobi/Documents/PlumBot-doc/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
