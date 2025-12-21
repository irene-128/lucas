// import { useEffect, useState } from "react";
import './App.css';

import { HandleClick } from "./HandleClick";

import { useState } from "react";
import { BlueMountains } from "./components/BlueMountains";
import { FrontTrees } from './components/FrontTrees';
import { GreenMountains } from "./components/GreenMountains";
import { Wind } from './components/Wind';
import { Clouds} from './components/Clouds';
import { BeginButton } from './components/BeginButton';


function App() {

  const [click1, setClick1] = useState(0)
  const numDialogues = 8;

  return (
    <>
      <div>
        <BlueMountains />
        <GreenMountains />
        <FrontTrees />
        <Wind />
        <Clouds />
         
      </div>
      
      <div>
        <HandleClick setClick={setClick1} click = {click1} numDialogues={numDialogues} />
        <BeginButton setClick={setClick1} dialogueCounter={click1}/>
      </div>

    </>

  );
}

export default App
