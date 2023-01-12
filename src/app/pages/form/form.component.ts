import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  public contactMessage: any = {
    name: '',
    email: '',
    phone: null,
    subject: '',
    message: ''
  }

  public isFilled = false;
  public isShow = false

  public checkIsFilled() {
    if (
    this.contactMessage.name !== '' &&
    this.contactMessage.email !== '' &&
    this.contactMessage.phone !== null &&
    this.contactMessage.subject !== '' &&
    this.contactMessage.name !== ''
    ) {
      this.isFilled = true;
      this.isShow = true;
    } else {
      this.isFilled = false;
      this.isShow = true;
    }
    console.log(this.isFilled, this.isShow);
        
  }

  public hideMessage() {
    this.isShow = false
    console.log(this.isShow);
    
  }

}
