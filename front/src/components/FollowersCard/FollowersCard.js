import React,{useEffect,useState} from 'react'
import './FollowersCard.css'

import { useStateValue } from '../../StateProvider'
import axios from 'axios';
import FollowersModal from './FollowersModal';

const FollowersCard = () => {
    const [{user},dispatch]=useStateValue();
    const [persons, setPersons] = useState([]);

    useEffect(()=>{
        getAll();
    },[])

    const getAll=async()=>{
        const data=await axios.get(`http://localhost:5000/user`);
        setPersons(data.data);
        console.log(data.data);
    }
    function person(persons){
        return persons._id!=user._id;
    }

  return (
    <div className="col-sm-7 d-flex flex-column mt-4 mx-2">
        <h5 className='change'style={{marginTop:8+'px',marginLeft:15+'px'}}>Who is following you</h5>

        {
        persons.filter(person). map((follower)=>{
            return(
                <FollowersModal key={follower._id} ids={follower._id} img={follower.image} username={follower.username} name={follower.firstname}/>
            )
        })
        }
    </div>
  )
}

export default FollowersCard