// Importing Packages
const mongoose = require('mongoose')
const express = require('express')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')
const { response } = require('express')

// Initialising express through app
const app = express()

const PORT = 3000

app.use("/", express.static("public"));

// Activating fileUpload middleware
app.use(fileUpload());


// Importing from channel.js
const ChannelModel = require('./models/channel')


// Getting the dbURL from MongoDB Atlas 
const dbUrl = "mongodb+srv://new_user:bU7pHVfW0ZONY8IL@cluster0.vpwcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Setting the connection Parameters
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connection through mongoose
mongoose.connect(dbUrl, connectionParams).then(( )=>{
    console.info("Connected to the Database");
}).catch((e)=>{
    console.log("Error: ",e);
})

// End-point for GET request
app.get("/", (req, res)=>{
    var channelModel = new ChannelModel()
    channelModel.text = result.text

    channelModel.save((err, data)=> {
        if(err){
            console.error(err)
        }
        else{
            res.status(200).send({
                "msg": "Inserted to DB"
            })
        }
    })
})


app.post("/", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
        res.status(400);
        res.end();
    }
    pdfParse(req.files.pdfFile).then(result => {
        res.send(result.text);
        // return result.text
    });
});




app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})
