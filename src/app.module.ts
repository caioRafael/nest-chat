import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './infra/database/prisma.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
