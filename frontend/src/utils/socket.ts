import { Manager } from "socket.io-client";

const manager = new Manager("localhost:5000", {
    transports: ["websocket"],
    reconnectionDelayMax: 10000,
  });
  
export const xtb_socket = manager.socket("/",{});
  