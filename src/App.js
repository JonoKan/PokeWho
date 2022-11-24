import "./App.css";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import GameStart from "./Pages/GameStart";
import GamePage from "./Pages/GamePage";
import firebaseConfig from "./firebase";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const App = () => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  return (
    <div>
      <Home />
      {/* <Create /> */}
      {/* <GameStart /> */}
      {/* <GamePage /> */}
    </div>
  );
};

export default App;
