import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-informatica',
  standalone: true,
  imports: [RouterOutlet,MatMenuModule,RouterLink],
  templateUrl: './informatica.component.html',
  styleUrl: './informatica.component.css'
})
export class InformaticaComponent {

}
