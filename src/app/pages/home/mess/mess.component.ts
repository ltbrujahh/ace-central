import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ace-mess',
    templateUrl: './mess.component.html',
    styleUrls: ['./mess.component.scss'],
})
export class MessComponent implements OnInit
{
    messages: Message[];

    constructor() { }

    ngOnInit()
    {
        // TODO: we need to replace this with a provider service to abstract it out from this component in preparation for an API call to a db
        this.messages = [
            {
                speakerName: 'Ps William Law',
                title: 'The sword of all Truths',
                synopsis: `Playing WoW all the time made him see the light`,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa dignissimos eaque
                dolor expedita, cumque architecto ex obcaecati omnis quae delectus consequatur. Laborum
                officiis voluptas eaque neque voluptatibus nihil perferendis!`
            },
            {
                speakerName: 'Ps Christopher Lee',
                title: 'The Armour of God',
                synopsis: `Playing WoW all the time made him see the light`,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa dignissimos eaque
                dolor expedita, cumque architecto ex obcaecati omnis quae delectus consequatur. Laborum
                officiis voluptas eaque neque voluptatibus nihil perferendis!`
            },
            {
                speakerName: 'Ps Jhon Halim',
                title: 'New Genesis',
                synopsis: `Playing WoW all the time made him see the light`,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa dignissimos eaque
                dolor expedita, cumque architecto ex obcaecati omnis quae delectus consequatur. Laborum
                officiis voluptas eaque neque voluptatibus nihil perferendis!`
            }
        ];
    }

}

interface Message
{
    speakerName: string;
    title: string;
    synopsis: string;
    content: string;
}
