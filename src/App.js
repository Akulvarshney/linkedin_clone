// Styling Import
import "./App.css";
import "./components/Navbar/navbar.scss";
import "./components/sidebar/sidebar.scss";
import "./components/feed/feed.scss";
import "./components/widget/widget.scss";

// Components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widget from "./components/widget/Widget";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="appBody">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
