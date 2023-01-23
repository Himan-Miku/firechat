import React from 'react'
import ChatRoom from "./ChatRoom";
import SignInPopup from "./SignInPopup";
import { UserAuth } from "../context/AuthContext";

const MainMsg = () => {

  const { user } = UserAuth()

  return (
    <div className="flex flex-col min-h-[90vh] bg-slate-600">
      {user ? <ChatRoom /> : <SignInPopup />}
    </div>
  )
}

export default MainMsg