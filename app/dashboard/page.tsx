'use client'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'


const Dashboard =  ( ) =>  {
  const [open, setOpen] = useState(true)

  const auth = getAuth()
const [user, loading] = useAuthState(auth)
  console.log(user);
  
  return (

    <>
    <div>{user?.email}</div>
    </>
    
  )
}

export default Dashboard