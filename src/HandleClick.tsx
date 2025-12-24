import { useState, useEffect } from "react";
import { DialogueBox } from './components/DialogueBox';
import { DS } from './components/DialogueStore';



interface HandleClickProps{
    click: number,
    setClick: (state:number) => void, 
    numDialogues: number,
}

export function HandleClick({ setClick, click , numDialogues }:HandleClickProps) {

    const [dialogue1, setDialogue1] = useState(0);
    const [dialogue2, setDialogue2] = useState(0);
    const [dialogue3, setDialogue3] = useState(0);
    const [dialogue4, setDialogue4] = useState(0);
    const [dialogue5, setDialogue5] = useState(0);
    const [dialogue6, setDialogue6] = useState(0);
    const [dialogue7, setDialogue7] = useState(0);
    const [dialogue8, setDialogue8] = useState(0);
    const [dialogue9, setDialogue9] = useState(0);

    useEffect(() => {
        if (click === 1) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue1(1);
            
        }

        if (click === 2) { 
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue2(1);

            
        }

        if (click === 3) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue3(1);

        }

        if (click === 4) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue4(1);

        }


        if (click === 5) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue5(1);

        }

        if (click === 6) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue6(1);

        }

        if (click === 7) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue7(1);

        }
        if (click === 8) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue8(1);

        }

        if (click === 9) {
            setDialogue1(0);
            setDialogue2(0);
            setDialogue3(0);
            setDialogue4(0);
            setDialogue5(0);
            setDialogue6(0);
            setDialogue7(0);
            setDialogue8(0);
            setDialogue9(0);

            setDialogue9(1);

        }

    }, [click]);

    return (
        <>
            {dialogue1 && (<DialogueBox body = {DS.page1} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue2 && (<DialogueBox body = {DS.page2} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue3 && (<DialogueBox body = {DS.page3} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue4 && (<DialogueBox body = {DS.page4} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue5 && (<DialogueBox body = {DS.page5} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue6 && (<DialogueBox body = {DS.page6} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue7 && (<DialogueBox body = {DS.page7} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue8 && (<DialogueBox body = {DS.page8} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
            {dialogue9 && (<DialogueBox body = {DS.page9} setClick={setClick} click={click} numDialogues={numDialogues}/>)}
        </>
    )
}