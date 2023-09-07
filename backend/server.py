from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS
from app import APIClient

async_mode = None

if async_mode is None:
    try:
        import eventlet
        async_mode = 'eventlet'
    except ImportError:
        pass

    if async_mode is None:
        try:
            from gevent import monkey
            async_mode = 'gevent'
        except ImportError:
            pass

    if async_mode is None:
        async_mode = 'threading'

    print('async_mode is ' + async_mode)


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
cors = CORS(app,resources={r"/*":{"origins":"*"}})
# cors = CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", transports=['websocket'], logger=True, engineio_logger=True)


@app.route("/")
def index():
    return "flask works"


# @socketio.on('connect')
# def test_connect():
#     print(request.sid)
#     print('Client is connected')
#     emit("connect", {
#         "data": f"id: {request.sid}"
#     })

# @socketio.on('disconnect')
# def disconnected():
#     print('User disconnected')
#     emit("disconnect", f"user {request.sid} has been disconnected", broadcast=True)

@socketio.on('message')
def handle_message(data):
        print('received message: ', data)
    # emit("data", {
    #     'data': data,
    #     'id': request.sid
    # }, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)
