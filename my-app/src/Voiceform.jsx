import React, { useState } from 'react'

const VoiceForm = () =>{
  const [spokenText,setSpokenText] = useState("");
  const [typedText,setTypedText] = useState("");
  const [showForm,setShowForm] = useState("");
  const [error,setError] = useState("");
  const [attempts,setAttempts] = useState(0);
  const [locked,setLocked] = useState(false);

  const correctCode = "hello open form";
  const MAX_ATTEMPTS = 3;

  const VerifyCode = (text) =>{
    if(locked) return;

     if(text.trim().toLowerCase()===correctCode){
       setShowForm(true);
      setError("");
      setAttempts(0);
     }else{
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if(newAttempts >= MAX_ATTEMPTS){
        setLocked(true);
        setError("🔒 systemlocked! Too many wrong attempts.");
      }

      else{
        setError (`wrong code ! Attempts left:${MAX_ATTEMPTS - newAttempts}`);
      }

      }
     
  }
};

const startListening = () =>{
if(locked) return;


setError("");
setSpokenText("");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
  setError("your browser does not support voice recognition");
  return;
}

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.start();

recognition.onresult = (event) =>{
  const voiceResult = event.result [0] [0] .transcript;
  setSpokenText(voiceResult);
  VerifyCode(voiceResult);
};

recognition.onerror = () =>{
  setError(" Voice recognition failed");
};
};


const handleTypedSubmit = (e) => {
  e.preventDefault();
  if (locked) return;
  verifyCode(typedText);
};

return(
  <div style = {containerStyle}>
    <h2>🔒 voice & Type Unlock Form</h2>

    {locked && (
      <p style ={{color:"red",fontweight:"bold"}}>
        🔒  Access Locked. Please contact admin.
      </p>
    )}


     {/* 🎤 Voice Section */}
      <button
        onClick={startListening}
        style={btnStyle}
        disabled={locked}
      >
        🎙 Speak Code
      </button>

      {spokenText && (
        <p>
          <b>You said:</b> {spokenText}
        </p>
      )}



        <hr style={{ margin: "20px 0" }} />

      {/* ⌨️ Typing Section */}
      <form onSubmit={handleTypedSubmit}>
        <input
          type="text"
          placeholder="Type secret code"
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          style={inputStyle}
          disabled={locked}
        />
        <br />
        <br />
        <button type="submit" style={btnStyle} disabled={locked}>
          🔑 Submit Code
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}



 {/* ✅ Form */}
      {showForm && (
        <form style={formStyle}>
          <h3>✅ Form Unlocked</h3>
          <input type="text" placeholder="Enter Name" />
          <br />
          <br />
          <input type="email" placeholder="Enter Email" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

  </div>
    )
  /* ===== Styles ===== */
const containerStyle = {
  padding: "30px",
  textAlign: "center",
};

const btnStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

const inputStyle = {
  padding: "10px",
  width: "220px",
};

const formStyle = {
  marginTop: "25px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  display: "inline-block",
};

export default VoiceForm;
