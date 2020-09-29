import {Component} from '@angular/core';
import {PositionModel} from '../../models/position.model';
import {DescriptionsService} from '../../services/descriptions.service';

@Component({
    selector: 'app-tree-barthe',
    templateUrl: './tree-barthe.component.html',
    styleUrls: ['./tree-barthe.component.css']
})
export class TreeBartheComponent {
    config = [
        {
            id: 2, name: 'Honoré Marius BARTHE', isExpanded: true, classes: ['barthe'],
            children: [
                {
                    id: 4, name: 'Jean Jules BARTHE', isExpanded: true, classes: ['barthe'],
                    children: [
                        {
                            id: 8, name: 'Barthélémy BARTHE', isExpanded: true, classes: ['barthe'],
                            children: [
                                {
                                    id: 16, name: 'Marc BARTHE', isExpanded: true, classes: ['barthe'],
                                    children: [
                                        {
                                            id: 32, name: 'Marc BARTHE', classes: ['barthe']
                                        },
                                        {
                                            id: 33, name: 'Jeanne VIGNOLLES'
                                        }

                                    ]
                                },
                                {
                                    id: 17, name: 'Jeanne BORDES', isExpanded: true, classes: ['bordes'],
                                    children: [
                                        {
                                            id: 34, name: 'Barthelemi BORDES', classes: ['bordes']
                                        },
                                        {
                                            id: 35, name: 'Françoise FITERE'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 9, name: 'Catherine BARTHE', isExpanded: true, classes: ['barthe'],
                            children: [
                                {
                                    id: 18, name: 'Jean BARTHE', isExpanded: true, classes: ['barthe'],
                                    children: [
                                        {
                                            id: 36, name: 'Dominique BARTHE', classes: ['barthe']
                                        },
                                        {
                                            id: 37, name: 'Marianne GARDELLE'
                                        }
                                    ]
                                },
                                {
                                    id: 19, name: 'Guilthérie LABORIE', isExpanded: true, classes: ['laborie'],
                                    children: [
                                        {
                                            id: 38, name: 'Pierre LABORIE', classes: ['laborie']
                                        },
                                        {
                                            id: 39, name: 'Anne ISQUER'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 5, name: 'Françoise LABORIE', isExpanded: true, classes: ['laborie'],
                    children: [
                        {
                            id: 10, name: 'François LABORIE', isExpanded: true, classes: ['laborie'],
                            children: [
                                {
                                    id: 20, name: 'Guilheaume LABORIE', isExpanded: true, classes: ['laborie'],
                                    children: [
                                        {
                                            id: 40, name: 'François LABORIE', classes: ['laborie']
                                        },
                                        {
                                            id: 41, name: 'Banarde DUILOR'
                                        }
                                    ]
                                },
                                {
                                    id: 21, name: 'Jeanne DUPRAT', isExpanded: true, classes: ['duprat'],
                                    children: [
                                        {
                                            id: 42, name: 'Bertrand DUPRAT', classes: ['duprat']
                                        },
                                        {
                                            id: 43, name: 'Guilhommette BERGONGNON'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 11, name: 'Jeanne-Anne DUPUY', isExpanded: true, classes: ['dupuy'],
                            children: [
                                {
                                    id: 22, name: 'Jean Bertrand DUPUY', isExpanded: true, classes: ['dupuy'],
                                    children: [
                                        {
                                            id: 44, name: 'Arnaud DUPUY', classes: ['dupuy'],
                                        },
                                        {
                                            id: 45, name: 'Jacquette MILHAS', classes: ['milhas'],
                                        }
                                    ]
                                },
                                {
                                    id: 23, name: 'Marie-Anne CAZES', isExpanded: true, classes: ['cazes'],
                                    children: [
                                        {
                                            id: 46, name: 'Jean-François CAZES', classes: ['cazes'],
                                        },
                                        {
                                            id: 47, name: 'Marie CAZES', classes: ['cazes'],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3, name: 'Marie CHOURREAU', isExpanded: true, classes: ['chourreau'],
            children: [
                {
                    id: 6, name: 'Paul CHOURREAU', isExpanded: true, classes: ['chourreau'],
                    children: [
                        {
                            id: 12, name: 'Simon CHOURREAU', isExpanded: true, classes: ['chourreau'],
                            children: [
                                {
                                    id: 24, name: 'Pierre CHOURREAU', classes: ['chourreau'],
                                },
                                {
                                    id: 25, name: 'Françoise AVIRAGNET', classes: ['aviragnet'],
                                }
                            ]
                        },
                        {
                            id: 13, name: 'Cathérine DECAUX', isExpanded: true, classes: ['decaux'],
                            children: [
                                {
                                    id: 26, name: 'Paul DECAUX', classes: ['decaux'],
                                },
                                {
                                    id: 27, name: 'Bertrande PAYRAN', classes: ['payran'],
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 7, name: 'Françoise TAPIE', isExpanded: true, classes: ['tapie'],
                    children: [
                        {
                            id: 14, name: 'Mathieu TAPIE', isExpanded: true, classes: ['tapie'],
                            children: [
                                {
                                    id: 28, name: 'Gérard TAPIE', classes: ['tapie'],
                                },
                                {
                                    id: 29, name: 'Marie TAPIE', classes: ['tapie'],
                                }
                            ]
                        },
                        {
                            id: 15, name: 'Marie GERMAIN', isExpanded: true, classes: ['germain'],
                            children: [
                                {
                                    id: 30, name: 'Rohe GERMAIN', isExpanded: true, classes: ['germain'],
                                    children: [
                                        {
                                            id: 60, name: 'Jean GERMAIN', classes: ['germain']
                                        },
                                        {
                                            id: 61, name: 'Jeanne BOHE'
                                        }
                                    ]
                                },
                                {
                                    id: 31, name: 'Jeanne MAUVAISIN', isExpanded: true, classes: ['mauvesin'],
                                    children: [
                                        {
                                            id: 62, name: 'Jean MAUVAISIN', classes: ['mauvesin']
                                        },
                                        {
                                            id: 63, name: 'Maria Jeanne PICHALOUP'
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
        for (let i = 0; i < this.descriptions$.descriptionsBarthe.length; ++i) {
            if (val === this.descriptions$.descriptionsBarthe[i].getId()) {
                this.description = this.descriptions$.descriptionsBarthe[i].getDesc();
            }
        }
    }

    fillCoords() {
        this.coords.push(new PositionModel(43.068333, 0.761389, 'Lespiteau'));
        this.coords.push(new PositionModel(43.129167, 0.835556, 'Saint Médard'));
        this.coords.push(new PositionModel(43.274722, 0.779722, 'Castéra-Vignoles'));
        this.coords.push(new PositionModel(43.068056, 0.717778, 'Aspret'));
        this.coords.push(new PositionModel(43.301944, 0.772778, 'Montbernard'));
        this.coords.push(new PositionModel(43.050556, 0.723056, 'Régades'));
        this.coords.push(new PositionModel(43.086944, 0.8125, 'Pointis-Inard'));
    }
}
