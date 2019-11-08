import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  public searchInput='Text to search';

  constructor() { }

  ngOnInit() {
  }
  
  search(){
    console.log("searched " + this.searchInput);
  }

}
