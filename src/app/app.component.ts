import { Component } from '@angular/core';
// import * as deflate from 'deflate-js';
import * as pako from 'pako';
// declare var escape;
// declare var unescape;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText:string = JSON.stringify([{"id":616904,"host":"tigerbite.co.uk","name":"Buy Any 2x Pizzas and Get the 3rd Free"}]);
  outputText:string;

  // compressIt(): void{
  //   let arr = Array.prototype.map.call(this.inputText, function (char) {
  //     return char.charCodeAt(0);
  //   });
  //   console.log(arr);
  //   let arrr = new Uint8Array(arr)
  //   this.outputText = deflate.deflate(arr);
  //   // this.outputText = String.fromCharCode.apply(String, deflate.deflate(arr));
    
  //   // this.outputText = '';
  //   // deflate.deflate(arr).forEach(element => {
  //   //   this.outputText += String.fromCharCode(element);
  //   // });
  // }

  // decompressIt(): void{
  //   // let arr = Array.prototype.map.call(this.inputText, function (char) {
  //   //   return char.charCodeAt(0);
  //   // });
  //   console.log("decompressing");
  //   console.log(deflate.inflate(this.inputText));
  //   this.outputText = String.fromCharCode.apply(String, deflate.inflate(this.inputText));
  // }

  compressIt(): void{
   var charData = this.inputText.split('').map(function(x){return x.charCodeAt(0);});
   var binData = new Uint8Array(charData);
   var deflatePayload = pako.deflate(binData, { to: 'string' });
   deflatePayload = btoa(deflatePayload);
    // deflatePayload = decodeURIComponent(deflatePayload);
   this.outputText = deflatePayload;
  }

  decompressIt(): void {
    var strData = atob(this.inputText);
  // var strData = encodeURIComponent(this.inputText);
   var charData = strData.split('').map(function(x){return x.charCodeAt(0);});
   var binData = new Uint8Array(charData);
   try {
       var result = pako.inflate(binData);
       var strResult = String.fromCharCode.apply(null, new Uint8Array(result));
       this.outputText =  strResult;
   } catch (err) {
       console.log(err);
       alert(err);
   }
  }

}
