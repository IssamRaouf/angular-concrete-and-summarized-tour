import {Directive, ElementRef, HostListener, HostBinding, Renderer2, Input} from '@angular/core';

@Directive({
    selector: '[appTicketInteractiveElement]'
})

export class TicketInteractiveElementDirective {
    /**
     * Nous avons abordé juste quelques truck sur le style mais on peut ajouter des elements
     * supprimer des elements... pour plus des details voir class Renderer2
     */
    /**
     * manipuler un l'element configurable
     *
     */
    @Input('appTicketInteractiveElement') elementSelect: object = {element: ''};
    /**
     * vous pouvez inspect element et voir toggle class (hovered) on events mouseover & mouseout
     */
    @HostBinding('class.hovered') private isHovered = false;
    @HostBinding('style.border') private isHoverColor: string;


    constructor(public eleRef: ElementRef, public renderer: Renderer2) {
        this.renderer.setStyle(eleRef.nativeElement, 'background', '#9c27b0');
        this.renderer.setStyle(eleRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseover') onHover() {
        const button = this.eleRef.nativeElement.querySelector('button');
        this.renderer.setStyle(button, 'background', 'white');
        this.renderer.setStyle(button, 'color', 'black');

        this.isHovered = true;
        this.isHoverColor = '5px solid red';

        this.renderer.setStyle(this.eleRef.nativeElement.querySelector(this.elementSelect['element']), 'font-size', '40px');
    }

    @HostListener('mouseout') onMouseOut() {
        const button = this.eleRef.nativeElement.querySelector('button');
        this.renderer.setStyle(button, 'background', '#9c27b0');
        this.renderer.setStyle(button, 'color', 'white');
        this.isHovered = false;
        this.isHoverColor = '';

        this.renderer.setStyle(this.eleRef.nativeElement.querySelector(this.elementSelect['element']), 'font-size', '16px');
    }
}
