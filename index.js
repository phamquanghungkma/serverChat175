var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");
server.listen(process.env.PORT || 3001);

console.log("Server is Running :");
var arrayUser = [];

io.sockets.on('connection',function (socket) { // su kien connect den server
			// body...
			console.log("co thiet bi vua ket noi ");

		socket.on('client-send-data',  function(data) { // gui len su kien gi lang nghe su kien do
			console.log("Server nhan :"+data);// dong nay de log  ra xem co dung data gui len k

			io.sockets.emit('server-send-data',{noidung : data});
		});

		socket.on('client-register-user',function(data){

			if(arrayUser.indexOf(data) == -1){
				// neu tra ve tru 1 tuc la chua ton tai user duoc phep dang ki
				arrayUser.push(data); // dung push de day ten vao mang
              console.log("Dang ky thanh cong :"+data); 

			}else {
			 
				console.log("Da ton tai user :" +data);
			}
			
		});


});

