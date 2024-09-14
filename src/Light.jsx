import { useState } from "react";



const Light = () => {
const [Light,setLight]= useState("")


const handleLight=()=>{
    var data="blue"
    setLight(data)
}

const handleDark=()=>{
    var data="yellow"
    setLight(data)
}

    return (
        <>
            <div style={{backgroundColor:Light}} >
                <h1>Light</h1>
                <button onClick={handleLight}>Light</button>
                <button onClick={handleDark}>Dark</button>
            </div>
        </>
    );
};

export default Light;