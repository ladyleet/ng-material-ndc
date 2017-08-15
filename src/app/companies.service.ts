import { Injectable } from '@angular/core';

@Injectable()
export class CompaniesService {

  companies = [
    "Google", 
    "Facebook",   
    "Netflix",
    "Slack",
    "RedHat"
  ];

  constructor() { }

}
