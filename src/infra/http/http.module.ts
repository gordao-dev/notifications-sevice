import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { notificationsController } from './controllers/notifications.controller';

// modules http
@Module({
  imports: [DatabaseModule],
  controllers: [notificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
