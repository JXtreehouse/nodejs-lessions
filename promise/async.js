//批量给电影文件下载海报的例子
import fs from 'fs';
import path from 'path';
import request from 'request';

var movieDir = _dirname + '/movies',
    exts = ['.mkv','.avi','.mp4','.rm','.rmvb','.wmv'];

// 读取文件列表

var readFiles = function() {
  return new Promise(function (resovle, reject) {
    fs.readdir(movieDir,function(err,files) {
      resovle(files.filter((v) => exts.inclues(path.parse(v).ext)));
    });
  });
};

// 获取海报

var getPoster = function (movieName) {
  let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;
  return new Promise(function (resolve,reject) {
    request({url:url,json:true},function(err,response,body) {
      if(err) return reject(err);

      resovle(body.subjects[0].images.large);
    })
  });
};


//保存海报

var savePoster = function (movieName, url) {
  request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')));
}

(async () => {
  let files = await readFiles();
  
   // await只能使用在原生语法
   for(var file of files) {
    let name = path.parse(file).name;
     
    console.log(`正在获取【${name}】的海报`);
    savePoster(name,await getPoster(name));
   }
   console.log('=== 获取海报完成 ===');
  
}());
