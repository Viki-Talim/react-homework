import React,{useState,useEffect} from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

export const PostComments = () =>{

    const [comments,setComments] = useState([]);
    let {postId} = useParams();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res=>setComments(res.data))
            .catch(err=>alert(err))
    },[])


    return(
        <div id='post-comments'>

            {comments.map(comm=>{
                return(
                    <div key={comm.id}>
                        <h1>Comment: {comm.name}</h1>
                        <h2>Email: {comm.email}</h2>
                        <p>Body: {comm.body}</p>
                        <hr/>
                     </div>   
                )
            })}

        </div>
    )
}