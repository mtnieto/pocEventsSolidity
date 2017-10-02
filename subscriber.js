var web3_extended = require('web3_extended');

var config = require('./config.js')
var events = require('./modules/events.js')


var web3 = web3_extended.create(config.options);


var mycc = web3.eth.contract(config.abi);

// initiate contract for an address
var myContractInstance = mycc.at(config.address);

var event = myContractInstance[config.eventName]();

// watch for changes
event.watch(function(error, result){
  console.log("Subscribed to event", config.eventName)
  if (!error){
    console.log("\nBefore processing...")
    console.log(result);
    console.log("\nAfter processing...")
    console.log(events.processEvent(result, config.eventVariable))
  }
});
