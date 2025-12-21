import box from "../assets/dialouge/dialogue_box1.png";

import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

interface DialogueBoxProps {
    body: string,
    click: number,
    setClick: (state:number) => void, 
    numDialogues: number,
} 

export function DialogueBox({body, click, setClick, numDialogues}: DialogueBoxProps) {
  return (
    <div
        style={{
            width: "80vw",
            height: "80vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
        }}
        >
  <img
    src={box}
    alt=""
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "fill",
      zIndex: -1,
      pointerEvents: "none",
    }}
  />


  <div
    style={{
      position: "relative", // important: buttons are positioned relative to this
      width: "100%",
      height: "100%",
      padding: "50px",
      boxSizing: "border-box",
      fontFamily: "'Jersey 10', consolas",
      whiteSpace: "pre-line",
      textAlign: "left",
      lineHeight:"1.5",
      fontSize: "clamp(1px, 5vw, 30px)",
      color: "rgb(45, 19, 4)",
    //   backgroundColor:"red",
    }}
    >
    <div style={{ overflowY: "auto" }}>
      {body}
    </div>

    <div>
    <PrevButton
      setClick={setClick}
      dialogueCounter={click}
    />
    <NextButton
      setClick={setClick}
      dialogueCounter={click}
      numDialogues={numDialogues}
    />

    </div>
  </div>
</div>

  )
}