`fs.unlink()` 方法用于从文件系统中删除文件或符号链接。此函数不适用于目录，因此建议使用 fs.rmdir() 删除目录。

文档: https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback

**语法**
```
fs.unlink( path, callback )
```
**参数**该方法接受上面提到的两个参数，如下所述：
- path: 它是一个字符串、缓冲区或 URL，表示必须删除的文件或符号链接。
- callback: 它是一个在执行方法时将被调用的函数。
- err: 如果该方法失败，则会抛出该错误。


示例1： 从文件系统中删除一个文件。
```javascript
// Node.js program to demonstrate the
// fs.unlink() method
  
// Import the filesystem module
const fs = require('fs');
  
// Get the files in current directory
// before deletion
getFilesInDirectory();
  
// Delete example_file.txt
fs.unlink("example_file.txt", (err => {
  if (err) console.log(err);
  else {
    console.log("\n删除文件: example_file.txt");
  
    // Get the files in current directory
    // after deletion
    getFilesInDirectory();
  }
}));
  
// Function to get current filenames
// in directory with specific extension
function getFilesInDirectory() {
  console.log("\n目录中存在的文件：");
  let files = fs.readdirSync(__dirname);
  files.forEach(file => {
    console.log(file);
  });
}

```

**输出**

```
目录中存在的文件：
example_file.txt
index.js
package.json

删除文件: example_file.txt

目录中存在的文件:
index.js
package.json
```

示例2 ： 从文件系统中删除符号链接

```javascript
// Node.js program to demonstrate the
// fs.unlink() method
  
// Import the filesystem module
const fs = require('fs');
  
// Creating symlink to file
fs.symlinkSync(__dirname + "\\example_file.txt", "symlinkToFile");
console.log("\nSymbolic link to example_file.txt created");
  
// Function to get current filenames
// in directory with specific extension
getFilesInDirectory();
  
// Deleting symbolic link to example_file.txt
// Delete example_file.txt
fs.unlink("symlinkToFile", (err => {
  if (err) console.log(err);
  else {
    console.log("\nDeleted Symbolic Link: symlinkToFile");
  
    // Get the files in current directory
    // after deletion
    getFilesInDirectory();
  }
}));
  
// Function to get current filenames
// in directory with specific extension
function getFilesInDirectory() {
  console.log("\nFiles present in directory:");
  let files = fs.readdirSync(__dirname);
  files.forEach(file => {
    console.log(file);
  });
}

```

```
Symbolic link to example_file.txt created

Files present in directory:
example_file.txt
index.js
package.json
symlinkToFile

Deleted Symbolic Link: symlinkToFile

Files present in directory:
example_file.txt
index.js
package.json
```