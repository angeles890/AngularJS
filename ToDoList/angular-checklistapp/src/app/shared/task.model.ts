// ng g class [folder/name] --type=model --skip-tests
export class Task {
    id:number=0; 
    text:string='';
    day:Date;
    reminder:boolean = true;
}
