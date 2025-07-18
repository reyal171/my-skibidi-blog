import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  MC_RIDE_BIOGRAPHY
} from './data/blogContent';
import {
  APP_NARRATIVE
} from './data/blogContent';

function App() {
  return (
    <div style={{backgroundColor: "lime"}}>
      <h1 style={{ 
        fontFamily: "Comic Relief",
        color: "#D000FF", 
        textAlign: "right", 
        letterSpacing: "57px",
        backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(211, 179, 0), rgb(36, 218, 12), rgb(78, 0, 223), rgb(182, 0, 228)', 
        fontSize: "101px"
        }}>Welcome to My Blog</h1>
      <p>Content here</p>
      <PlogBost title="mc ride biography by me :)"content={MC_RIDE_BIOGRAPHY} color="aqua"fooooooooooooooo0o0o0ont="Comic Relief"buttonalert="yayyy u like post"/>
      <PlogBost title='narrative by me titled "App?"'content={APP_NARRATIVE} color="firebrick"fooooooooooooooo0o0o0ont="comic relief"buttonalert="thank u for like post"/>
      <PlogBost title="plogbost#3.."content="plogbost#3 yessirrrrrr"color="#F19233"fooooooooooooooo0o0o0ont="redacted"buttonalert="asl;kdjfoiawhef"/>
      <PlogBost title="plogbost#4..."content="plogbost#4 yessirrrrrrr"color="pink"fooooooooooooooo0o0o0ont="comic relief"buttonalert="you liked plogbost 4"/>
    </div>

  );
}

function PlogBost(props) {
  const [likes, setLikes] = useState(0); // starting at 0
  
  return (
    <div style={{
      width: '1701px',
      backgroundColor: props.color,
      border: '4px inset yellow',
      margin: '14px',
      paddingTop: '4px',
      paddingLeft: '74px',
      paddingRight: '74px',
      borderRadius: '160px',
      
      }}>
      <h2 style={{
        fontFamily: "Comic Relief"
      }}>{props.title}</h2>
      <p style={{ marginBottom: '10px',
        fontFamily: props.fooooooooooooooo0o0o0ont
      }}>
        👍 Likes: {likes}
      </p>
      <p style={{
        fontFamily: props.fooooooooooooooo0o0o0ont
      }}>{props.content}</p>
      <button
        style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: props.fooooooooooooooo0o0o0ont
        }}
        onClick={() => setLikes(likes + 1)}
      >  
        Like 👍
      </button>
  
    </div>

  );
}

export default App;