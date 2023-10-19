import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform( valor: string, may: boolean = true): string {
        if(may == true){
            return valor.toUpperCase();
        }else{
        return valor.toLowerCase();

        }
        
    }
    
}