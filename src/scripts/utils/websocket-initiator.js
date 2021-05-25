/* eslint-disable no-underscore-dangle */
const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket('ws://movies-feed.dicoding.dev');
    webSocket.onerror = (e) => {
      console.log("websocket", e);
    };
    webSocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler(message) {
    console.log("web", message.data);
  },
};

export default WebSocketInitiator;
