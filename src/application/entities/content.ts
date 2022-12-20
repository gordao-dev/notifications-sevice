// Criação da classe content correspondete ao content de notifications
export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 300;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLenght(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}
