/*
 * @Author: AlexZ33 775136985@qq.com
 * @Date: 2022-07-13 19:05:34
 * @LastEditors: AlexZ33 775136985@qq.com
 * @LastEditTime: 2022-07-13 19:05:37
 * @FilePath: /nodejs-lessions/promise/promise-test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const path = require('path')

// callback方式获取一个文件的内容
// function getFileContent(fileName, callback) {
//     const fullFileName = path.resolve(__dirname, 'files', fileName)
//     fs.readFile(fullFileName, (err, data) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         callback(
//             JSON.parse(data.toString())
//         )
//     })
// }

// // 测试 callback-hell
// getFileContent('a.json', aData => {
//     console.log('a data', aData);
//     getFileContent(aData.next, bData => {
//         console.log('b data', bData);
//         getFileContent(bData.next, cData => {
//             console.log('c data', cData);
//         })
//     })
// })

// 用promise获取文件内容
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName)
        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}

// getFileContent('a.json').then(aData => {
//     console.log('a data', aData);
//     return getFileContent(aData.next)
// }).then(bData => {
//     console.log('b data', bData);
//     return getFileContent(bData.next)
// }).then(cData => {
//     console.log('c data', cData);
// })

// async await 
try {
    async function readFileData() {
        // 同步写法
        const aData = await getFileContent('a.json')
        console.log('a data', aData);
        const bData = await getFileContent('b.json')
        console.log('b data', bData);
        const cData = await getFileContent('c.json')
        console.log('c data', cData);
    }
} catch (err) {
    console.error(err)
}

readFileData()

// async function readAData() {
//     const aData = await getFileContent('a.json')
//     return aData
// }
// async function test() {
//     const aData = await readAData()
//     console.log(aData);
// }
// test()

// async await 要点
// 1. await 后面可以追加promise对象，获取resolve值
// 2. await 必须包裹在 async函数里面
// 3. await 函数执行返回的也是一个promise对象
// 4. try-catch 截获promise中reject的值