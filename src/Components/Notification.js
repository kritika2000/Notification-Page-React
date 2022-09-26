import React, { useState } from "react";
import Detail from "./Detail";

function Notification(props) {
  const { id, sender, action, post, duration, seen, image } =
    props.notification;
  const [state, setstate] = useState(false);

  function toggleDetail() {
    setstate((prevState) => !prevState);
  }

  return (
    <main
      onClick={toggleDetail}
      className="notification--container"
      style={{
        backgroundColor: !seen && "hsl(211, 68%, 94%)",
      }}
    >
      <div className="profile--photo">
        <img alt="profile-picture" src={image} />
      </div>
      <div className="info--container">
        <span className="name">{sender}</span>
        <span className="action">{action}</span>
        <span className="post">{post}</span>
        {!seen && <span className="not--seen"></span>}
      </div>
      <div className="duration">{duration}</div>
      {id === 4 && state && <Detail />}
    </main>
  );
}
export default Notification;
