import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>Let's start Chatting!</span>
        </div>
        <div style={{ float:'right' }}>Thank you for trying my ChattApp</div>
        </>
    )
}

export default LandingPage
