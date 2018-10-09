export default {
  "presets": [
   "@babel/preset-flow",
    [ "@babel/preset-env", {
      "modules": false,
      "loose": true,
      "useBuiltIns": false,
      "targets": {
        "browsers": [ "last 2 versions", "not ie <= 8" ]
      },
      "exclude": [ "transform-typeof-symbol", "transform-function-name", "transform-classes" ]
    } ]
  ],
  "plugins": [
    [ "@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
    [ "module:@hitv/plugin-proposal-decorators", { "legacy": true } ],
    [ "module:@hitv/plugin-proposal-class-properties", { "loose": true } ],
    [ "@babel/plugin-transform-runtime", { "helpers": false } ],
    [ "module:@hitv/plugin-transform-classes", { "loose": true } ],
    [ "module:@hitv/plugin-transform-aliases", { "helpers": false } ]
  ],
  "comments": false
}
