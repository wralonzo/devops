import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuelapipe'
})
export class VuelaPipe implements PipeTransform{

    transform( valor: boolean): string {
        return valor ? 'SI': 'NO';
        
    }
    
}