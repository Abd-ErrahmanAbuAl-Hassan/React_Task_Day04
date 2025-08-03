import React ,{useEffect, useState}from 'react'

export default function Home() {
    const [isAutheticated,setStatus]=useState(localStorage.getItem('isAutheticated') === 'true');
    useEffect(()=>{
      const interval = setInterval(() => {
      const currentStatus = localStorage.getItem('isAutheticated') === 'true';
      setStatus(currentStatus);
    }, 500);

    return () => clearInterval(interval);
    },[])
  return (
    <div className='main'>
      {isAutheticated?<h1>Welcome Admin! <br /> You Can Now Navigate The Site...</h1>: <p>Please Login to Navigate the site.</p>}
     
    </div>
  )
}
