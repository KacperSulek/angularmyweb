import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  inputName: string = '';
  name: string = '';

  updateName() {
    this.name = this.inputName;
  }
}