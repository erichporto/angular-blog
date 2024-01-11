import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mockData } from '../../data/mock';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
  id:number = 0;

  @Input()
  smallCardTitle:string = "My small card title 1";

  @Input()
  smallPhotoCover: string = "https://placehold.co/150x150";

  constructor(){ }

  ngOnInit(): void{
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: number) {
    const result = mockData.find(data => data.id === id)

    if(result) {
      this.smallCardTitle = result.title;
      this.smallPhotoCover = result.photoMini;
    }
  }
}
