import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import "./ChatBox.css";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'

function ChatBox({ chat, currentUserId,setSendMessage,  receivedMessage }) {

    const scroll = useRef();
    const imageRef = useRef();
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleChange = (newMessage)=> {

      setNewMessage(newMessage)
    }
    console.log(newMessage);

    useEffect(()=>{
        if(chat!==null){
            getUserData();
        }
    },[chat,currentUserId]);
    const userId = chat?.members?.find((id) => id !== currentUserId);
    const getUserData=async()=>{
        try {
            const {data}=await axios.get(`http://localhost:5000/user/${userId}`);
            setUserData(data);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        if(chat!==null){
            fetchMessages()
        }
    },[chat])
    const fetchMessages=async()=>{
        try{
            const {data} =await axios.get(`http://localhost:5000/message/${chat._id}`);
            setMessages(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    },[messages])
    

    //send a message
    const handlesend=async(e)=>{
        e.preventDefault()

        const message={
            senderId:currentUserId,
            text:newMessage,
            chatId:chat._id
        }
        console.log(message);
        const receiverId=chat.members.find((id)=>id!==currentUserId);
        setSendMessage({...message, receiverId})
        try{
            const {data}=await axios.post(`http://localhost:5000/message`,{message});
            setMessages([...messages, data]);
            setNewMessage("");
        }catch(error){
            console.log(error);
        }
    }

    // receive message
    useEffect(()=>{
        console.log("Message Arrived: ", receivedMessage)
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
            setMessages([...messages, receivedMessage]);
        }
    },[receivedMessage])


  return (
    <>
    <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src={
                        "https://yt3.googleusercontent.com/ytc/AGIKgqPh9kVptaKpovayOfZGjfyZV7DExqpIUitIiTlKuQ=s900-c-k-c0x00ffffff-no-rj"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.firstname} {userData?.lastname}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
              {messages.map((message) => (
                <>
                  <div ref={scroll}
                    className={
                      message.senderId === currentUserId
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button" onClick = {handlesend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  )
}

export default ChatBox
