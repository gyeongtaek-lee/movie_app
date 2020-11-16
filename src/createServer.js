const http = require('http');
const KeepAliveAgent = require('keep-alive-agent');
const fs = require('fs');

const getOptions = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/kafka-messages',
    agent: new KeepAliveAgent(),
};

const getOptions2 = {
    hostname: '127.0.0.1',
    port: 7777,
    path: '/'
};



const getMessage = () => {
    http.get(getOptions, function(_response)
    {
        // console.log(_response);
        // _response.pipe(process.stdout);
        _response.on('data', (data)=>{
            const _data = Buffer.concat([data]).toString().trim();
            console.log(_data);
            // pushMessage();

            fs.readFile(__dirname + '/index.html', (err, data) => { // 파일 읽는 메소드
                if (err) {
                    return console.error(err); // 에러 발생시 에러 기록하고 종료
                }
                // _response.end(data, 'utf-8'); // 브라우저로 전송
            });
            
        }).on('end', () =>{
            console.log('aaaaa');
        })
    });
}

const pushMessage = () => {
    console.log('1');
    http.request(getOptions2, res => {
        console.log('2');
    })
}

const server = http.createServer((request, response) => {

    const { headers, method, url } = request;
    let body = [];

    return request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        console.log('11');
        body.push(chunk);
    }).on('end', () => {
        console.log('22');
        response.on('error', (err => {
            console.error(err);
        }));

        response.writeHead(200,{'Content-Type':'text/html'}); // header 설정
        // response.end('aaa', 'utf-8'); // 브라우저로 전송
        fs.readFile(__dirname + '/index.html', (err, data) => { // 파일 읽는 메소드
            if (err) {
                return console.error(err); // 에러 발생시 에러 기록하고 종료
            }
            response.end(data, 'utf-8'); // 브라우저로 전송
        });

    });

}).listen(8081); // 이 서버를 활성화하고 8080 포트로 받습니다.

getMessage();