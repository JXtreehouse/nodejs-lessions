/** 
 * 正确拼接Buffer
 * 
 * 正确的拼接方式是用一个数组来储存接收到的所有Buffer片段并记录下所有片段的总长度
 * 然后调用Buffer.concat()方法生成一个合并的Buffer对象。Buffer.concat()方法封装了从小Buffer对象向大Buffer对象的复制过程，实现十分细腻
 * @list 要合并的Buffer数组 或 Uint8Array数组
 * @length 合并后的Buffer的总长度
 */

Buffer.concat = function (list, length) {
  if(!Array.isArray(list)) {
    throw new Error('Usage: Buffer.concat(list, [length])')
  }

  if(list.length === 0) {
    return Buffer.alloc(0)
  } else if (list.length === 1) {
    return list[0]
  } 

  if(typeof length !== 'number') {
    length = 0
    for (let i = 0; i < list.length; i++) {
      let buf = list[i]
      length += buf.length
    }
  }

  let buffer = Buffer.alloc(length)
  var pos = 0;
  for (let i = 0; i < list.length; i++) {
    let buf = list[i]
    buf.copy(buffer, pos)
    pos+=buf.length
  }

  return buffer
}
