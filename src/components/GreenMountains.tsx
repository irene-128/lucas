import bg from "../assets/background/green_mountains.png";

export function GreenMountains() {
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
        zIndex: 3,
      }}
    >

    </div>
  );
}


