import React, {useEffect, useState} from "react";
import axios from "axios";
const http = require('http');
const KeepAliveAgent = require('keep-alive-agent');


const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         '/api',
//         createProxyMiddleware({
//             target: 'http://localhost:8080',
//             changeOrigin: true
//         })
//     );
// };

const getOptions = {
    // hostname: '127.0.0.1',
    // port: 8080,
    path: '/kafka-messages',
    agent: KeepAliveAgent,
};


const getMessage = () => {
    http.get(getOptions, function(_response)
    {
        // console.log(_response);
        // _response.pipe(process.stdout);
        _response.on('data', (data)=>{
            const _data = Buffer.concat([data]).toString().trim();
            console.log(_data);
        }).on('end', () =>{

        })
    });
}


const App = () => {

    // getMessage();

    axios.get('/kafka-messages')  // http://localhost:5000 안 써줘도 괜찮다.
        .then(res=> console.log(res.data))
        .catch()

    return (

        <div>
            <h1>hi~~</h1>
        </div>

    );

}

export default App;
