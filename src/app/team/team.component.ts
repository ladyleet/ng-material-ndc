import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { MdDialog } from '@angular/material';
import { ContributeDialogComponent } from '../contribute-dialog/contribute-dialog.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public teamData: TeamService, public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(ContributeDialogComponent);
  }
  ngOnInit() {
  }

}
