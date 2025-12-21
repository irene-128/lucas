import { useEffect, useState } from "react";
import arrow from "../assets/dialouge/next_arrow.png";
import arrow_hover from "../assets/dialouge/next_arrow_hightlighted.png";

interface NextButtonProps {
    setClick: (state: number)=> void,
    dialogueCounter: number,
    numDialogues: number
}

function CalcDelay(frame: number, maxFrames: number) {

    if (frame === (maxFrames-1)) {
        return 500;
    }

    if (frame === 0) {
        return 1200;
    }

    return 200;

}

function CalcDisplacement(frame: number) {

    if (frame === 0) {
        return 0;
    }

    if (frame === 1) {
        return 4;
    }

    if (frame === 2) {
        return 6;
    }

}

export function NextButton({setClick , dialogueCounter, numDialogues}: NextButtonProps){

    const [hover, setHover] = useState(0);

    const frames = 3;

    const [frame, setFrame] = useState(0);

    useEffect(() => {
            const timer1 = setInterval(()=>{setFrame((frame + 1)%frames)}, CalcDelay(frame, frames));
    
        return () => {
            clearInterval(timer1);
            };
        }, [frame]);

    useEffect(() => {
        setHover(0);
        }, [dialogueCounter]);


    if (dialogueCounter >= numDialogues || dialogueCounter === 0) {
        return (<></>);
    }

    return (
        
    <div 
    //     style={{
    //     position: "absolute", 
    //     width: "100%",
    //     height: "100%",
    // }}
    >
        
             
        <button
            onClick={() =>{setClick(dialogueCounter + 1)}}
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
            style={{
                position: "absolute",
                zIndex: 11,
                background: "none",
                cursor: "pointer",
                border:"none",
                outline: "none",
                right: "30px",
                bottom: "25px",
                transform: `translateY(${CalcDisplacement(frame)}px)`,
            
            }}>

            <img src={hover ? arrow_hover : arrow} alt="arrow" width={40} height={40} />
        </button>
          

    </div>
        
    )

}