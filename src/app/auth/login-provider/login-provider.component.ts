import { Component, Input, OnInit } from '@angular/core';

interface LoginProvider {
  id: string;
  bgColor: string;
  image: string;
  name: string;
  cssClass: string;
}

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.scss']
})
export class LoginProviderComponent implements OnInit {
  @Input() provider?: LoginProvider;

  constructor() { }

  ngOnInit(): void {
  }

}
