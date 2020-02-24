module.exports = {
  staticFileGlobs: [
    "build/static/css/*.css",
    "build/static/js/*.js",
    "build/200.html",
    "build/index.html"
  ],
  stripPrefix: "build",
  publicPath: ".",
  navigateFallback: "/200.html",
  navigateFallbackWhitelist: [/^(?!\/__).*/],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  runtimeCaching: [
    {
      urlPattern: /api/,
      handler: "fastest"
    }
  ]
};
