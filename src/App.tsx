  import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>
        Win Lose
      </div>
      <div    // hangman
        style={{
          position: "relative",
          margin: "0 auto"
        }}
      >
        <div
          style={{    // head
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "50px",
            right: "-30px",
            border: "10px solid black",
            borderRadius: "100%"
          }}
        />
        <div    // right vertical bar
          style={{
            background: "black",
            width: "10px",
            height: "50px",
            position: "absolute",
            right: "0",
            top: "0"
          }}
        />
        <div    // top horizontal bar
          style={{
            background: "black",
            width: "200px",
            height: "10px"
          }}
        />
        <div    // left vertical bar
          style={{
            background: "black",
            width: "10px",
            height: "400px"
          }}
        />
        <div    // bottom hotizontal bar
          style={{
            background: "black",
            width: "250px",
            height: "10px",
            position: "absolute",
            left: "-125px",
          }}
        />
      </div>
    </div>
    </>
  )
}

export default App
