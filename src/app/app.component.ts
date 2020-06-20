import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  getLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  responseLetters() {
    this.useLetters = !this.useLetters;
  }
  responseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  responeSymbols() {
    this.useSymbols = !this.useSymbols;
  }
  onButtonClick() {
    
    const numbers = '0123456789'
    const letters = 'zxcvbnmlkjhgfdsaqwertyuiop'
    const symbols = '!@#$%^&*()'
    let validChar = '';
    if(this.useLetters) {
      validChar += letters;
    }
    if(this.useNumbers) {
      validChar += numbers;
    }
    if(this.useSymbols) {
      validChar += symbols;
    }
    let actualPassword = '';
    if(this.useLetters==false && this.useNumbers==false && this.useSymbols==false) {
      this.password = "Please choose at least one checkbox.";
      return;
    }
    for(let i=0; i<this.length; i++) {
      
      let index = Math.floor(Math.random() * validChar.length)
      actualPassword += validChar[index];
    } 
    this.password = actualPassword;
  }

 
}
