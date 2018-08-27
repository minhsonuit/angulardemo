import { Answer } from './answer.model';
export class Question
{
    Id:number;
    Name:string;
    CreatedDateTime:Date;
    Answers:Array<Answer>;
}