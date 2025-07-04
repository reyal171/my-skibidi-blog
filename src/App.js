import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: "lime"}}>
      <h1 style={{ 
        color: "#D000FF", 
        textAlign: "right", 
        letterSpacing: "57px", 
        fontSize: "101px"
        }}>Welcome to My Blog</h1>
      <p>This is my first post, and it’s built using React!</p>
      <PlogBost title="plogbost#1"content="plogbost#1 yessirrrr" color="aqua"/>
      <PlogBost title="plogbost#2."content="plogbost#2 yessirrrrr" color="firebrick"/>
      <PlogBost title="plogbost#3.."content="plogbost#3 yessirrrrrr"color="#F19233"/>
      <PlogBost title="plogbost#4..."content="plogbost#4 yessirrrrrrr"color="pink"/>
    </div>

  );
}

function PlogBost(props) {
  return (
    <div style={{
      backgroundColor: props.color,
      lineHeight: "8px"
      }}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>

  );
}

export default App;