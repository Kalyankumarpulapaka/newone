import { useState } from "react";
import "./App.css";

const LikeButton = () => {
  // Set initial background color to "#888"
  const [back, setBack] = useState("#888");

  // Toggle the background color between 'red' and '#888'
  const changeBack = () => {
    setBack(back === "#888" ? "red" : "#888");

    //It checks if the current color (back) is "#888", and if so, changes it to "red". If it's already "red", it changes it back to "#888".
  };

  return (
    <>
      <h1>Like Button</h1>
      <button
        onClick={changeBack}
        className="heart" // Use className instead of class in React
        style={{ backgroundColor: back, width: '100px', height: '100px', borderRadius: '50%' }}
      >
        {/* Optional: You can add a text/icon inside the button */}
      </button>
    </>
  );
};

export default LikeButton;
