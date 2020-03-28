
import express from "express"
import mongodb from "mongodb"
import bodyParser from "body-parser"  
import path from "path"

const app = express();
const MongoClient = mongodb.MongoClient;
const PORT = 4000;
const DATABASE = "gyde-db"
const uri = "mongodb+srv://abefong54:aw5som3_dbp4$$1!@cluster0-e6ite.gcp.mongodb.net/test?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"/build")));

const withDb = async (operations) => {
    try {

        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(DATABASE);            
        await operations(db);
        client.close();
    
    } catch (e) {
        console.log("Error connecting to db", e);
    } 
}

app.get("/", (req,res) => {
    res.send("Cool");  
})

app.get("/api/user/:firstName", async (req,res) => {
    withDb( async (db) => {
        const firstName = req.params.firstName;
        await db.collection("user").findOne({first_name:firstName})
            .then(response => res.status(200).json(response))
            .catch(error => console.error(error));
    })
});

app.post("/api/user/create", async (req,res) => {
    withDb( async (db) => {
        const newUser = req.body;
        await db.collection("user").insertOne(newUser)
            .then(response => res.status(200).json(response.ops[0]))
            .catch(error => console.error(error));
    })
});

app.get("*", (req,res) => {

    res.sendFile(path.join(__dirname+"/build/index.html"));

})

app.listen(PORT, () => console.info(`REST API running on port ${PORT}`));


// npx babel-node server.js