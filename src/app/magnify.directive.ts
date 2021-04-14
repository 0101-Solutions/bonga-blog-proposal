import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {
  public defaultFontSize: any;
  private counter = 0;

  constructor(
    private elemntRef: ElementRef
  ) {
    // Here we use dependency injection. By injecting elementRef in to our module to manipulate
    this.defaultFontSize = window.getComputedStyle(elemntRef.nativeElement).fontSize;

    this.defaultFontSize = this.defaultFontSize.substring(0, this.defaultFontSize.length - 2)

    this.elemntRef.nativeElement.style.userSelect = "none"
    this.elemntRef.nativeElement.style.cursor = "zoom-in"

    this.defaultFontSize = Number(this.defaultFontSize)
    
  }

  // Creating the magnify fn.
  private magnify(elementRef: ElementRef) {
    let fontSizeArray = [
      this.defaultFontSize,
      this.defaultFontSize + 3,
      this.defaultFontSize + 6,
      this.defaultFontSize + 9,
    ]

    let newFontSize = fontSizeArray[++this.counter % fontSizeArray.length]

    elementRef.nativeElement.style.fontSize = String(newFontSize + "px")
  }

  // // We create another event listener to prevent users from accessing the text and changing the cursor pointer.
  // @HostListener('mouseenter') onCMouseEnter() {
  //   // Unable to highlight text in the blog post when zooming in.
  //   this.elemntRef.nativeElement.style.userSelect = "none"
  //   this.elemntRef.nativeElement.style.cursor = "zoom-in"
  // }

  // Here we add the HostLiner NgModule to listen for click events and return our magnify fn

  @HostListener('click') onClick() {
    this.magnify(this.elemntRef)
  }

}
