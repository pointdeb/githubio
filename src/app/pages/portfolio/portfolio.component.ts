import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.user = {
        firstName: 'Stephano Romain',
        lastName: 'MOHAMADY',
        picture: 'assets/img/user.JPG',
        slogan: 'Just share and get from each other.',
        contacts: [
          { link: 'https://github.com/pointdeb', icon: 'fa fa-github', title: 'What I have done ...' },
          { link: 'https://www.facebook.com/developer.mg', icon: 'fa fa-facebook-square', title: 'facebook' },
          { link: 'skype:stephano.romain?chat', icon: 'fa fa-skype', title: 'Skype' },
          { link: 'https://www.linkedin.com/in/stephano-romain-m-2672a3135/', icon: 'fa fa-linkedin', title: 'Linkedin' }
        ]
      };
    }, 1000);
  }

}
