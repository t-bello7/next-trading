// import { Server } from 'socket.io'

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io

//     io.on('connection', socket => {
//       socket.on('input-change', msg => {
//         socket.broadcast.emit('update-input', msg)
//       })
//     })
//   }
//   res.end()
// }

// // server-side
// // io.on("connection", (socket) => {
// //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
// //   });

// export default SocketHandler