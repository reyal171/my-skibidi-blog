import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  MC_RIDE_BIOGRAPHY,
  SOMETHING_THAT_HAPPENED_BLAH_BLAH,
  MC_RIDE_BIOGRAPHY_2,
  APP_NARRATIVE_2,
  SOMETHING_THAT_HAPPENED_BLAH_BLAH_2,
  ABC_REVIEW,
  ABC_REVIEW_2,
  STORY_STORY,
  STORY_STORY_2
} from './data/blogContent';
import {
  APP_NARRATIVE
} from './data/blogContent';
import mcridephoto from "./mcrideexampleimage.jpg"
import narrativephoto from "./appimageting.png"
import redactedphoto from "./redacted.png"
import longphoto from "./sometingthathashappendeinmylifepart2imngthingy.png"
import abcimage from "./abcmasterpieceimage.png"
import gnarlyimage from "./gnarly.png"

function App() {
  const [bgColor, setBgColor] = useState(true)
  return (
    <div style={{backgroundColor: bgColor ? 'lime' : 'yellow'}}>
      <h1 style={{ 
        fontFamily: "Comic Relief",
        color: "#D000FF", 
        textAlign: "right", 
        letterSpacing: "31px",
        backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(211, 179, 0), rgb(36, 218, 12), rgb(78, 0, 223), rgb(182, 0, 228)', 
        fontSize: "99px"
        }}>Welcome to jayden yang's very skibidi blog</h1>
      <button onClick={() => setBgColor(!bgColor)}>
        change backroun color</button>
      <p>Content here</p>
      <PlogBost title="mc ride biography by me :)"content={MC_RIDE_BIOGRAPHY} color="aqua"fooooooooooooooo0o0o0ont="Comic Relief"contentofplogbooooooo0oo0o0ost={MC_RIDE_BIOGRAPHY_2}imageofplogboooo0o0ost={mcridephoto}/>
      <PlogBost title='narrative by me titled "App?"'content={APP_NARRATIVE} color="firebrick"fooooooooooooooo0o0o0ont="comic relief"contentofplogbooooooo0oo0o0ost={APP_NARRATIVE_2}imageofplogboooo0o0ost={narrativephoto}/>
      <PlogBost title="████████████"content="plogbost#3 yessirrrrrr"color="#F19233"fooooooooooooooo0o0o0ont="redacted"imageofplogboooo0o0ost={redactedphoto}/>
      <PlogBost title="something that has happened in my life v2 but cause and effect this time by me"content={SOMETHING_THAT_HAPPENED_BLAH_BLAH}color="pink"fooooooooooooooo0o0o0ont="comic relief"contentofplogbooooooo0oo0o0ost={SOMETHING_THAT_HAPPENED_BLAH_BLAH_2}imageofplogboooo0o0ost={longphoto}/>
      <PlogBost title="should you read American Born Chinese??"content={ABC_REVIEW}color="#2E84F5"fooooooooooooooo0o0o0ont="comic relief"contentofplogbooooooo0oo0o0ost={ABC_REVIEW_2}imageofplogboooo0o0ost={abcimage}/>
      <PlogBost title="story.story"content={STORY_STORY}color="#A68DF2"fooooooooooooooo0o0o0ont="comic relief"contentofplogbooooooo0oo0o0ost={STORY_STORY_2}imageofplogboooo0o0ost={gnarlyimage}/>
    </div>

  );
}

function PlogBost(props) {
  const [likes, setLikes] = useState(0); // starting at 0
  const [showMore, setShowMore] = useState(false);
  

  
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
        👍 Likes: (these dont save btw) {likes}
      </p>
      <p style={{
        fontFamily: props.fooooooooooooooo0o0o0ont
      }}>{props.content}</p>
      {showMore && (
        <div>
          <img src={props.imageofplogboooo0o0ost} width="1100" height="400"/>
          <p style={{
           fontFamily: props.fooooooooooooooo0o0o0ont
         }}>
            {props.contentofplogbooooooo0oo0o0ost}
         </p>
        </div>
        
      )}

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
        <button
        onClick={() => setShowMore(!showMore)}
        style={{
          marginTop: '10px',
          backgroundColor: '#ff9800',
          color: 'white',
          padding: '8px 12px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: props.fooooooooooooooo0o0o0ont
        }}
      >
        {showMore ? 'Show Less' : 'Read More'}
      </button>
    </div>

  );
}

export default App;