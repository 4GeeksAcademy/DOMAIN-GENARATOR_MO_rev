/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".us", ".com", ".net", ".io"];

for (let mix of pronoun) {
  for (let value of adj) {
    for (let num of noun) {
      for (let digit of extension) {
        console.log(mix + value + num + digit);
      }
    }
  }
}
