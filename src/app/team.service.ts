import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

  team = [{
    person: "Ben Lesh",
    commits: "651",
    compliment: "He is so cool polar bears freeze around him."
  }, {
    person: "Matt Podwysocki",
    commits: "3",
    compliment: "He created RxJS4, so he's pretty cool."
  }, {
    person: "OJ Kwon",
    commits: "403",
    compliment: "He works so hard some call him a stone."
  }, {
    person: "Andre Staltz",
    commits: "311",
    compliment: "AKA Andre the Magnificent."
  }, {
    person: "Paul Taylor",
    commits: "104",
    compliment: "Literally cant even without Paul."
  }, {
    person: "Luis Gabriel",
    commits: "65",
    compliment: "Without him we would LUIS our minds!"
  }, {
    person: "David Driscoll",
    commits: "36",
    compliment: "No compliment needed here. Just pure yes."
  }]

  constructor() { }

}
