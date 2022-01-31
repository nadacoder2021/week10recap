import { Input } from 'antd';
import { useEffect, useState} from 'react';
import {Button} from "antd"

const { TextArea } = Input;



export function InputComment({handleClick}){

const [username, setUsername] = useState("")
const [comment, setComment] = useState("")
// const [commentId, setCommentId] = useState("")

// useEffect(function handleClick(){
//   console.log(username)
//   console.log(comment)
//   return (<div>

//   <h4>{username} says:</h4>
   
//    <p>{comment}</p>  
//   </div>)}, [username, comment])
  
function handleClick(){
  console.log(username)
  console.log(comment)
  return (<div>

  <h4>{username} says:</h4>
   
   <p>{comment}</p>  
  </div>)
  
}

function onChangeusername(e) {
    setUsername(e.target.value);
  };

function onChangecomment(e){
  setComment(e.target.value)
}


return (<div>
  <Input placeholder= "Enter your username" showCount maxLength={20} onChange={onChangeusername} />
  <br />
  <br />
  <TextArea placeholder= "Enter your comment" rows={4} cols="50" style = {{height: 12}} showCount maxLength={200} onChange={onChangecomment} />
<br />
<br />
<br />
<br />
<Button type="primary" size="large" onClick={handleClick}>Submit
  </Button>

</div>)
}


