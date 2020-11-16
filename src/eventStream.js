const http = require('http');
const KeepAliveAgent = require('keep-alive-agent');
var fs = require('fs'); // 파일 읽기, 쓰기 등 을 할 수 있는 모듈
var io = require('socket.io-client');

const getOptions = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/kafka-messages',
    agent: new KeepAliveAgent(),
};


// (async () => {
//
//     http.get(getOptions, function(response)
//     {
//         response.pipe(process.stdout);
//     });
//
// })();

function send404Message(response){
    response.writeHead(404,{"Content-Type":"text/plain"}); // 단순한 글자 출력
    response.write("404 ERROR... ");
    response.end();
}


function onRequest(request, response){

    let body = [];

    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력
        fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함
        // fs.readFile("./index.html", (err, data) => {
        //     console.log("?=>"+data);
        //     if (err) {
        //         return console.error(err);
        //     }
        //     response.end(data, 'utf-8');
        // })
    } else {
        // file이 존재 하지않을때,
        send404Message(response);
    }
    //
    http.get(getOptions, function(_response)
    {
        console.log(_response);
        // _response.pipe(process.stdout);
        _response.on('data', (data)=>{
            const _data = Buffer.concat([data]).toString().trim();
            console.log(_data);
            response.end(_data, 'utf-8');
        }).on('end', () =>{
            body = Buffer.concat(body).toString();
            console.log(body);
        })
    });

    // console.log('test');
    //
    // const socket = io.connect("http://localhost:8080/kafka-messages");
    // socket.on("recMsg", (data) => {
    //     console.log(data.comment);
    // });

}

http.createServer(onRequest).listen(9999);