import { IsNotEmpty, IsUUID, Length } from 'class-validator';

// Body da notification
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 300)
  content: string;

  @IsNotEmpty()
  category: string;
}
