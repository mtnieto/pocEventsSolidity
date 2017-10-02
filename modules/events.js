
function processEvent(eventJson, eventVariable){
  return eventJson.args[eventVariable]
}

module.exports = {
  processEvent
}
