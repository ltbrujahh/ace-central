import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ace-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit 
{

    connectGroups: ConnectGroup[]

  constructor() { }

  ngOnInit() {

    this.connectGroups = [
        { name: 'Young Mens', description: 'bunch of men test descroiption' },
        { name: 'Young Couples', description: 'lorem ipsum' }
    ]
  }

}

interface ConnectGroup
{
    name: string;
    description: string;
}
