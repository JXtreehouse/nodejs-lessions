/**
 * 导出文件生成md5
 */
const fs = require('fs')
const crypto = require('crypto')
const rootPath = './dist/h5/'
const md5File = 'md5conf.json'
const str = 'h5'
const re = new RegExp(`\/${str}\/`, 'g')

const files = fs.readdirSync(rootPath)

const md5Info = Object.create(null)

// 替换path
files.forEach((element, i) => {
  console.log(element)
  const filePath = rootPath + element
  const stat = fs.statSync(filePath)
  console.log(stat)
  if(stat.isFile()) { // 如果 fs.Stats 对象描述常规文件，则返回 true
    const data = fs.readFileSync(filePath, 'utf8');
    if (/^.*\.(css|js|html)/.test(element)){
      const newData = data.replace(re, '')
      console.log("adsdf", newData)
      fs.writeFileSync(filePath, newData, 'utf8')
    }
  }
});

// 计算md5
function calcMd5 (path, files) {
  files.forEach((element, i) => {
    const filePath = rootPath + element
    const stat = fs.statSync(filePath)
    if(stat.isDirectory()) { // 如果 fs.Stats 对象描述文件系统目录，则返回 true。
      calcMd5(filePath + '/', fs.readdirSync(filePath))
    } else {
      const data = fs.readFileSync(filePath)
      // 计算所有需要被哈希化的数据摘要 (通过 hash.update() 方法)
      md5Info[filePath.replace(rootPath, '')] = crypto.createHash('md5').update(data).digest('hex')
      console.log(md5Info)
    }
  })
}

calcMd5(rootPath, files)
// debugger

// 异步地将数据写入到一个文件，如果文件已存在则覆盖该文件
let md5InfoStr = JSON.stringify(md5Info)
fs.writeFile(rootPath + md5File, md5InfoStr, (err) => {
  if(err) throw err
  console.log('文件已保存')
})
