//Ime Event je rezervirano s strany JavaScripta
import { Komentar } from './comment'

export class InstructionsEvent {
    _id: string;
    naziv: string;
    opis: string;
    cena: number;
    datum: Date;
    ura: string;
    steviloProstihMest: number;
    emailInstruktorja: string;
    komentarji: Komentar[];
}