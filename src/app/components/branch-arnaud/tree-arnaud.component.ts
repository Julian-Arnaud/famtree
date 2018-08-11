import {Component} from '@angular/core';
import {PositionModel} from '../../models/position.model';
import {DescriptionsService} from '../../services/descriptions.service';

@Component({
    selector: 'app-tree-arnaud',
    templateUrl: './tree-arnaud.component.html',
    styleUrls: ['./tree-arnaud.component.css']
})
export class TreeArnaudComponent {
    config = [
        {
            id: 2, name: 'Albert ARNAUD', isExpanded: true, classes: ['arnaud'],
            children: [
                {
                    id: 4, name: 'Marc ARNAUD', isExpanded: true, classes: ['arnaud'],
                    children: [
                        {
                            id: 8, name: 'Jean ARNAUD', isExpanded: true, classes: ['arnaud'],
                            children: [
                                {
                                    id: 16, name: 'Marc ARNAUD', isExpanded: true, classes: ['arnaud'],
                                    children: [
                                        {
                                            id: 32, name: 'Jean ARNAUD', classes: ['arnaud'],
                                        },
                                        {
                                            id: 33, name: 'Marie JOFRE'
                                        }
                                    ]
                                },
                                {
                                    id: 17, name: 'Marie SERGOLE', isExpanded: true, classes: ['sergole'],
                                    children: [
                                        {
                                            id: 34, name: 'Jean SERGOLE', classes: ['sergole'],
                                        },
                                        {
                                            id: 35, name: 'Magdeleine FOURCASSA'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 9, name: 'Jeanne ARNAUD', isExpanded: true, classes: ['arnaud'],
                            children: [
                                {
                                    id: 18, name: 'Ambroise ARNAUD', isExpanded: true, classes: ['arnaud'],
                                    children: [
                                        {
                                            id: 36, name: 'Antoine ARNAUD', classes: ['arnaud'],
                                        },
                                        {
                                            id: 37, name: 'Catherine LABEUR', classes: ['labeur'],
                                        }
                                    ]
                                },
                                {
                                    id: 19, name: 'Marie PECHEAU', isExpanded: true, classes: ['pecheau'],
                                    children: [
                                        {
                                            id: 38, name: 'Guilhaume PECHEU', classes: ['pecheau'],
                                        },
                                        {
                                            id: 39, name: 'Marie MINJOT', classes: ['minjot'],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 5, name: 'Victoire AUTHIE', isExpanded: true, classes: ['authie'],
                    children: [
                        {
                            id: 10, name: 'Joseph AUTHIE', isExpanded: true, classes: ['authie'],
                            children: [
                                {
                                    id: 20, name: 'Jean AUTHIE', isExpanded: true, classes: ['authie'],
                                    children: [
                                        {
                                            id: 40, name: 'François AUTHIE', classes: ['authie'],
                                        },
                                        {
                                            id: 41, name: 'Catherine MOUMIE'
                                        }
                                    ]
                                },
                                {
                                    id: 21, name: 'Magdelaine BARBAT', isExpanded: true, classes: ['barbat'],
                                    children: [
                                        {
                                            id: 42, name: 'Thomas BARBAT', classes: ['barbat'],
                                        },
                                        {
                                            id: 43, name: 'Antoinette ARNAUD', classes: ['arnaud'],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 11, name: 'Marie SICRE', isExpanded: true, classes: ['sicre'],
                            children: [
                                {
                                    id: 22, name: 'Raimond SICRE', isExpanded: true, classes: ['sicre'],
                                    children: [
                                        {
                                            id: 44, name: 'Thomas SICRE', classes: ['sicre'],
                                        },
                                        {
                                            id: 45, name: 'Jeanne ROUZAUD'
                                        }
                                    ]
                                },
                                {
                                    id: 23, name: 'Angélique VIDAL', isExpanded: true, classes: ['vidal'],
                                    children: [
                                        {
                                            id: 46, name: 'Dominique VIDAL', classes: ['vidal'],
                                        },
                                        {
                                            id: 47, name: 'Marie FAUCHE'
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
            id: 3, name: 'Laure Caroline SALLES', isExpanded: true, classes: ['salles'],
            children: [
                {
                    id: 6, name: 'Paul SALLES', isExpanded: true, classes: ['salles'],
                    children: [
                        {
                            id: 12, name: 'Paul SALLES', isExpanded: true, classes: ['salles'],
                            children: [
                                {
                                    id: 24, name: 'Jean SALLES', isExpanded: true, classes: ['salles'],
                                    children: [
                                        {
                                            id: 48, name: 'Pierre SALLES', classes: ['salles'],
                                        },
                                        {
                                            id: 49, name: 'Marguerite BONNET', classes: ['bonnet'],
                                        }
                                    ]
                                },
                                {
                                    id: 25, name: 'Mariette BARBAT', isExpanded: true, classes: ['barbat'],
                                    children: [
                                        {
                                            id: 50, name: 'André BARBAT', classes: ['barbat'],
                                        },
                                        {
                                            id: 51, name: 'Jeanne ALLIEU'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 13, name: 'Caroline BOUYCHOU', isExpanded: true, classes: ['bouychou'],
                            children: [
                                {
                                    id: 26, name: 'Jean Pierre BOUYCHOU', isExpanded: true, classes: ['bouychou'],
                                    children: [
                                        {
                                            id: 52, name: 'Guillaume BOUYCHOU', classes: ['bouychou'],
                                        },
                                        {
                                            id: 53, name: 'Catherine CHAUBET', classes: ['chaubet'],
                                        }
                                    ]
                                },
                                {
                                    id: 27, name: 'Catherine BRIOLE', isExpanded: true, classes: ['briole'],
                                    children: [
                                        {
                                            id: 54, name: 'Pierre BRIOLE', classes: ['briole'],
                                        },
                                        {
                                            id: 55, name: 'Mariette MINJOT', classes: ['minjot'],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 7, name : 'Marie BONNET', isExpanded: true, classes: ['bonnet'],
                    children: [
                        {
                            id: 14, name: 'Laurent BONNET', isExpanded: true, classes: ['bonnet'],
                            children: [
                                {
                                    id: 28, name: 'Baptiste BONNET', isExpanded: true, classes: ['bonnet'],
                                    children: [
                                        {
                                            id: 56, name: 'Pierre BONNET', classes: ['bonnet'],
                                        },
                                        {
                                            id: 57, name: 'Anne CHI----'
                                        }
                                    ]
                                },
                                {
                                    id: 29, name: 'Marguerite PUNTIS', isExpanded: true, classes: ['puntis'],
                                    children: [
                                        {
                                            id: 58, name: 'Jacques PUNTIS', classes: ['puntis'],
                                        },
                                        {
                                            id: 59, name: 'Marguerite AUTHIE', classes: ['authie'],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 15, name: 'Marie CHAUBET', isExpanded: true, classes: ['chaubet'],
                            children: [
                                {
                                    id: 30, name: 'Noël CHAUBET', isExpanded: true, classes: ['chaubet'],
                                    children: [
                                        {
                                            id: 60, name: 'Pierre CHAUBET', classes: ['chaubet'],
                                        },
                                        {
                                            id: 61, name: 'Catherine PUNTIS', classes: ['puntis'],
                                        }
                                    ]
                                },
                                {
                                    id: 31, name: 'Mariette LABEUR', isExpanded: true, classes: ['labeur'],
                                    children: [
                                        {
                                            id: 62, name: 'Antoine LABEUR', classes: ['labeur'],
                                        },
                                        {
                                            id: 63, name: 'Angélique CONTE'
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
        for (let i = 0; i < this.descriptions$.descriptionsArnaud.length; ++i) {
            if (val === this.descriptions$.descriptionsArnaud[i].getId()) {
                this.description = this.descriptions$.descriptionsArnaud[i].getDesc();
            }
        }
    }

    fillCoords() {
        this.coords.push(new PositionModel(42.872222, 1.834167));
        this.coords.push(new PositionModel(42.907778, 1.860556));
    }
}
