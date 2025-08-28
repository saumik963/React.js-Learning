import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem",  padding: "1rem" }}>
      {toggle && (
        <p style={{ fontFamily: "Charukola Ultra Light" ,fontWeight:"bolder", fontSize:"2rem"}}>
          আমি বাংলায় মাতি উল্লাসে, করি বাংলায় হাহাকার আমি সব দেখে শুনে ক্ষেপে
          গিয়ে- করি বাংলায় চিৎকার।
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle); // use like a switch, when true it become false and when false it become true
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
