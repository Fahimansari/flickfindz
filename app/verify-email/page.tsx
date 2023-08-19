'use client'
import { initFirebase } from '@/firebase/firebaseConfig';
import { EnvelopeOpenIcon } from '@heroicons/react/20/solid';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const VerifyEmail =  () =>  {

  const app = initFirebase()
  const auth = getAuth();
  const [isVerified, setIsVerified] = useState(false)
  console.log('This is the Email Verification Page');
const router = useRouter()
  
  console.log(auth.currentUser);
 
const handleVerified = () => {
  router.push('/dashboard')
}
  

  
  return (  <>
   <div className='flex justify-center items-center h-screen'>
    <div className="text-center w-200 h-200 mx-500">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-gray-900">Check your mail for a verification email</h3>
      <p className="mt-1 text-sm text-gray-500"></p>
      <div className="mt-6">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleVerified();
          }}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <EnvelopeOpenIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          I have verified my Mail
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default VerifyEmail

