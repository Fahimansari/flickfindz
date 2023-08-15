"use client";
import PasswordConfirmModal from "@/components/PasswordConfirmModal";
import { initFirebase } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [modalOpen, setmodalOpen] = useState(false);
  const app = initFirebase();
  const auth = getAuth();

  const [user, loading] = useAuthState(auth);

  const updateModalValue = () => {
    setmodalOpen(false);
  };

  const handleSignUp = () => {
    setmodalOpen(false);
    console.log(false);

    if (password !== confirmpassword) {
      setmodalOpen(true);
    } else {
      setmodalOpen(false);
      console.log("We can pass these details to Sign Up");

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //Signed In
          // const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    }
  };

  useEffect(() => {}, [modalOpen]);

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='/favicon.ico'
            alt='Flick Findz'
          />
          <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign up with Flick Findz
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            action='#'
            method=''
            onSubmit={handleSignUp}
          >
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  placeholder='You email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='text-sm'></div>
              </div>
              <div className='mt-2'>
                <input
                  id='password-signup'
                  name='password'
                  type='password'
                  value={password}
                  placeholder='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mt-2'>
                <input
                  id='password-signup-confirm'
                  name='confirmpassword'
                  type='password'
                  value={confirmpassword}
                  autoComplete='current-password'
                  placeholder='Re-enter password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                onSubmit={handleSignUp}
                className='flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <PasswordConfirmModal
          opened={modalOpen}
          updateModalValue={updateModalValue}
        />
      </div>
    </>
  );
}
