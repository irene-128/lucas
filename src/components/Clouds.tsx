import bigCloud from "../assets/background/large_clouds.png";
import smallCloud from "../assets/background/small_clouds.png";
import { useState , useEffect} from 'react';

const frames = 900;

function distanceCalc(frames: number, offset: number, index: number, imageWidth: number) {
    // offset in percentage out of 100
    return ((((100 + 2*imageWidth)/frames)*index + offset) + "vw");

}

function index2(index1: number, offset: number) {

    if ((index1 + offset) >= frames) {
        return (index1 + offset - frames);
    }

    return (index1 + offset);

}


export function Clouds () {
    // big clouds
    const [index1, setIndex1] = useState(100);

    useEffect(() => {
        const timer1 = setInterval(()=>{setIndex1((index1 + 1)%frames)}, 100);

    return () => {
        clearInterval(timer1);
        };
    });


    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: "15vh",
                    left: distanceCalc(frames, -80, index1, 100),
                    width: "40vw",
                    height: "40vh",
                    backgroundImage: `url(${bigCloud})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 2,
                }}
            >
                
            </div>

            <div
                style={{
                    position: "fixed",
                    top: "1vh",
                    left: distanceCalc(frames, -60, index2(index1, 300), 30),
                    width: "30vw",
                    height: "30vh",
                    backgroundImage: `url(${smallCloud})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1,
                }}
            
            >

            </div>
        </>


    );
}