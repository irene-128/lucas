import envolope from "../assets/dialouge/envolope.png";
import envolope_hover from "../assets/dialouge/envolope_hover.png";
import { useState } from "react";


interface BeginButtonProps {
    setClick: (state: number) => void,
    dialogueCounter: number

};




export function BeginButton({setClick, dialogueCounter}: BeginButtonProps)  {
    
    const [hover, setHover] = useState(0);
    
    if (dialogueCounter === 0){
        return (
            <div>
                <button
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                    onClick={()=>{setClick(dialogueCounter + 1)}}
                    style={{
                        position: "absolute",
                        zIndex: 11,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                        fontFamily: "'Jersey 10', consolas",
                        fontSize: "30px",
                        padding: "0px",
                        color: "rgb(45, 19, 4)",
                    }}
                >
                   
                <img src={hover ? envolope_hover : envolope} alt="arrow" width={200} height={200} 
                     style={{marginBottom:"-10px",
                     }}
                />To Lucas
                </button>
            </div>
        )
    }

    return (
        <></>
    )
}