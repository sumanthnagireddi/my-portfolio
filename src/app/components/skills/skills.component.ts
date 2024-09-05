import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'], standalone:true
})
export class SkillsComponent {
   skills:any=[
    {
      name:'Javascript',
      logo:'assets/js.png'
    },
    {
      name:'Typescript',
      logo:'assets/ts.png'
    },
    {
      name:'Tailwind css',
      logo:'assets/tailwind.png'
    },
    {
      name:'Angular',
      logo:'assets/angular.png'
    },
    {
      name:'Angular Material',
      logo:'assets/material.png'
    },
    {
      name:'Prime NG',
      logo:'assets/primeng.png'
    },
    {
      name:'React',
      logo:'assets/react.png'
    },
    {
      name:'Node JS',
      logo:'assets/node.png'
    },
    {
      name:'Mongo db',
      logo:'assets/mongo.png'
    },
    {
      name:'Express JS',
      logo:'assets/express.png'
    },
    {
      name:'Git',
      logo:'assets/git.png'
    },
  ]
}
