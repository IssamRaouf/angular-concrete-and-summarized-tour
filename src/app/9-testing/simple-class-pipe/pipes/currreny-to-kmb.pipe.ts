import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'appCurrencyToKMB'
})


export class CurrencyToKMBPipe implements PipeTransform {

    transform(value: number): any {
        if (value < 1e3) {
            return value;
        } else if (value > 1e3 && value < 1e6) {
            return (value / 1e3).toFixed(1) + 'K';
        } else if (value > 1e6 && value < 1e9) {
            return (value / 1e6).toFixed(1) + 'M';
        } else {
            return (value / 1e9).toFixed(1) + 'B';
        }
    }

}
