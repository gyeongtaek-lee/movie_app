const http = require('http');
const KeepAliveAgent = require('keep-alive-agent');

const getOptions = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/kafka-messages',
    agent: new KeepAliveAgent(),
};

const getMessage = () => {

    let message = "";

    http.get(getOptions, function(response)
    {
        // console.log(_response);
        // _response.pipe(process.stdout);
        response.on('data', (data)=>{
            const _data = Buffer.concat([data]).toString().trim();
            console.log(_data);
            message = _data;
        }).on('end', () =>{
            console.log('aaa');
        })
    });

    return message;
}