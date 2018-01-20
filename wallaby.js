module.exports = function(wallaby) {
  // Babel, jest-cli and some other modules are located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require("path");
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, "node_modules") +
    path.delimiter +
    path.join(__dirname, "node_modules/react-scripts/node_modules");
  require("module").Module._initPaths();

  // Babel needs this
  process.env.NODE_ENV = "development";

  var babelCompiler = wallaby.compilers.babel({
    babel: require("babel-core"),
    presets: ["react-app"]
  });

  return {
    files: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.snap",
      "!src/**/*.test.js",
      "src/**/*.stories.js",
      ".storybook/**/*.js"
    ],
    tests: [
      "src/**/*.test.js"
    ],
    env: { type: "node", runner: "node" },
    compilers: {
      "**/*.js": babelCompiler,
      ".storybook/**/*.js": babelCompiler
    },
    setup: wallaby => {
      wallaby.testFramework.configure({
        // as in node_modules/react-scripts/utils/createJestConfig.js
        moduleNameMapper: {
          "^.+\\.(jpg|jpeg|png|gif|svg)$": require.resolve(
            "react-scripts/config/jest/fileTransform.js"
          ),
          "^.+\\.css$": require.resolve(
            "react-scripts/config/jest/cssTransform.js"
          )
        }
      });
    },
    testFramework: "jest"
  };
};
