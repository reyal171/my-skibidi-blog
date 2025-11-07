// About.js
import React from "react";
import jaydebphoto from "./jaydeb.png";
import { motion } from "framer-motion";
import { useState } from 'react';
import './styles.css';


function About() {
  const [bgColor, setBgColor] = useState(true)
  const [TxtColor, setTxtColor] = useState(true)
  return (
    <div style={{backgroundColor: bgColor ? 'cyan' : 'magenta'}}>
      <h1 style={{
        fontFamily: "Comic Relief",
        color: TxtColor ? 'black' : 'white',
      }}>about this blog website!1</h1>
     <div style={{display: "flex", flexDirection: "row-reverse"}}>
        <motion.button className="read-btn"
          whileHover={{scale:4.1}}
           whileTap={{scale:67,rotate:-400}}
        >
          Read More
       </motion.button>
            <motion.button
         whileHover={{ scale: 3.1 }}
         whileTap={{ scale: 1.1, rotate: 63}}
          onClick={() => setBgColor(!bgColor)}
         className="p-2 bg-blue-500 text-white rounded"
      
        
      >
        change backroun color
      </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1, rotate: -67}}
          onClick={() => setTxtColor(!TxtColor)}
          className="p-2 bg-blue-500 text-white rounded"
        
      >
          change TExt coLor
        </motion.button>
      </div>
      <p style={{
        fontFamily: "Comic Relief",
        color: TxtColor ? 'black' : 'white',
      }}>this blog was made by Jayden Yang using react</p>
      <p style={{
        fontFamily: "Comic Relief",
        color: TxtColor ? 'black' : 'white',
      }}>here i publish stuff that i wrote for Angela Luo's class</p>
      
      <p style={{
        fontFamily: "Comic Relief",
        color: TxtColor ? 'black' : 'white',
      }}>enjoy m,y mastepprieces i geuses</p>
      
       <motion.button className="read-btn"
       whileHover={{scale:4.1}}
       whileTap={{scale:67,rotate:-400}}
      >
       Read More
      </motion.button>
      <img src={jaydebphoto}width="1200"height="470"/>
      <motion.button className="read-btn"
       whileHover={{scale:4.1}}
       whileTap={{scale:67,rotate:-400}}
      >
       Read More
      </motion.button>
      <motion.button className="read-btn"
       whileHover={{scale:4.1}}
       whileTap={{scale:67,rotate:-400}}
      >
       Read More
      </motion.button>
      <motion.button className="read-btn"
       whileHover={{scale:4.1}}
       whileTap={{scale:67,rotate:-400}}
      >
       Read More
      </motion.button>
      
    </div>
  );
}

export default About;
