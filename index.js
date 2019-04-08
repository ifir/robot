const argv = process.argv;
const path = require('path');
//读取输入命令对应的文件夹，执行相对应的命令
const cmd = require(path.join(process.cwd(), `/src/cmd/${argv[2] || 'help'}/index.js`));

cmd(argv);