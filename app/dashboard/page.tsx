'use client'
import NavBar from '@/components/Navbar'
import QuestionForm from '@/components/QuestionForm'
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

    
  }, [user,router])
  
  return (

    <>
    <div>
    <div>{user?.email}</div>
   <NavBar /> 
<QuestionForm />
    <button onClick={handleLogOut}> Logout</button>
    </div>
    </>
    
  )
}

export default Dashboard