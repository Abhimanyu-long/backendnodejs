const EventEmitter = require('events');
const fs= require('fs');

const useEvent = new EventEmitter();

const filelog= "activity.json"

const eventCounter={
    login: 0,
    logout: 0,
    purchase: 0,
    profile: 0,
}

if(fs.existsSync(filelog)){
    const data = fs.readFileSync(filelog, "utf-8");
    Object.assign(eventCounter,JSON.parse(data));
}

function saveCount(){
    fs.writeFileSync(filelog, JSON.stringify(eventCounter))
}


// Creating the Events 
useEvent.on("login",(username)=>{
    eventCounter.login++;
    console.log(`${username} is login successfully`);
    saveCount();
})

useEvent.on("logout",(username)=>{
    eventCounter.logout++;
    console.log(`${username} is logout successfully`);
    saveCount();
})

useEvent.on("purchase", (username, item)=>{
    eventCounter.purchase++;
    console.log(`${username} is purchase 7 ${item}`);
    saveCount();
})

useEvent.on("profile",(username)=>{
    eventCounter.profile++;
    console.log(`${username} profile updated successfully`);
    saveCount();
})

useEvent.on("summary", ()=>{
    console.log("this is the count list \n");
    console.log("login count",eventCounter.login);
    console.log("logout count",eventCounter.logout);
    console.log("purchase count",eventCounter.purchase);
    console.log("profile count",eventCounter.profile);
})

// emit the event
useEvent.emit("login","mannyu lover");
useEvent.emit("logout", "vinod");
useEvent.emit("purchase","vinod", "lolipop");
useEvent.emit("profile","mannyu");
useEvent.emit("summary")

