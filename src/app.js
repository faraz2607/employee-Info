require("dotenv").config();
const express = require("express");

require("../src/db/conn");
const EmployeeDetails = require("../src/models/employee")
const FabricDetails = require("../src/models/fabricDetails")

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

// create requests for -----------------------------------------employee ----------------------------------------------->
app.post("/employee", async(req,res) => {
    try{
        const addEmployeeRecords = new EmployeeDetails(req.body)
        console.log(req.body);
        const insertEmployee = await addEmployeeRecords.save();
        res.status(201).send(insertEmployee);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/employee", async(req,res) => {
    try{
        const getEmployeeRecords = await EmployeeDetails.find({});
        res.send(getEmployeeRecords);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/employee/:uniqueId", async(req,res) => {
    try{
        const uniqueId = req.params.uniqueId;
        const getEmployeeDetails = await EmployeeDetails.find({_id: uniqueId});
        res.send(getEmployeeDetails);
    }catch(e){
        res.status(400).send(e);
    }
})

app.patch("/employee/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const getEmployeeRecord = await EmployeeDetails.findByIdAndUpdate(_id,req.body, {
            new: true
        });
        res.send(getEmployeeRecord);
    }catch(e){
        res.status(500).send(e);
    }
})

// create requests for----------------------------------------fabric details------------------------------------------>
app.post("/fabric", async(req,res) => {
    console.log("req",req.body)
    try{
        const addFabricRecords = new FabricDetails(req.body)
        console.log(req.body);
        const insertFabric = await addFabricRecords.save();
        res.status(201).send(insertFabric);
    }catch(e){
        res.status(400).send(e);
        console.log("error:",e)
    }
})

app.get("/fabric/:employeeId/:currentWeekCount", async(req,res) => {
    try{
        const employeeId = req.params.employeeId;
        const currentWeekCount = req.params.currentWeekCount;
        const getEmployeeFabricRecords = await FabricDetails.find({employeeId: employeeId , currentWeekCount: currentWeekCount});
        res.send(getEmployeeFabricRecords);
    }catch(e){
        res.status(400).send(e);
    }
})


if(process.env.NODE_ENV == "production") {
    app.use(express.static("employee-info-webapp/build"))
}

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})