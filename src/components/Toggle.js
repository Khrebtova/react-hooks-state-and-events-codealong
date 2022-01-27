import React, { useState } from "react";

function Toggle() {
  const [isON, setIsOn] = useState(false)
  function handleClick(){
    setIsOn((isON) => !isON)
  }
const color = isON ? "red" : "white"  

  return <button style={{ background: color }} onClick={handleClick}>{isON ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
