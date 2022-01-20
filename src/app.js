/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [".com", ".net"];
  var domainNames = [];
  for (var pindex = 0; pindex < pronoun.length; pindex++) {
    for (var aindex = 0; aindex < adj.length; aindex++) {
      for (var nindex = 0; nindex < noun.length; nindex++) {
        for (var dindex = 0; dindex < domains.length; dindex++) {
          domainNames.push(
            pronoun[pindex] + adj[aindex] + noun[nindex] + domains[dindex]
          );
        }
      }
    }
  }
  console.log(domainNames);

  let list = document.querySelector(".myList");

  domainNames.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
};
