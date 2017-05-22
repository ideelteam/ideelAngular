import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../shared/user-interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userInfo: UserInterface;  

  constructor() { }

  ngOnInit() {
  }

}
