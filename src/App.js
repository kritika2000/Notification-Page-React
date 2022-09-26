import logo from "./logo.svg";
import "./App.css";
import Notification from "./Components/Notification";
import notificationsData from "./Components/notificationsData";

function App() {
  const notifications = notificationsData.map((n) => {
    return <Notification notification={{ ...n }} />;
  });
  return (
    <div className="App">
      <div className="heading--container">
        <span>Notifications</span>
        <span>3</span>
      </div>
      {notifications}
    </div>
  );
}

export default App;
