import {
  Component,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {
  @Output() icon = new EventEmitter<string>();
  sliderItems: { name: string; icon: string }[] = [
    { name: 'Bath', icon: 'bath' },
    { name: 'Cocktail', icon: 'cocktail' },
    { name: 'Bed', icon: 'bed' },
    { name: 'Train', icon: 'dumbbell' },
    { name: 'Work', icon: 'shopping-bag' },
  ];
  item = {};

  constructor() {}
  onChecked(value: string): void {
    this.icon.emit(value);
  }
}
