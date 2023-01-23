import React from 'react'
import { UserAuth } from "../context/AuthContext";

const Header = () => {

  const { logOut, user } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-[10vh] bg-slate-900">
      <div className="flex h-full justify-between items-center">
        <div className="flex gap-2 items-center ml-5">
        <img className="w-14" src="./images/react-original.svg" alt="react" />
        <img className="w-14" src="./images/tailwindcss-plain.svg" alt="tailwind" />
        <img className="w-14" src="./images/firebase-plain-wordmark.svg" alt="firebase" />
        </div>
        {user && <button onClick={handleSignOut} className="mr-6 outline-none text-white rounded-md px-2 py-1 bg-orange-500 font-semibold">Sign Out</button>}
      </div>
    </div>
  )
}

export default Header