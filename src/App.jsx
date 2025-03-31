import { useState } from "react";
import {useGetpostsQuery,useCteatePostMutation} from "../services/getApicall"

import './App.css'

function App() {
const [newpost,setnewppost]=useState({
  title:"",
  body:"",
  id:""
})
const {data,error,isLoading}=useGetpostsQuery();
const [createPost,{isError:createEror,isLoading:isCreating}]=useCteatePostMutation();
console.log(useGetpostsQuery())
const handleCreatpost= async()=>{
  console.log("new post")
  await createPost(newpost)
}
if(isLoading)return <p>..........is loading ...........</p>
if(createEror)return <p>get errow while crate a post</p>
if(error)return <p>ther is a error</p>
  return (
    <>
    <div className="">
      <input type="text" value={newpost.title} name="" id="" onChange={(e)=>{setnewppost(prev=>({...prev,title:e.target.value}))}}/>
      <input type="text" name="" value={newpost.body} id="" onChange={(e)=>{setnewppost(prev=>({...prev,body:e.target.value}))}} />
      <button onClick={handleCreatpost} disabled={isCreating}>create post</button>
    </div>
     {
      data?.map((post)=>{
       return <div className="" key={post.id}>
        <p>{post.title}</p>
       </div>
      })
     }
    </>
  )
}

export default App
