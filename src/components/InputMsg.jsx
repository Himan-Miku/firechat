import { addDoc, serverTimestamp } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const InputMsg = () => {
  const [input, setInput] = useState("");
  const { dbInstance } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(dbInstance, {
      text: input,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    })
      .then(() => {
        console.log("Data Sent");
      })
      .catch((err) => console.log(err));
    setInput("");
  };

  return (
    <>
      <form
        className="max-w-[728px] fixed bottom-0 h-[10vh] w-full text-xl flex bg-slate-900"
        onSubmit={handleSubmit}
      >
        <input
          className="ml-4 mr-5 mt-4 w-[77%] h-[50%] text-xl text-black px-8 outline-none border-none leading-2 bg-white rounded-2xl"
          placeholder="Say Something Nice ..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white h-[50%] mt-4 w-[15%] bg-orange-500 rounded-2xl"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default InputMsg;
