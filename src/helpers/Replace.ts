// type replace é uma helper function que pode receber duas tipagens T original e R de replace(quais props dessa tipagem orginal eu quero substituir)
export type Replace<T, R> = Omit<T, keyof R> & R;
