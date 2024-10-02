import Lottie from "lottie-react";
import errorAnimation from "../assets/Animation - 1727756853031.json"; // Replace with an actual error animation

const Error = () => {
  return (
    <div style={styles.container}>
      <Lottie 
        animationData={errorAnimation} 
        loop={true} 
        style={styles.animation}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height to center the animation vertically
    width: "100vw",  // Full viewport width
    backgroundColor: "#f8f9fa", // Optional background color
  },
  animation: {
    width: "300px",  // Adjust the width to fit the page
    height: "300px", // Adjust the height to fit the page
  },
};

export default Error;
