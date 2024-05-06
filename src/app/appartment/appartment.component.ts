import { Component, Input, OnInit } from '@angular/core';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {

  var1:string="salut 4 artctic 5"
  @Input()
  var2:string=""

listappart:Apartment[]=[]
  constructor( private apartmenservice:AppartmentService){}

  ngOnInit(): void {
    this.apartmenservice.getappart().subscribe((data)=>{
this.listappart=data
console.log("ma list"+JSON.stringify(this.listappart))
    })
      
  }

}
