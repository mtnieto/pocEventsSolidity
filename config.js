module.exports = {
  eventName: "settedValue",
  eventVariable: "setted",
  options: {
    host: 'http://localhost:8545',
    personal: true,
    admin: true,
    debug: false
  },
  address: "0xbb206c9952b1e7f4f44ff34e1a63fe67743b5fbb",
  abi: [{
          "constant": true,
          "inputs": [],
          "name": "value",
          "outputs": [{
              "name": "",
              "type": "string"
          }],
          "payable": false,
          "type": "function"
      },
      {
          "constant": false,
          "inputs": [{
              "name": "_value",
              "type": "string"
          }],
          "name": "setValue",
          "outputs": [],
          "payable": false,
          "type": "function"
      },
      {
          "constant": false,
          "inputs": [{
              "name": "initValue",
              "type": "string"
          }],
          "name": "greeter",
          "outputs": [],
          "payable": false,
          "type": "function"
      },
      {
          "anonymous": false,
          "inputs": [{
              "indexed": false,
              "name": "setted",
              "type": "string"
          }],
          "name": "settedValue",
          "type": "event"
      }
  ]

}
