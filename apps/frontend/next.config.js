const withTM = require("next-transpile-modules")([])

module.exports = withTM({
  reactStrictMode: true,
  publicRuntimeConfig: {
    backendURL: process.env["BACKEND_URL"],
  },
})
