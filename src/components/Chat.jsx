import React from 'react'

const Chat = (props) => {
    let boxStyle={
        padding:"0rem 3rem 3rem 3rem", 
        border:"2px  black", 
        width:"90%",
        height:"200px",
        overflowY:"scroll", 
        margin: "20px 30px 20px 20px",
        borderRadius:"10px",
        backgroundColor:"silver",
        fontFamily: "papyrus",
        boxShadow: "5px 5px 5px 0px rgb(158, 155, 155)"
    }
    let name=[
              "Lord Voldemort","Harry Potter","Ron Weasley","Hermione Granger","Draco Malfoy",
              "Neville Longbottom","Ginny Weasley","Luna Lovegood","Dean Thomas","Cedric Diggory",
              "Fred Weasley","George Weasley","Percy Weasley","Seamus Finnigan","Cho Chang",
              "Vincent Crabbe","Gregory Goyle","Oliver Wood",
              "Cormac McLaggen","Professor Quirrell","Professor Sprout","Rufus Scrimgeour","Cornelius Fudge",
              "Argus Filch","Mr Ollivander","James Potter","Lily Potter","Aunt Marge",
              "Dudley Dursley","Aunt Petunia","Uncle Vernon","Gilderoy Lockhart","Professor Trelawney",
              "Professor Flitwick","Professor Slughorn","Padma Patil","Parvati Patil",
              "Narcissa Malfoy","Peter Pettigrew","Kingsley Shacklebolt",
              "Nymphadora Tonks","Mr Weasley","Mrs Weasley","Dolores Umbridge","Alastor Moody",
              "Rubeus Hagrid","Remus Lupin","Lucius Malfoy","Sirius Black","Bellatrix Lestrange",
              "Professor McGonagoll","Severus Snape","Albus Dumbledore","Viktor Krum","Angelina Johnson",
              "Colin Creevey","Tom Riddle","Lavender Brown"
            ]
    return (
        <div>
             <left>
                <div className="chat-container" style={boxStyle}>
                    <br/>
                    <h4><strong>{name[Math.floor(Math.random() *(name.length-1))]}</strong></h4>
                    <br/>
                    <p className="chat-message" style={{fontSize:"1.5rem"}}>{props.message}</p>
                </div>
            </left>
        </div>
    )
}

export default Chat
