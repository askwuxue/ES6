// 基本⽤法如下。
// # 转码结果输出到标准输出
// $ babel example.js
// # 转码结果写⼊⼀个⽂件
// # --out-file 或 -o 参数指定输出⽂件
// $ babel example.js --out-file compiled.js
// # 或者
// $ babel example.js -o compiled.js
// # 整个⽬录转码
// # --out-dir 或 -d 参数指定输出⽬录
// $ babel src --out-dir lib
// # 或者
// $ babel src -d lib
// # -s 参数⽣成 source map ⽂件
// $ babel src -d lib -s
// 上⾯代码是在全局环境下，进⾏ Babel 转码。这意味着，如果项⽬要运⾏，全局环境必须有 Babel ，也就是说项⽬产⽣了对环境的依赖。另⼀⽅
// ⾯，这样做也⽆法⽀持不同项⽬使⽤不同版本的 Babel 。
// ⼀个解决办法是将 babel-cli 安装在项⽬之中。

// babel-cli ⼯具⾃带⼀个 babel-node 命令，提供⼀个⽀持 ES6 的 REPL 环境。它⽀持 Node 的 REPL 环境的所有功能，⽽且可
// 以直接运⾏ ES6 代码。
// 它不⽤单独安装，⽽是随 babel-cli ⼀起安装。然后，执⾏ babel-node 就进⼊ REPL 环境。
// $ babel-node
// > (x => x * 2)(1)
// 2
// babel-node 命令可以直接运⾏ ES6 脚本。将上⾯的代码放⼊脚本⽂件 es6.js ，然后直接运⾏。
// $ babel-node es6.js
// 2
// babel-node 也可以安装在项⽬中。
// $ npm install --save-dev babel-cli
// 然后，改写 package.json 。
// {
// "scripts": {
// "script-name": "babel-node script.js"
// }
// }
// 上⾯代码中，使⽤ babel-node 替代 node ，这样 script.js 本身就不⽤做任何转码处理。

let a = 3;