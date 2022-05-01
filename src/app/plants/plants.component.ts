import { Component, OnInit } from '@angular/core';
import { Plants } from './plants';
import { dataPlants } from './dataPlants';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants:Array<Plants> = []
  constructor(private plantService: PlantService ) { }


  getPlants(){
    this.plantService.getPlants().subscribe(plants =>{
      this.plants = plants;
    });
  }
  ngOnInit() {
    this.getPlants();
  }
}

