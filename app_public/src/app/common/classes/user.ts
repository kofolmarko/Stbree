import { InstructionsEvent } from "./event";
import { Job } from "./job";

export class Sporocila{
    prejemnikSporocila: String;
    besedilo: String;
    cas: Date;
}
export class User {
    _id: string;
    ime: string;
    priimek: string;
    opis: string;
    statusInstruktorja: boolean;
    telefonskaStevilka: string;
    email: string;
    //geslo: string;
    //ocena: number;
    //datumVpisa: Date;
    dogodki: InstructionsEvent[];
    dela: Job[];
    poslanaSporocila: Sporocila[];
    kontakti: String[]
}