import { Notification } from '..//../../../application/entities/notification';
import { NotificationRepository } from '../../../../application/repositories/notification-repository';
import { PrismaService } from '../prisma.sevice';
import { Injectable } from '@nestjs/common';

// Create a repository on prisma
@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notidication: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notidication.id,
        category: notidication.category,
        content: notidication.content.value,
        recipientId: notidication.recipientId,
        readAt: notidication.readAt,
        createdAt: notidication.createdAt,
      },
    });
  }
}
