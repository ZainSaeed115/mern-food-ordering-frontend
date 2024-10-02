import Lottie from "lottie-react";
import loadingAnimation from "../assets/Animation - 1727752456022.json";

const Loading = () => (
  <div style={loadingContainerStyle}>
    <Lottie 
      animationData={loadingAnimation} 
      loop={true} 
      style={lottieStyle} // Apply custom size here
    />
  </div>
);

// CSS in JS styles for centering and resizing
const loadingContainerStyle = {
  display: 'flex',
  justifyContent: 'center',  // Horizontal center
  alignItems: 'center',      // Vertical center
  height: '100vh',           // Full viewport height
  width: '100vw',            // Full viewport width
};

const lottieStyle = {
  width: '200px',   // Set custom size for the Lottie animation
  height: '200px',  // Adjust height accordingly
};

export default Loading;
