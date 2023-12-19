import { Injectable } from '@nestjs/common';
import IMessage from './dto/Message';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}
  async create(createMessageDto: IMessage) {
    const message = await this.prisma.message.create({
      data: createMessageDto,
    });

    return message;
  }

  async findAll() {
    const messages = await this.prisma.message.findMany();

    return messages;
  }
}
