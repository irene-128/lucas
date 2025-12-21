import frame1 from "../assets/background/wind1.png";
import frame2 from "../assets/background/wind2.png";
import frame3 from "../assets/background/wind3.png";
import frame4 from "../assets/background/wind4.png";
import frame5 from "../assets/background/wind5.png";
import frame6 from "../assets/background/wind6.png";
import frame7 from "../assets/background/wind7.png";
import frame8 from "../assets/background/wind8.png";
import { useState , useEffect} from 'react';

const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8];

function delayCalc(index: number) {

    if (index == (frames.length - 1)) {
        return 2000;
    }
    
    return 250;
}

export function Wind() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
    
        const timer1 = setInterval(()=>{setIndex((index + 1)%frames.length)}, delayCalc(index));
    

    return () => {
        clearInterval(timer1);
        };
    });


    return (
        <div
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${frames[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.80,
            zIndex: 4,
        }}
        >

        </div>
  );
}