"use client";
import { initFirebase } from "@/firebase/firebaseConfig";
import loginBg from "@/public/loginBg.png";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const app = initFirebase();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignInWithEmailandPassword = async () => {
    console.log("Its here");

    const result = await signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    console.log(user);
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <>
      <div className='flex min-h-full flex-1'>
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <Image
                className='h-10 w-auto'
                src='/favicon.ico'
                alt='Logo'
                width={50}
                height={50}
              />
              <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm leading-6 text-gray-500'>
                Not a member?{" "}
                <Link
                  href='/signup'
                  className='font-semibold text-yellow-600 hover:text-indigo-500'
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <div className='mt-10'>
              <div>
                <form action='#' method='' className='space-y-6'>
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
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
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
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-3 block text-sm leading-6 text-gray-700'
                      >
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm leading-6'>
                      <a
                        href='#'
                        className='font-semibold text-yellow-800 hover:text-yellow-500'
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      onClick={(e) => {
                        e.preventDefault();
                        handleSignInWithEmailandPassword();
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className='mt-10'>
                <div className='relative'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-200' />
                  </div>
                  <div className='relative flex justify-center text-sm font-medium leading-6'>
                    <span className='bg-white px-6 text-gray-900'>
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className='mt-6 flex justify-center w-full items-center gap-4'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSignInWithGoogle();
                    }}
                    className='flex w-2/5 items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                  >
                    <Image
                      src='/icons8-google.svg'
                      width={26}
                      height={26}
                      alt=''
                    />
                    <span className='text-sm font-semibold leading-6'>
                      Google
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <Image
            className='absolute inset-0 h-full w-full object-cover'
            src={loginBg}
            // width={1000}
            // height={1000}
            alt=''
          />
        </div>
      </div>
    </>
  );
}
