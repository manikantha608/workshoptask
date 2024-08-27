import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./layout.css"
import img1 from "../assets/Photo by Brooke Cagle.png"
import img2 from "../assets/Photo by Amin RK.png"
import img3 from "../assets/Photo by Chris Zhang.png"
import img4 from "../assets/Photo by Daniil Lobachev.png"
import img5 from "../assets/Photo by Franco Figueroa.png"
import img6 from "../assets/Photo by Hayes Potter.png"
import img7 from "../assets/Photo by Matteo Minoglio.png"
import img8 from "../assets/Photo by Joe Gardner.png"
import img9 from "../assets/Photo by Peter Idowu.png"
import img10 from "../assets/Photo by Brooke Cagle.png"

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
const Layout = () => {
  const [data,setData]=useState([])  
  
  useEffect(()=>{
      fetchingData()              
  },[])

  async function fetchingData(){
       try{
          const response = await  axios(" https://jsonplaceholder.typicode.com/users")  
            setData(response.data)      
       } catch(err){
           console.log(err)         
       } 

  }
  return (
    <div className='container'>
      <div className='layout'>
         {data.map((item,itemId)=>{
            return <div className='card'>
               { images.map((img,imgId)=> {
                    return itemId==imgId ?(<img src={img}/>):""
               }) }
                <p className='username'>{item.username}</p> 
                <p className='email'>{item.email}</p>
                <p>{item.company.name}</p>
                <p>{item.address.city}</p> 
                <p>{item.phone}</p>  
                <p></p>
            </div>        
         })}           
      </div>
    </div>
  )
}

export default Layout
