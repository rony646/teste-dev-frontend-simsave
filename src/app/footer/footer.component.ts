import { Component, OnInit } from '@angular/core';

import { faTwitter, faFacebook, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter
  faFacebook = faFacebook
  faInstagram = faInstagram
  faYoutube = faYoutube
  faLikedin = faLinkedinIn
  faMail = faEnvelope
  

  constructor() { }

  ngOnInit(): void {
  }

}
