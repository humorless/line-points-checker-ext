// ==UserScript==
// @name        line-points-checker
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0
// @author      -
// @description A userscript that mimic the behavior of line-points-checker extension
// ==/UserScript==

function analysis () {
  console.log("running user script here.")

  var script_elements = Array.from(document.getElementsByTagName("script"));
  var exist_tag = script_elements.map(function(t) {
   return t.innerHTML;
  })
  .filter(function(s){
    if (s.includes("FREECOINS")) {
      return true;
    } else {
      return false;
    }
  })
  var exist_lfc5 = script_elements.map(function(t) {
    return t.getAttribute("src");
  }).filter(function(attr) {
    return (attr === "https://freecoins.line-apps.com/lfc5.js")?true:false;   
  })
  
  console.log("contains ", script_elements.length, " script tags " );
  console.log("Exist tag", exist_tag);
  console.log("Exist lfc5", exist_lfc5);

}
setTimeout(analysis, 10000);
