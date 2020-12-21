import { InstructionsEvent } from "./event";

export class User {
    _id: string;
    ime: string;
    priimek: string;
    opis: string;
    statusInstruktorja: boolean;
    telefonskaStevilka: number;
    email: string;
    //geslo: string;
    //datumVpisa: Date;
    dogodki: InstructionsEvent[];
    // dela: Job[];
    // poslanaSporocila: Message[];
}