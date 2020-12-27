import { InstructionsEvent } from "./event";
import { Job } from "./job";

export class User {
    _id: string;
    ime: string;
    priimek: string;
    opis: string;
    statusInstruktorja: boolean;
    telefonskaStevilka: number;
    email: string;
    //geslo: string;
    //ocena: number;
    //datumVpisa: Date;
    dogodki: InstructionsEvent[];
    dela: Job[];
    // poslanaSporocila: Message[];
}