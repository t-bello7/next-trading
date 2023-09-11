from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from logging import getLogger, basicConfig, CRITICAL, DEBUG
from dotenv import dotenv_values
from app import APIClient, loginCommand, APIStreamClient, procTradeExample, procProfitExample, procTradeStatusExample, procTickExample, balanceFun

async_mode = None
SERVER_DEBUG=True  

env_config = dotenv_values('.env')
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
cors = CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*", transports=['websocket'], logger=SERVER_DEBUG, engineio_logger=SERVER_DEBUG)


logger = getLogger('jsonSocket')
FORMAT = '[%(asctime)-15s][%(funcName)s:%(lineno)d] %(message)s'

client = APIClient()
loginResponse = client.execute(loginCommand(userId=env_config['XTB_USERID'], password=env_config['XTB_PASSWORD']))

basicConfig(format=FORMAT)
if SERVER_DEBUG:
    logger.info(str(loginResponse))
    logger.setLevel(DEBUG)
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
else:
    logger.setLevel(CRITICAL)

if(loginResponse['status'] == False):
    print('Login failed. Error code: {0}'.format(loginResponse['errorCode']))
    # return
ssid = loginResponse['streamSessionId']
sclient = APIStreamClient(ssId=ssid, tickFun=procTickExample, tradeFun=procTradeExample, balanceFun=balanceFun, profitFun=procProfitExample, tradeStatusFun=procTradeStatusExample)


@app.route("/")
def index():
    return "flask works"

@socketio.on('message', namespace="/name")
def handle_message(data):
        print('received message: ', data)
        emit("data", {
            'data': data,
        }, broadcast=True)


@socketio.on('getAllSymbols')
def get_all_symbols():
    resp = client.commandExecute('getAllSymbols')
    emit('symbols', { 'data': resp }, broadcast=True)
    # return
    
@socketio.on("streamCandles")
def stream_candles():
    sclient.subscribeCandles('EURUSD')
    # print(resp)

@socketio.on('streamTrades')
def stream_trades():
    resp = sclient.subscribeTrades()
    emit('trades', {'data': resp}, broadcast=True)

    # print(resp)

@socketio.on('streamBalance')
def stream_balance():
    sclient.subscribeBalance()
    # resp = sclient.subscribeBalance()
    # if resp:
    # emit('balance',  {'data': resp}, broadcast=True)
    # print(resp)


if __name__ == '__main__':
    socketio.run(app)
