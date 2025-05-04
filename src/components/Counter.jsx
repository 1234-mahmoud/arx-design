import { useState, useEffect, useRef } from "react";
import React from "react";
import "../style/Counter.css";
export default function Counter({ end }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the interval when the component mounts
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= end - 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return prevCount + 1;
      });
    }, 5);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="counter">
      <h2 className="counter-num">{count > 999 ? (count / 1000).toFixed(1) + "k" : count}</h2>
      <span className="material-symbols-outlined plus_symb">add</span>

    </div>
  );
}
