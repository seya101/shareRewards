import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShareButtonsModule, } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferralCodeButtonComponent } from './referral-code-button/referral-code-button.component';


const icons = [
  // ... other icons
  faFacebookSquare
];

const shareProp = {
  facebook: {
    icon: ['fab', 'facebook-square']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ReferralCodeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtonsModule.withConfig({
      debug: true,
      prop: shareProp
    }),
    ShareIconsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
