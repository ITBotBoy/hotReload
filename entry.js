//有几个文件需要修改后实时刷新就require对应的文件
require('./index.html')
require('./js/index.js')
require("!style-loader!css-loader!./css/index.less");
console.log("hot update ok 。。。。。。");
