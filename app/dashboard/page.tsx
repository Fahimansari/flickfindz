'use client'
import { initFirebase } from '@/firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { error } from 'console';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';


const SignedIn = () => {
  const app = initFirebase();
  const auth = getAuth();

  const [user, loading] = useAuthState(auth)
  if (!user) {
    return <>
    <div>Signed Out</div>
    </>
  }
  const router = useRouter();
  const handlesignOut = () => {
    signOut(auth). then(() => {
      console.log(auth.currentUser);
      
      // router.push('/')
    }).catch((error) => {
      console.log(error);
      
    })
  }
  return (
  <>
    <div>SignedIn</div>
    <button onClick={handlesignOut}>SignOut</button>
  </>
  )
}

export default SignedIn