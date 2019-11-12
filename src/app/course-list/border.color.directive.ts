import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[appBorderColorByDate]'
})
export class BorderColorDirective {
    @Input('appBorderColorByDate') borderColorByDate: Date;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        let current = new Date();
        if (this.borderColorByDate < current
            // && diff<14 days
            ) {
            this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
        } else {
            if (this.borderColorByDate > current) {
                this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
            }
        }
        
    }
}