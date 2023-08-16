'use client'
import { initFirebase } from '@/firebase/firebaseConfig'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const Dashboard =  ( ) =>  {
  const [open, setOpen] = useState(true)
  const app = initFirebase();
const router = useRouter();
  const auth = getAuth()
const [user, loading] = useAuthState(auth)

const handleLogOut = async () => {
  await signOut(auth).then(() => {
  })
}
  console.log(user);
 
  useEffect(() => {
    
  if(!user)
    router.push('/')

    
  }, [user])
  
  return (

    <>
    <div>
    <div>{user?.email}</div>
    <button onClick={handleLogOut}> Logout</button>
    </div>
    </>
    
  )
}

export default Dashboard