import "./mirrorText.style.css";
import { useState } from "react";

function MirrorText() {
  const [text, setText] = useState("");
  return (
    <div className="text">
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <p>{text}</p>
    </div>
  );
}

export default MirrorText;
