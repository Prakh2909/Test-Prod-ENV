let express=require("express");
let app=express();

//let pug=require("pug")

app.set("view engine","pug")

app.get("/",(req,res)=>{
	res.render("index");
})

app.listen(8444)
