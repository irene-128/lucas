import trees1 from "../assets/background/front_trees.png";
import { memo } from "react";


function FrontTreesComponent() {
  return (
      <img
        src={trees1}
        alt="Front Trees"
        style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        willChange: "transform",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)", // key fix
        zIndex: 5,
        }}
      />

  );
}

export const FrontTrees = memo(FrontTreesComponent);


