module.exports = {
  root: true,
  extends: ["@quantum/eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
}
