import React, {useEffect, useRef, useState} from "react";
import './chat.css';
import './polyfill/EventSource.js';

const App = () => {

    const [message, sendMsg] = useState("");

    const msgArea = useRef(null);

    const useEventSource = (url) => {

        const [data, updateData] = useState("");
        const msg = useRef("");

        useEffect(() => {

            const source = new EventSource(url, {withCredentials: false});

            source.onmessage = (ev) => {
                msg.current += ev.data+"\n";
                updateData(msg.current);

                msgArea.current.scrollIntoView({ behavior: "smooth" });
                msgArea.current.scrollTop = msgArea.current.scrollHeight - msgArea.current.clientHeight;
            }

            source.onopen = (e) => {
                console.log(e);
            }

            source.onerror = error => {
                console.log(error);

                if (this.readyState === EventSource.CONNECTING) {
                    console.log(`Reconnecting (readyState=${this.readyState})...`)
                }
                else {
                    console.log("Error has occured.");
                }

            }



        }, []);

        return data;
    }

    const data = useEventSource('http://10.149.181.149:8080/kafka-messages');

    if (!data) {
        return <div />;
    }

    const press = (e) => {
        const d = new Date();

        let id = '';
        let ap = d.getHours() < 12 ? "AM" : "PM";
        let h = (d.getHours() % 12) ? (d.getHours() % 12) : 12;

        console.log(e.key);

        if (e.key === 'Enter' && e.target.value) {

            // handleCreate();

            fetch(`http://10.149.181.149:8080/kafka-send-messages?msg=${ap} ${h}:${d.getMinutes()}   ${id}: ${e.target.value}`, {
                method: 'GET'
            }).then(r => console.log('complete'));
            //
            e.target.value = "";

        }
    }

    return (

        <div>
            ID : <input type="text" id="uuid"/>

            <div id="msgArea" ref={msgArea} className="scroll_box">
                {data.split('\n').map((line, idx) => {
                    return (<span key={idx}>{line}<br/></span>)
                })}
            </div>

            <div className="textbox">
                <label>message : </label>
                <input type="text" name="ex_input" onKeyPress={press} />
            </div>
        </div>

    );

}

export default App;