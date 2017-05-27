var projectData = {
	'name' : "jxtreehouse",
	'fileData': [
     {
     	'name': 'css',
     	'type' : 'dir'
     },
     {
     	'name': 'js',
     	'type' : 'dir'
     },
     {
     	'name': 'image',
     	'type' : 'dir'
     },
     {
     	'name': 'index.html',
     	'type' : 'file',
     	'content' : '<html>\n\t<head>\n\t<title>镜心的小树屋</title>\n\t</head>\n\t<body>\n\<h1>Hello</h1>\n\t</body>\n</html>'
     }
	]
};

var fs = require ('fs')

if(projectData.name){
	fs.mkdirSync(projectData.name);
	var fileData = projectData.fileData;

	if (fileData && fileData.forEach) {
		
		fileData.forEach(function(f) {
      f.path = projectData.name + '/' +f.name;
      f.content = f.content || '';
      switch(f.type) {
      	case 'dir':
      	  fs.mkdirSync(f.path);
      	  break;
      	case 'file':
      	  fs.writeFileSync(f.path, f.content)
      	  break;
      	default :
      	  break;
      	 
      }
		})
	}
}