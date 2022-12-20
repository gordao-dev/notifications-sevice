import { Notification } from '../entities/notification';

// criação do metodo de criação de notification
export abstract class NotificationRepository {
  abstract create(notidication: Notification): Promise<void>;
}
