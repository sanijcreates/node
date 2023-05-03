//setInterval doesnt stop running like setTimeout., every 2 sec, event loop is going to execute the callback.
setInterval(() => {
    console.log("print every 2 sec")
}, 2000);

console.log("start");