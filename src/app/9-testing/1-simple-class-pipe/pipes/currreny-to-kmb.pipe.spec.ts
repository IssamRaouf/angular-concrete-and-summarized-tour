import {CurrencyToKMBPipe} from './currreny-to-kmb.pipe';

describe('Pipe CurrencyToKMB', () => {
    let currencyPipe: CurrencyToKMBPipe;

    beforeEach(() => {
        currencyPipe = new CurrencyToKMBPipe();
    });

    it('Should create', () => {
        expect(currencyPipe).toBeTruthy();
    });

    it('Should return the input number 999 without transforme', () => {
        expect(currencyPipe.transform(999)).toEqual(999);
    });
    it('Should convert the value 9000 into suffix K', () => {
        expect(currencyPipe.transform(9000)).toEqual('9.0K');
    });
    it('Should convert the value 9000000 into suffix M', () => {
        expect(currencyPipe.transform(9000000)).toEqual('9.0M');
    });
    it('Should convert the value  9000000000 into suffix B', () => {
        expect(currencyPipe.transform(9000000000)).toEqual('9.0B');
    });
});
