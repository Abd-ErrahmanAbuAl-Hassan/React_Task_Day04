import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserTable from '../components/UserTable'
import '../styles/users.css'

export default function Users() {
  const [users,setUsers]=useState([])
  const [loader,setLoader] =useState(false)
  const getUsers =async()=>{
    try {
      setLoader(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      setLoader(false)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className='main'>
      {loader? <div className="loader"></div>:<UserTable users={users}/>}
      
    </div>
  )
}
