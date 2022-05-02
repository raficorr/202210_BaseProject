import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../plant.service';
import { Plants } from '../../plants';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Array<Plants> = [];

  constructor(private planService:PlantService) { }

  ngOnInit() {
    this.getplants();
  }


  getplants():void {
    this.planService.getPlants().subscribe((plants)=> {
      this.plants = plants;
    });
  }


}
