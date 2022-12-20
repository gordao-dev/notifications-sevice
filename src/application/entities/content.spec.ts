// criação dos testes com o Content

import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy(); // toBeTruthy é algo ok! algo que deu certo!
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow(); // toThrow Disparar um erro.
  });

  it('should not be able to create a notification content with more than 301 characters', () => {
    expect(() => new Content('a'.repeat(301))).toThrow(); //repeat() repete algo por uma determinada quantidade de vezes.
  });
});
