function anotherAddEventListener(event,callback) {
    var wishedKey = {
        eventType : "keydown",
        key : "p",
        durationOfKeyPressed : 1
    }

    if(event === wishedKey.eventType) {
        callback(event);
    }
}

document.anotherAddEventListener("keydown",function(event) {
    console.log(event);
})