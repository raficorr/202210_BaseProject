import { Component, OnInit } from '@angular/core';
import { Plants } from './plants';
import { dataPlants } from './dataPlants';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
   plants:Array<Plants> = [];

  constructor() {}
      getPlantsList(): Array<Plants>{
        return dataPlants;
      }
  ngOnInit() {
    this.plants= this.getPlantsList ();
  }

}
