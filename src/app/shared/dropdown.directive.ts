import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open: Boolean;

  constructor() {
  }

  @HostListener('click') click(eventData: Event) {
    this.open = !this.open;
  }
}
