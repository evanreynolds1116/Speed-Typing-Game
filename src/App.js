import React, {useEffect, useRef, useState} from "react"
import useWordGame from "./hooks/useWordGame"

function App() {

    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame()
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                value={text}
                onChange={handleChange}
                disabled={!isTimeRunning}
                ref={textBoxRef}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App


