// ng g class [folder/name] --type=model --skip-tests
export class Task {
    pkTaskId:number=0; 
    text:string='';
    day:Date;
    reminder:boolean = true;
    fkTaskTypeId:string = '';
}
