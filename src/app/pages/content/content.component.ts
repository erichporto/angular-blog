import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { mockData } from '../../data/mock';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  contentTitle:string = "My big card title";

  @Input()
  contentDescription: string = "My big card description";

  @Input()
  contentPhotoCover: string = "https://placehold.co/600x400";

  private route: ActivatedRoute;
  private id: number | null = 0;

  constructor(appRoute: ActivatedRoute){ 
    this.route = appRoute;
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(value => this.id = Number(value.get('id')))
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: number | null) {
    const result = mockData.find(data => data.id === id)

    if(result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.contentPhotoCover = result.photoCover;
    }
  }
}
