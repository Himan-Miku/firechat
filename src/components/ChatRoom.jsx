import { UserAuth } from '../context/AuthContext'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth } from '../firebaseConfig';

const ChatRoom = () => {

  const { queryRef } = UserAuth();
  const [messages] = useCollectionData(queryRef, { idField: 'id' })
  
  return (
    <div className="flex gap-2 flex-col overflow-y-scroll h-[80vh] mx-0">
      {
        messages && messages.map((msg) => {
          const messageClass = msg.uid === auth.currentUser.uid ? "sent" : "received"
          return (
            <div className={`flex gap-4 items-center ${messageClass} p-4`} key={msg.id}>
              <img className="w-11 rounded-full" src={msg.photoURL || "https://whatifgaming.com/wp-content/uploads/2021/10/049f511c57f73b22d14a42d43070fd50.jpg"} />
              <p className="text-white rounded-2xl py-1 px-4 bg-orange-500">{msg.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatRoom