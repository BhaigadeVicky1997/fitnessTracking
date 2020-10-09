export interface Excercise{

    id:string;
    name: string;
    duration:number;
    calories: number;
    Date?: Date,
    state? : 'completed' | 'cancelled' | null;

}