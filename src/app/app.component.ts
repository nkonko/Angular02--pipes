import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
name:string = 'Capitan America';

customPipeValue = "hola hola hola";

array = [1,2,3,4,5,6];

PI: number = Math.PI;

percent: number = 0.234;

salary:number = 1234.5;

date: Date = new Date(1999,0,1);

videoUrl:string = "https://www.youtube.com/embed/xpkcnnaA5IE";

promiseValue = new Promise<string>((resolve) =>
{
  setTimeout(() => {
    resolve('finished');
  },4500);
});

hero = {
  name:'Logan',
  password: 'abc',
  years: 33,
  Address:
  {
    street: 'Rincon',
    numero: 123
  }
  };
}
