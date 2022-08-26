import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [
    {id: 3, name: "Mark", nationality: "English"},
    {id: 7, name: "Derek", nationality: "Dutch"},
    {id: 4, name: "Andre", nationality: "French"},
    {id: 64, name: "Carlos", nationality: "Brazilian"},
    {id: 11, name: "Pradeep", nationality: "Indian"},
    {id: 31, name: "Liu", nationality: "Japanese"},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
