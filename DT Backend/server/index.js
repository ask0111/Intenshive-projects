const express = require('express');
require("./db/db");
// const router = require('./router/index');
const Collection = require('./db/model');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello DeepThought")
})

app.get('/api/v3/app/events', async (req, res) => {
    try {
        const type = req.query.type;
        const limit = req.query.limit;
        const page = req.query.page;

        if (type) {
            const singleData = await Collection.find({}).sort({ schedule: -1 }).skip((page - 1) * limit).limit(limit);
            res.send(JSON.stringify(singleData, null, 1));
        }
        else {
            const id = req.query.id;
            const singleData = await Collection.findById(id);
            res.send(singleData);
        }

    } catch (error) {
        console.log("Get Methord Err: ", error);
    }

})

app.post('/api/v3/app/events', async (req, res) => {
    try {
        const postData = await Collection(req.body);
        const saveData = await postData.save();
        
        const allpostDatas = await Collection.find();
        const filter = {}; // Empty filter to match all documents
        const update = { $set: { attendees: `${allpostDatas.length}` } }; // Specify the field and value to update

        const result = await Collection.updateMany(filter, update);

        console.log(`${result.modifiedCount} documents updated`);
        return saveData._id;
    } catch (error) {
        console.log("POST Methord Err: ", error)
    }
})

app.put('/api/v3/app/events/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Collection.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        console.log("PUT Methord Err: ", error);
    }

})

app.delete('/api/v3/app/events/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Collection.findByIdAndDelete(id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        console.log("DELETE Methord Err: ", error);
    }
})

app.listen(PORT, (err) => {
    console.log(err);
})