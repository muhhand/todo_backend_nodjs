const mongoose = require("mongoose");
const express = require('express');
const Ajv = require("ajv");
const app = express();
const port = process.env.port || 3000;
const helmet = require('helmet');
app.use(express.urlencoded({ extended: true }));
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const noteRouter = require("./routes/notes")

app.use('/api/users', userRouter);
app.use('/api/login', authRouter);
app.use("/api/notes", noteRouter);
app.use(helmet());

app.get("/", (req, res) => {
    console.log('request recived');
    res.send('sent');
});
app.listen(port, () => console.log(`listening to ${port}`))
//////////////////////////////////////////////



mongoose.connect("mongodb://127.0.0.1:27017/iti", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('Database Connected');
}).catch(
    (err) => {
        console.log(err);
    });
