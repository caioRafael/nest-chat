import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessageService } from './message.service';
import IMessage from './dto/Message';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}
  @WebSocketServer() server: Server;

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: IMessage) {
    await this.messageService.create(createMessageDto);
    await this.findAll();
  }

  @SubscribeMessage('findAllMessage')
  async findAll() {
    const messages = await this.messageService.findAll();
    console.log(messages);
    this.server.emit('findAllMessage', messages);
  }
}
