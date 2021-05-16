import runtime from "serviceworker-webpack-plugin/lib/runtime";

const swRegister = async () => {
  if ("serviceWorker" in navigator) {
    await runtime.register();
    return;
  }

  console.log("service worker nor supported in this browser");
};

export default swRegister;
