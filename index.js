const _ = require('lodash')
// const udp = require('datagram-stream');
const hyperswarm = require('hyperswarm')
const crypto = require('crypto')
const swarm = hyperswarm()

// look for peers listed under this topic
const topic = crypto.createHash('sha256')
  .update('my-hyperswarm-topic')
  .digest()

swarm.join(topic, {
  lookup: true, // find & connect to peers
  announce: true // optional- announce self as a connection target
})

swarm.on('connection', (socket, details) => {
    console.info(_.keys(details));
    const host = _.get(details.peer, 'host');
    // if (_.isNil(host)) {
        // return;
    // }
    // console.info(details.peer);
    process.stdin.pipe(socket).pipe(process.stdout);

    // const stream = udp({
        // address   : '0.0.0.0',         //address to bind to
        // multicast : '230.185.192.108',
        // broadcast : '255.255.255.255', //broadcast ip address to send to
        // port      : 5555,              //udp port to send to
        // bindingPort : 5555,            //udp port to listen on. Default: port
        // reuseAddr : false              //boolean: allow multiple processes to bind to the
                // same address and port. Default: true
    // });

  // ai.pipe(socket).pipe(transform).pipe(ao);
  // ai.pipe(stream).pipe(ao);
})
// ao.start();
// ai.start();

