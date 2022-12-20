import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

// Criação da interface e informando quais os atributos terá na notificação.
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

// criação da classe
export class Notification {
  // Criação do atributo
  private _id: string;
  private props: NotificationProps;

  // Criação dos geters e seters

  // Replace sendo usado passando as NotificationsProps falando que agora o campo createdAt é opcinal
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      // usando o ... para passar uma copia das props porem verificando o createdAt! se ele for informado eu uso a data se não insiro a data.
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }
  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
