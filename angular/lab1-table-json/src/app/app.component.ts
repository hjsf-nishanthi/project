import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Details';

  user = {
    userId: 1,
    usesrName: "Nisha",
    enrolled: "Java",
    price: 2000,
  };

  users = [
    {
      userId: 1,
      userName: "Subha",
      enrolled: "Spring",
      price: 3000,
    },
    {
      userId: 2,
      userName: "Nisha",
      enrolled: "Angular",
      price: 5000,
    },
  ];
}
