import express from "express";
import {data} from "./data.js";             
const app = express();
app.use(express.json());    // middleware
const port = 8000




// 1. Get request  (it is for fetching the data from server)

app.get("/",(req, res)=>{
    res.status(200).send("hello world");
})

// industrial standard way to do
app.get("/api/v1/users",(req, res)=>{

    if(req.query.name){
        const filteredData = data.filter((item)=>{
            return item.name === req.query.name;
        })

        if(filteredData.length > 0){
            res.status(200).json(filteredData);
        }else{
            res.status(200).json(data)
        }
        
    }
    res.status(200).json(data)
})

// querry parameter(params)
app.get("/api/v1/users/:id",(req, res)=>{
    // res.send(req.params.id)
    const id = req.params.id;
    const user = data.find((item)=>{
        return item.id === Number(id);
    })

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message:"user not found"});
    }
})
// 

// 2. Post request (it is for sending the data to server)
app.post("/api/v1/users",(req, res)=>{

    console.log(req.body);

    const {name, age}= req.body;

    console.log(name,age);

    const newuser= {
        id: data.length + 1,
        name,
        age
    }

    data.push(newuser);

    res.status(201).send({
        message:"user created successfully",
        user:newuser
    });
})

// put request(update all field)
app.put("/api/v1/users/:id",(req, res)=>{
    // console.log(req.body,req.params);
    const {body, params:{id}} = req;
    const paramsid = Number(id);
    const userindex = data.findIndex((item)=>item.id === paramsid)
    
    if(userindex === -1){
        res.status(404).send("user not fount");
    }

    data[userindex] = {
        id: paramsid,
        ...body
    }

    res.status(201).send({
        message:"user updated successfully",
        user:data[userindex]
    });
})

// patch request (update only specific field)  
app.patch("/api/v1/users/:id",(req, res)=>{
    const {body, params:{id}}=req;
    const paramsid = Number(id);
    const userindex = data.findIndex((item)=>{
        return item.id === paramsid;
    })

      
    if(userindex === -1){
        res.status(404).send("user not fount");
    }

    data[userindex] = {
        ...data[userindex],
        ...body
    }

    res.status(201).send({
        message:"user updated successfully",
        user:data[userindex]
    });
})

// delete request (it is for deleting the data from server)
app.delete("/api/v1/users/:id",(req, res)=>{
    const {id} = req.params;
    const paramsid = Number(id);
    const userindex = data.findIndex((item)=>{
        return item.id === paramsid;
    })

    if(userindex === -1){
        res.status(404).send("user not fount");
    }

    data.splice(userindex,1);

    res.status(200).send({
        message:"user deleted successfully"
    });
})  


app.listen(port, (req, res )=>{
    console.log("server is up at",port);
})