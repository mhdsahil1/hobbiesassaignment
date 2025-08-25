// src/App.jsx
import React from "react";

import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">My Hobbies</h1>

      <div className="card-container">
        <Card
          title="⚽ Football"
          description="I love playing football and watching matches, especially Champions League nights!"
          image="https://www.bing.com/images/search?view=detailV2&ccid=uAAW2SAl&id=B8B4340E0CFE914FB0E6D34B0B2B07418B60C2BF&thid=OIP.uAAW2SAl-ISFwKoMdOPMxQHaE8&mediaurl=https%3a%2f%2fcdn.wallpapersafari.com%2f3%2f7%2fSFe72B.jpg&exph=3580&expw=5370&q=footbal&simid=608028200517240717&FORM=IRPRST&ck=D06616093A7461E6C683C481CFAC70DE&selectedIndex=6&itb=0"
        />
        <Card
          title="💻 Coding"
          description="Frontend development and cybersecurity are my main interests. I enjoy building projects and learning new tech."
          image="https://www.bing.com/images/search?view=detailV2&ccid=uxk3R022&id=FECB545F04218C65A64D1A888E99E7A6E48893E6&thid=OIP.uxk3R022UcnNHi-GIL1iHAHaE8&mediaurl=https%3a%2f%2fas1.ftcdn.net%2fv2%2fjpg%2f02%2f42%2f23%2f58%2f1000_F_242235892_cs2bd1fNCf144PsEuqjudIycGTuFloEE.jpg&exph=667&expw=1000&q=coding&simid=608054481389506639&FORM=IRPRST&ck=40E5A347B2FB79EAF1ABB1394B809517&selectedIndex=1&itb=0"
        />
        <Card
          title="🎶 Music"
          description="Listening to Lo-Fi and South Indian movie tracks is my way to relax."
          image="https://source.unsplash.com/300x200/?music"
        />
        <Card
          title="📚 Reading"
          description="I read books on self-improvement, cybersecurity, and sometimes sci-fi novels."
          image="https://source.unsplash.com/300x200/?books"
        />
      </div>
    </div>
  );
}

export default App;
