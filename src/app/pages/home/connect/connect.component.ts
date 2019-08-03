import { Component, OnInit } from '@angular/core';

import { ConnectGroup } from './connect.model';

@Component({
  selector: 'ace-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit
{
    connectGroups: ConnectGroup[];

  constructor() { }

  ngOnInit() {

    this.connectGroups = [
        { name: 'Young Mens', description: 'bunch of men test description' },
        { name: 'Young Couples', description: 'Voluptate qui elit eu consequat ex anim non laboris cillum nostrud. Proident pariatur ipsum incididunt magna ut ad magna fugiat fugiat. Cillum dolor eu occaecat commodo nostrud.' }
    ]
  }

}
