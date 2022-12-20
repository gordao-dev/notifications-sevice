import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.sevice';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

// database module
@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
