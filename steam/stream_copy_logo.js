var fs = require('fs')
var source = fs.readFileSync('../buffer/logo.png')

fs.writeFileSync('steam_copy_logo.png',source)


