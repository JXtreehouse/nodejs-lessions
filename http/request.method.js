// Node.js program to demonstrate the   
// request.method Method  
    
// Importing http module  
var http = require('http');  
    
// Setting up PORT  
const PORT = process.env.PORT || 3000;  
    
// Creating http Server  
var httpServer = http.createServer( 
     function(request, response){  
  
  // Getting request method  
  // by using request.method method 
  const value = request.method; 
    
  // Display result on the console 
  response.end( "method:" + value, 'utf8', () => {  
      console.log("displaying the result...");  
  
      // Closing the server 
      httpServer.close(()=>{ 
          console.log("server is closed") 
      }) 
  });  
});  
    
// Listening to http Server  
httpServer.listen(PORT, () => {  
    console.log("Server is running at port 3000...");  
});