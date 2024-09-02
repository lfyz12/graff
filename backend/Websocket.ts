import {Server} from "node:http";
import {message, typeEvent} from "./models";

const ws = require('ws')
export function websocket(server: Server) {
    const wss = new ws.Server({server})

    wss.on('connection', (ws: WebSocket) => {
        console.log('Новое подключение')

        ws.on('message', function (message: message) {
            switch (message.event) {
                case typeEvent.message:
                    break;
                case typeEvent.conection:
                    break;
            }
        })
    })
}