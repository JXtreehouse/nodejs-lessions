
/** 
 实现console.log
1、初始化Logger对象
2、对参数进行检验，当前对象是否为Logger实例，是否为一个可写流实例
3、为Logger对象定义_stdout，_stderr等属性
4、将原型方法上的属性绑定到Logger实例上
5、实现log、error、warning、trace、clear等方法
 */
const util = require('util')

/** 
 *  初始化logger对象
 * @param {*} stdout
 * @param {*} stderr
*/

function Logger(stdout, stderr) {
  // step 1 检查当前对象是否为logger实例
  if(!(this instanceof Logger)) {
    return new Logger(stdout, stderr)
  }

  // 检查是否是可写流实例
  if(!stdout || !(stdout.write instanceof Function)) {
    throw new Error('Logger expects a writeable stream instance')
  }

  // 如果stderr 未指定, 使用stdout
  if(!stderr) {
    stderr = stdout
  }

  // 设置js Object的属性
  let props = {
    writeable: true, // 对象属性是否可修改,false为不可修改，默认值为true
    enumberable: false, // 对象属性是否可通过for-in循环，flase为不可循环，默认值为true
    configurable: false // 能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
  }

  // Logger对象定义_stdout属性 
  Object.defineProperty(this, '_stdout', Object.assign(props, {
    value: stdout
  }))

  // Logger对象定义_stderr属性
  Object.defineProperty(this, '_stderr', Object.assign(props, {
    value: stderr
  }))

  // Logger对象定义_times属性
  Object.defineProperty(this, '_times', Object.assign(props, {
    value: new Map()
  }))

  // 将原型方法上的属性绑定到Logger实例上
  const keys = Object.keys(Logger.prototype)
  
  for(let k in keys) {
    this[keys[k]] = this[keys[k]].bind(this)
  }
}

// 返回当前调用堆栈信息
Logger.prototype.trace = function trace(...args){
  const err = {
      name: 'Trace',
      message: util.format.apply(null, args)
  }

  // 源自V8引擎的Stack Trace API https://github.com/v8/v8/wiki/Stack-Trace-API
  Error.captureStackTrace(err, trace);

  this.error(err.stack);
}

// 清除控制台信息
Logger.prototype.clear = function(){

  // 如果stdout输出是一个控制台，进行clear 否则不进行处理
  if(this._stdout.isTTY){
      const { cursorTo, clearScreenDown } = require('readline');
      cursorTo(this._stdout, 0, 0); // 移动光标到给定的 TTY stream 中指定的位置。
      clearScreenDown(this._stdout); // 方法会从光标的当前位置向下清除给定的 TTY 流
  }
}

//直接输出某个对象
Logger.prototype.dir = function(object, options){
  options = Object.assign({ customInspect: false }, options);

  /**
   * util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误的输出。
   * showhidden - 是一个可选参数，如果值为true，将会输出更多隐藏信息。
   * depth - 表示最大递归的层数。如果对象很复杂，可以指定层数控制输出信息的多少。
   * 如果不指定depth,默认会递归3层，指定为null表示不限递归层数完整遍历对象。
   * 如果color = true，输出格式将会以ansi颜色编码，通常用于在终端显示更漂亮的效果。
   */
  this._stdout.write(util.inspect(object, options) + '\n');
}

// 计时器开始时间
Logger.prototype.time = function(label){

  // process.hrtime()方法返回当前时间以[seconds, nanoseconds] tuple Array表示的高精度解析值， nanoseconds是当前时间无法使用秒的精度表示的剩余部分。
  this._times.set(label, process.hrtime())
}

// 计时器结束时间
Logger.prototype.timeEnd = function(label){
  const time = this._times.get(label);

  if (!time) {
      process.emitWarning(`No such label '${label}' for console.timeEnd()`);
      return;
  }

  const duration = process.hrtime(time);
  const ms = duration[0] * 1000 + duration[1] / 1e6; // 1e6 = 1000000.0 1e6表示1*10^6
  this.log('%s: %sms', label, ms.toFixed(3));
  this._times.delete(label);
}

module.exports = new Logger(process.stdout, process.stderr);

module.exports.Logger = Logger;
