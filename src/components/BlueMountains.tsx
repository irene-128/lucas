import bg from "../assets/background/blue_mountains.png";

export function BlueMountains() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1
      }}
    >

    </div>
  );
}


