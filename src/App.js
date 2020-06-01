import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div id="main_header" class="main_header">
          <button aria-label="Menu" class="menu"> Menu </button>
          <a class="bigname"
            href="//www.wsj.com">
            <h1>THE WALL STREET JOURNAL.</h1>
          </a>
          <a class="smallname" href="//www.wsj.com">
            <h1> WSJ</h1>
          </a>
          <button aria-label="Search" class="search" > Search </button>
        </div>


        <div className="subheader">
          <div class="language_dropdown">
            English Edition
          </div>
          <div class="date">
            <p class="">June 1, 2020</p>
          </div>
          <div>
            <a class="print_edition"
              href="https://www.wsj.com/itp?mod=wsjheader">Print Edition</a>
          </div>
          <div><a class="video"
            href="https://www.wsj.com/video?mod=wsjheader">Video</a>
          </div>
          <div>
            <a class="latest_headlines"
              href="https://www.wsj.com/news/latest-headlines?mod=wsjheader">
              Latest Headlines</a>
          </div>
        </div>

      </header>

      <body>
        <p> articles go here </p>
      </body>
    </div>
  );
}

export default App;
