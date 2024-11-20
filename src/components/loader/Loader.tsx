import { Triangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4C9BB3"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default LoadingScreen;
