import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
