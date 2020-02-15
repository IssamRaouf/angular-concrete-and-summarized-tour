import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appHoverButton]'
})
export class HoverButtonDirective {

    @HostBinding('style.background-color') backgroundColor: string;

    @HostListener('mouseover') onHover() {
        this.backgroundColor = 'red';

    }

    @HostListener('mouseout') onLeave() {
        this.backgroundColor = 'inherit';
    }

}
