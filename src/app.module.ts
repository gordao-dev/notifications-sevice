import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';
import { PrismaService } from './prisma.sevice';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
