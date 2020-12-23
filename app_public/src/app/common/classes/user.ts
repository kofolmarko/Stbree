import { InstructionsEvent } from "./event";

export class User {
    ime: string;
    priimek: string;
    opis: string;
    statusInstruktorja: boolean;
    telefonskaStevilka: number;
    email: string;
    //geslo: string;
    datumVpisa: Date;
    ocena: number;
    //datumVpisa: Date;
    dogodki: InstructionsEvent[];
    // dela: Job[];
    // poslanaSporocila: Message[];
}