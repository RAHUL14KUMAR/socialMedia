import React,{useState,useEffect} from 'react'
import './Chat.css'
import NavIcons from "../../components/NavIcons/NavIcons";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from '../../components/Conversation/Conversation'
import { useStateValue } from '../../StateProvider';
import axios from 'axios';
import SideDrawer from '../../components/sideDrawer/SideDrawer';

function Chat() {
    const [{user},dispatch]=useStateValue();


    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    useEffect(()=>{
        const getChats=async()=>{
            try{
                const {data}=await axios.get(`http://localhost:5000/chat/${user._id}`);
                setChats(data);
                console.log(data);
            }catch(error){
                console.log(error);
            }
        }
        getChats();
    },[user._id])
  return (
    <div className='Chat'>
        <div className="Left-side-chat">
            <SideDrawer/>
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                    {chats.map((chat) => (
                    <div
                        onClick={() => {
                        setCurrentChat(chat);
                        }}
                    >
                        <Conversation
                        data={chat}
                        currentUser={user._id}
                        // online={checkOnlineStatus(chat)}
                        />
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
        <div className="Right-side-chat">
            <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                <NavIcons />
            </div>
            <ChatBox
            chat={currentChat}
            currentUser={user._id}
            // setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
            />
        </div>
    </div>
  )
}

export default Chat
