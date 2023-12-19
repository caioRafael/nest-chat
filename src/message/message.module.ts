import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { PrismaService } from 'src/infra/database/prisma.service';

@Module({
  providers: [MessageGateway, MessageService, PrismaService],
})
export class MessageModule {}
