import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-referral-code-button',
  templateUrl: './referral-code-button.component.html',
  styleUrls: ['./referral-code-button.component.scss']
})
export class ReferralCodeButtonComponent {
  @Input() referralCode?: string;

  copySuccess = false;

  copyReferralCode() {
    const paragraph = document.getElementById('referralCodeInput');

      // Create a text area element and set its value
      const textArea = document.createElement('textarea');
      textArea.value = paragraph!.textContent || '';
  
      // Append it to the document body
      document.body.appendChild(textArea);
  
      // Select and copy the text
      textArea.select();
      document.execCommand('copy');
  
      // Remove the text area
      document.body.removeChild(textArea);

      // Simulate copying to clipboard (you can add your copy logic here)
      // For this example, we'll just set a timeout to revert the icon
      this.copySuccess = true;

      setTimeout(() => {
        this.copySuccess = false;
      }, 1000); // Revert back to the copy icon after 3 seconds

  }
}
