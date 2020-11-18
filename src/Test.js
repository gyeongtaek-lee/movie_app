const kafka = require("kafka-node");
const {ConsumerGroup} = require("kafka-node");
const net = require("net");

var options = {
    kafkaHost: 'localhost:9092', // connect directly to kafka broker (instantiates a KafkaClient)
    batch: undefined, // put client batch settings if you need them
    ssl: false, // optional (defaults to false) or tls options hash
    groupId: 'trans-string-cg-egen-new',
    clientId: 'trans-string-consumer-egen-new',
    sessionTimeout: 15000,
    // An array of partition assignment protocols ordered by preference.
    // 'roundrobin' or 'range' string for built ins (see below to pass in custom assignment protocol)
    protocol: ['roundrobin'],
    encoding: 'utf8', // default is utf8, use 'buffer' for binary data

    // Offsets to use for new groups other options could be 'earliest' or 'none' (none will emit an error if no offsets were saved)
    // equivalent to Java client's auto.offset.reset
    fromOffset: 'latest', // default
    commitOffsetsOnFirstJoin: true, // on the very first time this consumer group subscribes to a topic, record the offset returned in fromOffset (latest/earliest)
    // how to recover from OutOfRangeOffset error (where save offset is past server retention) accepts same value as fromOffset
    outOfRangeOffset: 'earliest', // default
    // Callback to allow consumers with autoCommit false a chance to commit before a rebalance finishes
    // isAlreadyMember will be false on the first connection, and true on rebalances triggered after that
    onRebalance: (isAlreadyMember, callback) => { callback(); } // or null
};

(async () => {

    try {

        const Consumer = kafka.Consumer;


        var consumerGroup = new ConsumerGroup(options, 'egen-sse-test-topic');



        const client = new kafka.KafkaClient({
            idleConnection: 24 * 60 * 60 * 1000,
            kafkaHost: "127.0.0.1:9092",
            clientId: "trans-string-consumer-egen-new",
            groupId: 'trans-string-cg-egen-new'
        });

        let consumer = new Consumer(
            client,
            [{
                topic: "egen-sse-test-topic",
                partition: 0
            }],
            {
                autoCommit: true,
                fetchMaxWaitMs: 1000,
                fetchMaxBytes: 1024 * 1024,
                encoding: 'utf8'
            }
        );

        consumer.on("message", async function(message) {
            console.log("111111111111111");
            console.log('kafka ', message);
        });

        consumer.on("error", function (error) {
            console.log('error', error);
        });

    } catch (e) {
        console.log(e);
    }

})();