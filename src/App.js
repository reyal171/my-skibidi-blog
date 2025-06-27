import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is my first post, and it’s built using React!</p>
      <PlogBost title="plogbost#1"content="plogbost#1 yessirrrr"/>
      <PlogBost title="plogbost#2."content="plogbost#2 yessirrrrr"/>
      <PlogBost title="plogbost#3.."content="plogbost#3 yessirrrrrr"/>
      <PlogBost title="plogbost#4..."content="plogbost#4 yessirrrrrrr"/>
    </div>

  );
}

function PlogBost(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>

  );
}

export default App;