import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css']
})
export class HowToUseComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  itemNumber = 1;
  maxNumber = 7

  nextItem() {
    console.log(Math.min(this.maxNumber,this.itemNumber+1));
    this.itemNumber = Math.min(this.maxNumber,this.itemNumber+1);
    this.changePage()
    
  }

  prevItem() {
    console.log(Math.max(1,this.itemNumber-1));
    this.itemNumber = Math.max(1,this.itemNumber-1);
    this.changePage()
  }

  changeItem(num: number) {
    this.itemNumber = num
  }


  changePage() {

    const element = this.el.nativeElement.querySelector(`.button-${this.itemNumber}`);
    this.renderer.listen(element, 'click', () => {});
    element.click(); // Simulate the click event
    
  }

}
