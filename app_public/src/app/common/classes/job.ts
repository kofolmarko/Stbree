import { Komentar } from './comment'

export class Job {
    _id: string;
    naziv: string;
    opis: string;
    cena: number;
    datum: Date;
    emailPonudnika: string;
    zasedeno: Boolean;
    komentarji: Komentar[];
}

