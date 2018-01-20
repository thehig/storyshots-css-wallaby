# storyshots-css-wallaby

Sample test project to assist in the diagnosing of the following error [here](https://github.com/wallabyjs/public/issues/1472)

```
​​​​​[Info]​​​​​ Started Wallaby.js Core v1.0.541
​​[Error] Runtime error: [...]\storyshots-css-wallaby\node_modules\typeface-roboto\index.css:2​​
​​[Error] @font-face {​​
​​[Error] ^​​
​​[Error] SyntaxError: Invalid or unexpected token​​
​​[Error]     at ScriptTransformer._transformAndBuildScript ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\ScriptTransformer.js:289:17)​​
​​[Error]     at ScriptTransformer.transform ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\ScriptTransformer.js:316:21)​​
​​[Error]     at Runtime._execModule ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:494:53)​​
​​[Error]     at Runtime.requireModule ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:329:14)​​
​​[Error]     at Runtime.requireModuleOrMock ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:405:19)​​
​​[Error]     at Object.<anonymous> (.\src\App.js:10:13)​​
​​[Error]     at Runtime._execModule ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:513:13)​​
​​[Error]     at Runtime.requireModule ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:329:14)​​
​​[Error]     at Runtime.requireModuleOrMock ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:405:19)​​
​​[Error]     at Object.<anonymous> (.\src\App.test.js:8:25)​​
​​[Error]     at Runtime._execModule ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:513:13)​​
​​[Error]     at Runtime.requireModule ([...]\storyshots-css-wallaby\node_modules\jest-runtime\build\index.js:329:14)​​
​​[Error]     at jasmine2 ([...]\storyshots-css-wallaby\node_modules\jest-jasmine2\build\index.js:97:11)​​
​​[Error]     at runTest ([...]\storyshots-css-wallaby\node_modules\jest-cli\build\runTest.js:85:10)​​
​​[Error]     at promise.then ([...]\storyshots-css-wallaby\node_modules\jest-cli\build\TestRunner.js:197:14)​​
​​[Error]     at <anonymous>​​
​​[Error]     at process._tickCallback (internal/process/next_tick.js:169:7)​​
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).