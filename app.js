import express from "express";
import bodyParser from "body-parser";
import validator from "./validator";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/question_one', validator, (req,res)=>{
    return res.json({
        status: true,
        data: req.body
    })
});

app.post('/question_two', (req,res)=>{
    let { data, item } = req.body;

    if (data[item]){
        delete data[item];
        return res.json({
            status: true,
            data: data
        })
    } else {
        return res.status(404).json({
            status: false,
            message: "attribute not found"
        })
    }

});

app.use("*",(req,res)=>{
    return res.send("Hello There, Welcome to NatterBase Nodejs Test API")
});


export default app;
