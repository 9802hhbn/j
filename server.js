
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://fakkelld234.glitch.me/`);
}, 280000);








const Eris = require("eris");
var x5bzteam = new Eris("NzU0NDg1NzY3NDAwNTg3MzA3.X11boA.riL1qY3hcdDjKR9PH_ulpv3VxE4");

x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "624626050818768937";//  id   server
nick = "MJ12 > > UP";  //   moved    name
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1500);
}
x5bzteam.connect();
