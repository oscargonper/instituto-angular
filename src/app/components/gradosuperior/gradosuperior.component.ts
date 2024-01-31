import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gradosuperior',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './gradosuperior.component.html',
  styleUrl: './gradosuperior.component.css'
})

export class GradosuperiorComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
