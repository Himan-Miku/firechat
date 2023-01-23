import InputMsg from "./components/InputMsg";
import MainMsg from "./components/MainMsg";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="max-w-[728px] my-0 mx-auto text-center">
      <AuthContextProvider>
        <Header />
        <MainMsg />
        <InputMsg />
      </AuthContextProvider>
    </div>
  );
}

export default App;
