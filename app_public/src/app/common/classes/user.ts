import { InstructionsEvent } from "./event";

export class User {
    public _id: string;
    public ime: string;
    public priimek: string;
    public opis: string;
    public statusInstruktorja: boolean;
    public telefonskaStevilka: number;
    public email: string;
    public geslo: string;
    ocena: number;
    //datumVpisa: Date;
    dogodki: InstructionsEvent[];
    // dela: Job[];
    // poslanaSporocila: Message[];
}