import { Component } from '@angular/core';
import { ShareButtonsConfig } from 'ngx-sharebuttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dynamicReferralCode: string = '123ASDE'; // Replace with your actual referral code

  share() {
    const shareData = {
      title: "Title",
      text: "Description",
      url: `https://example.com/${this.dynamicReferralCode}`,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => {
          console.info("shared successfully");
        })
        .catch((error) => {
          console.warn(`Error: ${error}`);
        });
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  }
}
