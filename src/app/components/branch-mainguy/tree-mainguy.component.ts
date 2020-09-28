import {Component} from '@angular/core';
import {OptionalInformationModel} from '../../models/optional-information.model';
import {DescriptionsService} from '../../services/descriptions.service';
import {PositionModel} from '../../models/position.model';

@Component({
    selector: 'app-tree-mainguy',
    templateUrl: './tree-mainguy.component.html',
    styleUrls: ['./tree-mainguy.component.css']
})
export class TreeMainguyComponent {
    config = [
        {
            id: 2, name: 'Amédé Marcel Alphonse MAINGUY', isExpanded: true, classes: ['mainguy'],
            children: [
                {
                    id: 4, name: 'Joseph Bonaventure MAINGUY', isExpanded: true, classes: ['mainguy'],
                    children: [
                        {
                            id: 8, name: 'Bonaventure MAINGUY', isExpanded: true, classes: ['mainguy'],
                            children: [
                                {
                                    id: 16, name: 'Pas de père' },
                                {
                                    id: 17, name: 'Roze MAINGUY', classes: ['mainguy']
                                }
                            ]
                        },
                        {
                            id: 9, name: 'Magdeleine LAMY', isExpanded: true, classes: ['lamy'],
                            children: [
                                {
                                    id: 18, name: 'Sébastien LAMI', isExpanded: true, classes: ['lamy'],
                                    children: [
                                        {
                                            id: 36, name: 'Jacques LAMY', classes: ['lamy'],
                                        },
                                        {
                                            id: 37, name: 'Sébastienne CORNERAIS'
                                        }
                                    ]
                                },
                                {
                                    id: 19, name: 'Marie LALEAU', isExpanded: true, classes: ['laleau'],
                                    children: [
                                        {
                                            id: 38, name: 'Julien LALEAU', classes: ['laleau'],
                                        },
                                        {
                                            id: 39, name: 'Marie HAINAUD'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 5, name: 'Jeanne ROUSSELY', isExpanded: true, classes: ['roussely'],
                    children: [
                        {
                            id: 10, name: 'Pierre ROUSSELY', isExpanded: true, classes: ['roussely'],
                            children: [
                                {
                                    id: 20, name: 'Pierre ROUSSELY', classes: ['roussely']
                                },
                                {
                                    id: 21, name: 'Charlotte BOISSERIE'
                                }
                            ]
                        },
                        {
                            id: 11, name: 'Jeanne CHANSAR', isExpanded: true, classes: ['chansar'],
                            children: [
                                {
                                    id: 22, name: 'Jean CHANSAR', classes: ['chansar']
                                },
                                {
                                    id: 23, name: 'Jeanne TEILLET'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3, name: 'Emilienne Eugénie LEGAL', isExpanded: true, classes: ['legal'],
            children: [
                {
                    id: 6, name: 'Olivier LEGAL', isExpanded: true, classes: ['legal'],
                    children: [
                        {
                            id: 12, name: 'Mathurin LEGAL', isExpanded: true, classes: ['legal'],
                            children: [
                                {
                                    id: 24, name: 'Mathurin LEGAL', classes: ['legal'],
                                },
                                {
                                    id: 25, name: 'Mathurinne GUILLO'
                                }
                            ]
                        },
                        {
                            id: 13, name: 'Anne COBIGO'
                        }
                    ]
                },
                {
                    id: 7, name: 'Françoise GUIHAL', isExpanded: true, classes: ['guihal'],
                    children: [
                        {
                            id: 14, name: 'Julien GUIHAL', isExpanded: true, classes: ['guihal'],
                            children: [
                                {
                                    id: 28, name: 'Jean GUIHAL', isExpanded: true, classes: ['guihal'],
                                    children: [
                                        {
                                            id: 56, name: 'Pierre GUIHAL',classes: ['guihal']
                                        },
                                        {
                                            id: 57, name: 'Françoise BICHON'
                                        }
                                    ]
                                },
                                {
                                    id: 29, name: 'Anne CHARPENTIER', isExpanded: true, classes: ['charpentier'],
                                    children: [
                                        {
                                            id: 58, name: 'Guillaume CHARPENTIER', classes: ['charpentier']
                                        },
                                        {
                                            id: 59, name: 'Françoise MICHEL'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 15, name: 'Marguerite GALAIS',isExpanded: true, classes: ['galais'],
                            children: [
                                {
                                    id: 30, name: 'François GALLAIS', isExpanded: true, classes: ['galais'],
                                    children: [
                                        {
                                            id: 60, name: 'Jacques GALLAIS',classes: ['galais']
                                        },
                                        {
                                            id: 61, name: 'Françoise POIREAU'
                                        }
                                    ]
                                },
                                {
                                    id: 31, name: 'Marguerite ORAIN', isExpanded: true,classes: ['orain'],
                                    children: [
                                        {
                                            id: 62, name: 'Jean ORAIN',classes: ['orain']
                                        },
                                        {
                                            id: 63, name: 'Perrine JOYAUX'
                                        }
                                    ]
                                }
                            ]
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
        for (let i = 0; i < this.descriptions$.descriptionsMainguy.length; ++i) {
            if (val === this.descriptions$.descriptionsMainguy[i].getId()) {
                this.description = this.descriptions$.descriptionsMainguy[i].getDesc();
            }
        }
    }

    fillCoords() {
        this.coords.push(new PositionModel(47.218371, -1.553621));
        this.coords.push(new PositionModel(47.194722, -1.723056));
        this.coords.push(new PositionModel(47.183333, -1.683333));
        this.coords.push(new PositionModel(47.1175, -1.583889));
        this.coords.push(new PositionModel(45.820278, -0.569722));
        this.coords.push(new PositionModel(47.168889, -1.469722));
        this.coords.push(new PositionModel(44.775556, 0.817222));
        this.coords.push(new PositionModel(47.963611, -2.711389));
        this.coords.push(new PositionModel(47.935556, -2.675556));
    }
}
