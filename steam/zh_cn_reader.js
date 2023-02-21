// 检测文件中中文字符，并保存到新文件
const fs = require('fs');
const path = require('path');
const os = require('os');

const filesMap = [];
const TARGET_DIR = './src';

function walkDirSync(dirPath, callback) {
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((dirent) => {
    const filePath = path.join(dirPath, dirent.name);
    if (dirent.isFile()) {
      callback(filePath, dirent);
    } else if (dirent.isDirectory()) {
      walkDirSync(filePath, callback);
    }
  });
}
walkDirSync(TARGET_DIR, (filePath) => {
  if (filePath.indexOf('src/assets') >= 0) return;
  filesMap.push(filePath);
});
console.log('文件目录', filesMap);

const output = fs.createWriteStream('./zh_cn_output.txt');
let i = 0;
function collectChinese() {
  if (i >= filesMap.length) {
    console.log('搞定');
    output.close();
    return;
  }
  const filePath = filesMap[i];
  fs.readFile(filePath, (err, data) => {
    const text = data.toString();
    const zhCN = text.replace(/[^\u4e00-\u9fa5：]/g, '');
    if (zhCN.trim()) {
      output.write(zhCN);
      output.write(os.EOL);
    }
    i++;
    collectChinese();
  });
}
collectChinese();
