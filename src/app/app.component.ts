import { Component } from '@angular/core';
import { ShareButtonsConfig } from 'ngx-sharebuttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dynamicReferralCode: string = '123ASDE'; // Replace with your actual referral code
}
