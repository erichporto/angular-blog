import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mockData } from '../../data/mock';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  
  @Input()
  id:number = 0;

  @Input()
  bigCardTitle:string = "My big card title";

  @Input()
  bigCardDescription: string = "My big card description";

  @Input()
  bigPhotoCover: string = "https://placehold.co/600x400";

  constructor(){ }

  ngOnInit(): void{
    this.setValuesToComponent(this.id)
  }
  
  setValuesToComponent(id: number) {
    const result = mockData.find(data => data.id === id)

    if(result) {
      this.bigCardTitle = result.title;
      this.bigCardDescription = result.description;
      this.bigPhotoCover = result.photoCover;
    }
  }

}
