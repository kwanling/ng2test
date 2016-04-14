import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    
    transform(value: string, args: string[]) {
        var limit = (args && args[0]) ? parseInt(args[0]) : 150;
        
        if (value)
            return value.substring(0, limit) + "..."
    }
    
}