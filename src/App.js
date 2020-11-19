import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Messages from "./components/Message/Messages";
import SignForm from "./components/Sign/SignForm";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Route exact path="/" render={() => <Messages />} />
        <Route
          path="/signup"
          render={() => <SignForm isRegisterTap={true} />}
        />
        <Route path="/login" render={() => <SignForm />} />
      </div>
    </>
  );
};

export default App;
