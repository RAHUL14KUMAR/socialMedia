const express=require("express");
const cors=require('cors');
const bodyParser=require("body-parser");
const connect=require("./database/db");
const dotenv=require("dotenv");
const AuthRoute=require("./Routes/AuthRoutes");
const userRouter=require("./Routes/userRoute");
const postRouter=require('./Routes/PostRoutes');
const ChatRouter=require('./Routes/ChatRoutes');
const MessageRouter=require('./Routes/MessageRoutes');

dotenv.config();
const port=process.env.PORT;

const app=express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use('/auth',AuthRoute);
app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/chat',ChatRouter);
app.use('/message', MessageRouter);

connect;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})

