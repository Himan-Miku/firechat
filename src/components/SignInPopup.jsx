import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from "react-google-button";

const SignInPopup = () => {

  const { googleSignIn } = UserAuth()

  const signIn = async () => {
    try {
      await googleSignIn()
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <GoogleButton onClick={signIn}>Sign in with Google</GoogleButton>
    </div>
  )
}

export default SignInPopup