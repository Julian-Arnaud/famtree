import {Component} from '@angular/core';
import {PositionModel} from '../../models/position.model';
import {DescriptionsService} from '../../services/descriptions.service';

@Component({
    selector: 'app-tree-core',
    templateUrl: './tree-core.component.html',
    styleUrls: ['./tree-core.component.css']
})
export class TreeCoreComponent {
    config = [
        {
            id: 1, name: 'Julian ARNAUD', isExpanded: true, classes: ['arnaud'],
            children: [
                {
                    id: 2, name: 'Michel ARNAUD', isExpanded: true, classes: ['arnaud'],
                    children: [
                        {
                            id: 4, name: 'Emile ARNAUD', isExpanded: false, classes: ['arnaud']
                        },
                        {
                            id: 5, name: 'Juliette BARTHE', isExpanded: false
                        }
                    ]
                },
                {
                    id: 3, name: 'Annie MAILLOT', isExpanded: true, classes: ['maillot'],
                    children: [
                        {
                            id: 6, name: 'Pierre MAILLOT', isExpanded: false, classes: ['maillot']
                        },
                        {
                            id: 7, name: 'Marcelle MAINGUY', isExpanded: false
                        }
                    ]
                }
            ]
        }
    ];
    options: {
        displayField: 'nodeName',
        isExpandedField: 'expanded',
        idField: 'uuid',
        hasChildrenField: 'nodes'
    };
    description = '';
    coords: PositionModel[];

    constructor(private descriptions$: DescriptionsService) {
        this.coords = [];
        this.fillCoords();
    }

    populate(val: number) {
        for (let i = 0; i < this.descriptions$.descriptionsCore.length; ++i) {
            if (val === this.descriptions$.descriptionsCore[i].getId()) {
                this.description = this.descriptions$.descriptionsCore[i].getDesc();
            }
        }
    }

    fillCoords() {
        this.coords.push(new PositionModel(33.5724108, -7.6570331));
        this.coords.push(new PositionModel(35.7068119, -0.7106267));
        this.coords.push(new PositionModel(43.4542839, 1.2420698));
        this.coords.push(new PositionModel(43.0650278, 0.7518692));
        this.coords.push(new PositionModel(42.8474076, 1.7890215));
        this.coords.push(new PositionModel(47.1858878, -1.7001131));
        this.coords.push(new PositionModel(45.9949653, 0.863831));
    }
}
