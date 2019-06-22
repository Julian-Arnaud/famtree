import {Component} from '@angular/core';
import {DescriptionsService} from '../../services/descriptions.service';
import {PositionModel} from '../../models/position.model';

@Component({
    selector: 'app-tree-maillot',
    templateUrl: './tree-maillot.component.html',
    styleUrls: ['./tree-maillot.component.css']
})
export class TreeMaillotComponent {
    config = [
        {
            id: 2, name: 'Michel MAILLOT', isExpanded: true, classes: ['maillot'],
            children: [
                {
                    id: 4, name: 'Louis MAILLOT', isExpanded: true, classes: ['maillot'],
                    children: [
                        {
                            id: 8, name: 'François MAILLOT', isExpanded: true, classes: ['maillot'],
                            children: [
                                {
                                    id: 16, name: 'Etienne MAILLOT', isExpanded: true, classes: ['maillot'],
                                    children: [
                                        {
                                            id: 32, name: 'Jean MAILLOT', classes: ['maillot'],
                                        },
                                        {
                                            id: 33, name: 'Marie DEGUERCY'
                                        }
                                    ]
                                },
                                {
                                    id: 17, name: 'Jeanne NADAUD', isExpanded: true, classes: ['nadaud'],
                                    children: [
                                        {
                                            id: 34, name: 'François NADAUD', classes: ['nadaud'],
                                        },
                                        {
                                            id: 35, name: 'Marie Anne LEFORT'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 9, name: 'Marie CHATAIGNIER', isExpanded: true, classes: ['chataignier'],
                            children: [
                                {
                                    id: 18, name: 'Jean CHATAIGNIER', isExpanded: true, classes: ['chataignier'],
                                    children: [
                                        {
                                            id: 36, name: 'Emery CHATAIGNIER', classes: ['chataignier'],
                                        },
                                        {
                                            id: 37, name: 'Catherine LACROIX'
                                        }
                                    ]
                                },
                                {
                                    id: 19, name: 'Françoise DUMONT', isExpanded: true, classes: ['dumont'],
                                    children: [
                                        {
                                            id: 38, name: 'Jean DUMONT', classes: ['dumont'],
                                        },
                                        {
                                            id: 39, name: 'Laurence DE LA PORCHERIE'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 5, name: 'Marguerite COMPAIN', isExpanded: true, classes: ['compain'],
                    children: [
                        {
                            id: 10, name: 'Jean COMPAIN', isExpanded: true, classes: ['compain'],
                            children: [
                                {
                                    id: 20, name: 'Louis COMPAIN', isExpanded: true, classes: ['compain'],
                                    children: [
                                        {
                                            id: 40, name: 'Jean COMPAIN', isExpanded: true, classes: ['compain'],
                                            children: [
                                                {
                                                    id: 80, name: 'Martial COMPAIN', isExpanded: true, classes: ['compain'],
                                                    children: [
                                                        {
                                                            id: 160, name: 'Clément COMPAIN', classes: ['compain'],
                                                        },
                                                        {
                                                            id: 161, name: 'Martialle JORIAUX'
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 81, name: 'Marie BARRIER'
                                                }
                                            ]
                                        },
                                        {
                                            id: 41, name: 'Marie MORICHON', isExpanded: true, classes: ['morichon'],
                                            children: [
                                                {
                                                    id: 82, name: 'Jean MORICHON', classes: ['morichon'],
                                                },
                                                {
                                                    id: 83, name: 'Jeanne DU MASDELAGE'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 21, name: 'Jeanne ROULON'
                                }
                            ]
                        },
                        {
                            id: 11, name: 'Marie LAVOTTE', isExpanded: true, classes: ['lavotte'],
                            children: [
                                {
                                    id: 22, name: 'François LAVOTTE', classes: ['lavotte'],
                                },
                                {
                                    id: 23, name: 'Marie ALLEGROS'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3, name: 'Lucienne Renée Germain MARTIN', isExpanded: true, classes: ['martin'],
            children: [
                {
                    id: 6, name: 'Jean MARTIN', isExpanded: true, classes: ['martin'],
                    children: [
                        {
                            id: 12, name: 'Jean MARTIN', classes: ['martin'],
                        },
                        {
                            id: 13, name: 'Rose RENET'
                        }
                    ]
                },
                {
                    id: 7, name: 'Berthe MAFFRE', isExpanded: true, classes: ['maffre'],
                    children: [
                        {
                            id: 14, name: 'Jacques MAFFRE', isExpanded: true, classes: ['maffre'],
                            children: [
                                {
                                    id: 28, name: 'Jacques MAFFRE', classes: ['maffre'],
                                },
                                {
                                    id: 29, name: 'Marie BRAULT'
                                }
                            ]
                        },
                        {
                            id: 15, name: 'Françoise TOUCHE'
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
        for (let i = 0; i < this.descriptions$.descriptionsMaillot.length; ++i) {
            if (val === this.descriptions$.descriptionsMaillot[i].getId()) {
                this.description = this.descriptions$.descriptionsMaillot[i].getDesc();
            }
        }
    }

    fillCoords() {
        this.coords.push(new PositionModel(45.983611, 0.8975));
        this.coords.push(new PositionModel(45.678611, 0.221111));
        this.coords.push(new PositionModel(46.003611, 0.850833));
        this.coords.push(new PositionModel(45.556111, 0.043611));
        this.coords.push(new PositionModel(46.355833, 0.108889));
        this.coords.push(new PositionModel(45.887222, 0.901111));
        this.coords.push(new PositionModel(46.396667, 0.054167));
        this.coords.push(new PositionModel(45.954167, 0.985));
        this.coords.push(new PositionModel(46.011389, 0.781389));
        this.coords.push(new PositionModel(46.033333, 0.722222));

    }
}
