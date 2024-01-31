import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { GradosuperiorService } from './services/gradosuperior.service';
import { Ciclos, Grado } from './ciclos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'tarea_instituto';

  ciclos: Ciclos[] = [];



  constructor(private gradosuperiorservice: GradosuperiorService) {
    this.gradosuperiorservice.retornarJson()
      .subscribe((ciclos: Ciclos[]) => {
        this.ciclos = ciclos;

      });
      
    }
    
    test(){
      console.log(this.ciclos.values());
    }


}
