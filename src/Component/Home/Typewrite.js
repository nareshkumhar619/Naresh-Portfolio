import React from 'react'
import Typewriter from "typewriter-effect";
const Typewrite = () => {
  return (
    <Typewriter
    options={{
      strings: ["Full Stack Web Developer", "MERN Stack Developer"],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  )
}

export default Typewrite