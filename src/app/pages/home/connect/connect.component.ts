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
        {
          name: 'Young Mens',
          description: 'bunch of men test description',
        },

        {
          name: 'Young Womens',
          description: 'Voluptate qui elit eu consequat',
        },

        {
          name: 'Young Couples',
          description: 'Voluptate qui elit eu consequat',
        },

        {
          name: 'Young Families',
          description: 'Voluptate qui elit eu consequat',
        },

        {
          name: 'Board Games',
          description: 'Voluptate qui elit eu consequat',
        },

        {
          name: 'Sports',
          description: 'Voluptate qui elit eu consequat',
        },
    ];
  }
}
