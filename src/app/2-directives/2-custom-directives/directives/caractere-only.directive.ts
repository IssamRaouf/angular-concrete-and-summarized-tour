import {Directive, ElementRef, HostListener} from '@angular/core';

/**
 * Only Caractere Directive
 */
@Directive({
    selector: '[appCaractereOnly]',
})
export class CaractereOnlyDirective {
    /**
     * Autoriser caractere
     */
    private regex: RegExp = new RegExp(/^[A-Za-z]+$/);

    constructor(public el: ElementRef) {
    }

    /**
     * on recevoir l'event pour chaque keydown
     * on va verfier s'il ne pas caractere on'empêche la saisie de caractere
     */
    @HostListener('keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent): void {
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}
