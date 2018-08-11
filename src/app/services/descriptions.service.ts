import {Injectable} from '@angular/core';
import {OptionalInformationModel} from '../models/optional-information.model';

@Injectable({
    providedIn: 'root'
})
export class DescriptionsService {
    descriptionsMainguy: OptionalInformationModel[];
    descriptionsMaillot: OptionalInformationModel[];
    descriptionsArnaud: OptionalInformationModel[];
    descriptionsBarthe: OptionalInformationModel[];

    constructor() {
        this.descriptionsMainguy = [];
        this.descriptionsMaillot = [];
        this.descriptionsArnaud = [];
        this.descriptionsBarthe = [];
        this.populateMainguy();
        this.populateMaillot();
        this.populateArnaud();
        this.populateBarthe();
    }

    populateMainguy() {
        this.descriptionsMainguy.push(new OptionalInformationModel(2, 'Amédé Marcel Alphonse MAINGUY\n' +
            'né le 1er Septembre 1895 à Saint Jean de Boiseau, canton de Pellerin\n' +
            'marié le 11 Mars 1918 à Emilienne Eugénie LEGAL à La Montagne\n' +
            'décédé le 13 Mai 1962 à La montagne (67 ans)'));
        this.descriptionsMainguy.push(new OptionalInformationModel(3, 'Emilienne Eugénie LEGAL\n' +
            'née le 20 Septembre 1899 à La Montagne\n' +
            'mariée le 11 Mars 1918 à Amédée MAINGUY à La Montagne'));
        this.descriptionsMainguy.push(new OptionalInformationModel(4, 'Joseph Bonaventure MAINGUY\n' +
            'né le 24 Novembre 1852 à Nantes\n' +
            'marié à Jeanne ROUSSELY le 29 Septembre 1878 à La Montagne\n' +
            'Charpentier\n'));
        this.descriptionsMainguy.push(new OptionalInformationModel(5, 'Jeanne ROUSSELY\n' +
            'née le 5 Juin 1854 à Saint-Avit-Sénieur (Dordogne) -> https://fr.wikipedia.org/wiki/Saint-Avit-S%C3%A9nieur\n' +
            'mariée à Joseph Bonaventure MAINGUY le 29 Septembre 1878 à La Montagne'));
        this.descriptionsMainguy.push(new OptionalInformationModel(6, 'Olivier Yves Marie LE GAL\n' +
            'né le 17 Avril 1847 à Radenac (Morbihan)\n' +
            'marié le 12 Août 1878 à Françoise Marguerite GUIHAL à Saint Jean de Boiseau\n' +
            'Forgeron\n'));
        this.descriptionsMainguy.push(new OptionalInformationModel(7, 'Françoise Marguerite GUIHAL\n' +
            'née le 14 Mai 1857 à Saint Jean de Boiseau\n' +
            'mariée le 12 Août 1878 à Olivier Yves Marie LE GAL à Saint Jean de Boiseau'));
        this.descriptionsMainguy.push(new OptionalInformationModel(8, 'Bonaventure MAINGUY (1092 - 4)\n' +
            'né le 11 Décembre 1824 à Pont Saint Martin\n' +
            'marié à Magdeleine LAMY\n' +
            'décédé le 23 Novembre 1875 à Nantes\n' +
            'Boulanger'));
        this.descriptionsMainguy.push(new OptionalInformationModel(9, 'Magdeleine LAMY\n' +
            'née le 12 Janvier 1822 à Nantes\n' +
            'mariée à Bonaventure MAINGUY\n' +
            'décédée à Vertou le 28 Mai 1857 à 35 ans\n' +
            'Sans profession'));
        this.descriptionsMainguy.push(new OptionalInformationModel(10, 'Pierre ROUSSELY\n' +
            'né vers 1824\n' +
            'marié à Jeanne CHANSAR\n' +
            'Cultivateur\n'));
        this.descriptionsMainguy.push(new OptionalInformationModel(11, 'Jeanne CHANSAR\n' +
            'mariée à Pierre ROUSSELY\n' +
            'Cultivateur\n'));
        this.descriptionsMainguy.push(new OptionalInformationModel(12, 'Mathurin LE GAL\n' +
            'né à Buléon le 12 Juin 1800\n' +
            'marié à Anne COBIGO\n' +
            'décédé le 25 Mai 1875 à Buléon (Morbihan)\n' +
            'Laboureur'));
        this.descriptionsMainguy.push(new OptionalInformationModel(13, 'Anne COBIGO\n' +
            'mariée à Mathurin LE GAL'));
        this.descriptionsMainguy.push(new OptionalInformationModel(14, 'Julien GUIHAL\n' +
            'né vers 1816\n' +
            'marié à Marguerite GALLAIS\n' +
            'Frappeur'));
        this.descriptionsMainguy.push(new OptionalInformationModel(15, 'Marguerite GALLAIS\n' +
            'née vers 1815\n' +
            'mariée à Julien GUIHAL'));
        this.descriptionsMainguy.push(new OptionalInformationModel(16, 'Pas de pére'));
        this.descriptionsMainguy.push(new OptionalInformationModel(17, 'Rule MAINGUY\n' +
            'née à Pont Saint Martin\n' +
            'Couturière'));
        this.descriptionsMainguy.push(new OptionalInformationModel(18, 'Sébastien LAMI\n' +
            'Né le 10 Avril 1794 né au village du Douet (en cette commune)\n' +
            'marié à Marie LALEAU le 2 Février 1814 à Saint Sébastien\n' +
            'résidant à la Gilarderie\n' +
            'Laboureur'));
        this.descriptionsMainguy.push(new OptionalInformationModel(19, 'Marie LALEAU\n' +
            'Née le 10 Mai 1785 au village du Port de Chéze \n' +
            'mariée à Sébastien LAMI le 2 Février 1814 à Saint Sébastien'));
        this.descriptionsMainguy.push(new OptionalInformationModel(24, 'Mathurin LE GAL\n' +
            'marié à Mathurinne GUILLO'));
        this.descriptionsMainguy.push(new OptionalInformationModel(25, 'Mathurinne GUILLO\n' +
            'mariée à Mathurin LE GAL\n'));
        this.descriptionsMainguy.push(new OptionalInformationModel(36, 'Jacques LAMY\n' +
            'Marié à Sébastienne CORNERAIS\n' +
            'Laboureur\n' +
            'Vient de Douet'));
        this.descriptionsMainguy.push(new OptionalInformationModel(37, 'Sébastienne CORNERAIS\n' +
            'Mariée à Jacques LAMY'));
        this.descriptionsMainguy.push(new OptionalInformationModel(38, 'Julien LALEAU\n' +
            'Vient de Port de Chéze\n' +
            'Marié à Marie HAINAUD\n' +
            'Décédé le 8 Avril 1807 à Saint Sébastien'));
        this.descriptionsMainguy.push(new OptionalInformationModel(39, 'Marie HAINAUD\n' +
            'Décédée en 1814 ou avant\n' +
            'Mariée à Julien LALEAU'));
    }

    populateMaillot() {
        this.descriptionsMaillot.push(new OptionalInformationModel(2, 'Michel MAILLOT\n' +
            'né le 5 Octobre 1899 à Montrollet -> https://fr.wikipedia.org/wiki/Montrollet (Charente)\n' +
            'marié à Lucienne Renée Germain MARTIN\n' +
            'décédé le 28 Septembre 1982 à La Montagne -> https://fr.wikipedia.org/wiki/La_Montagne_(Loire-Atlantique)\n' +
            'Tailleur'));
        this.descriptionsMaillot.push(new OptionalInformationModel(3, 'Lucienne Renée Germain MARTIN\n' +
            'née le 4 Novembre 1898 à Ruelle -> https://fr.wikipedia.org/wiki/Ruelle-sur-Touvre\n' +
            'mariée à Michel MAILLOT\n' +
            'Couturière'));
        this.descriptionsMaillot.push(new OptionalInformationModel(4, 'Louis MAILLOT\n' +
            'né le 12 Avril 1873 à Brigueil -> https://fr.wikipedia.org/wiki/Brigueil-le-Chantre\n' +
            'Maçon'));
        this.descriptionsMaillot.push(new OptionalInformationModel(5, 'Marguerite COMPAIN\n' +
            'née le 23 Mars 1867 à Saint-Christophe de Confolens -> https://fr.wikipedia.org/wiki/Saint-Christophe_(Charente)\n' +
            'mariée à Louis MAILLOT'));
        this.descriptionsMaillot.push(new OptionalInformationModel(6, 'Jean MARTIN\n' +
            'né le 8 Janvier 1869 à Claix (Charente)\n' +
            'marié à Berthe MAFFRE le 9 Septembre 1895 à La Mothe Saint Héray\n' +
            'Ecrivain à la fonderie (?)\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(7, 'Berthe MAFFRE\n' +
            'née le 26 Avril 1872 à La Mothe Saint Héray (Deux-Sèvres)\n' +
            'mariée à Jean MARTIN le 9 Septembre 1895 à La Mothe Saint Héray\n' +
            'Couturière\n' +
            '\n' +
            'Un frère jumeau, Ernest, né le 26 Avril 1872\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(8, 'François MAILLOT\n' +
            'né le 23 Novembre 1835 à Brigueil -> https://fr.wikipedia.org/wiki/Brigueil-le-Chantre\n' +
            'décédé le 9 Décembre 1895\n' +
            'Maçon'));
        this.descriptionsMaillot.push(new OptionalInformationModel(9, 'Marie CHATAIGNIER\n' +
            'née en 1837\n' +
            'mariée à François MAILLOT\n' +
            'Gensère (métier à relire et corriger)'));
        this.descriptionsMaillot.push(new OptionalInformationModel(10, 'Jean COMPAIN\n' +
            'né le 5 Novembre 1841 à Saint Christophe de Confolens -> https://fr.wikipedia.org/wiki/Saint-Christophe_(Charente)\n' +
            'marié le 22 Mai 1864 à Marie Lavotte à Montrollet\n' +
            'Cultivateur'));
        this.descriptionsMaillot.push(new OptionalInformationModel(11, 'Marie LAVOTTE\n' +
            'née le 2 Janvier 1848 à Saint Junien -> https://fr.wikipedia.org/wiki/Saint-Junien\n' +
            'mariée le 22 Mai 1864 à Jean COMPAIN à Montrollet'));
        this.descriptionsMaillot.push(new OptionalInformationModel(12, 'Jean MARTIN\n' +
            'né vers 1834\n' +
            'marié à Rose RENET\n' +
            'Grainetier, meunier\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(13, 'Rose RENET\n' +
            'née vers 1846\n' +
            'mariée à Jean MARTIN\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(14, 'Jacques François MAFFRE\n' +
            'né le 16 Septembre 1835 à Pamproux\n' +
            'marié à Françoise TOUCHE\n' +
            'décédé le 27 Février 1882 à La Mothe Saint Hérays\n' +
            'Marchant\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(15, 'Françoise TOUCHE\n' +
            'née vers 1837\n' +
            '\n' +
            'Marchande épicière\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(16, 'Etienne MAILLOT\n' +
            'né le 9 Mai 1799 à Brigueil -> https://fr.wikipedia.org/wiki/Brigueil-le-Chantre\n' +
            'marrié le 25 Novembre 1828 à Jeanne NADAUD\n' +
            'Tisserand'));
        this.descriptionsMaillot.push(new OptionalInformationModel(17, 'Jeanne NADAUD\n' +
            'née le 1 Mai 1810 à Montrollet\n' +
            'mariée le 25 Novembre 1828 à Etienne MAILLOT'));
        this.descriptionsMaillot.push(new OptionalInformationModel(18, 'Jean CHATAIGNIER\n' +
            'né le 30 Mars 1793 à Javerdat -> https://fr.wikipedia.org/wiki/Javerdat\n' +
            'marié à Françoise DUMONTET le 25 Janvier 1836 à Brigueil (marié à 43 ans)\n' +
            'Cultivateur'));
        this.descriptionsMaillot.push(new OptionalInformationModel(19, 'Françoise DUMONTET\n' +
            'née le 25 Septembre 1797 à Brigueil\n' +
            'mariée à Jean CHAITAIGNIER le 25 Janvier 1836'));
        this.descriptionsMaillot.push(new OptionalInformationModel(20, 'Louis COMPAIN\n' +
            'né le 17 Janvier 1806 à Brigueil\n' +
            'marié à Jeanne ROULON\n' +
            'décédé le 5 Octobre 1861 à Montrollet'));
        this.descriptionsMaillot.push(new OptionalInformationModel(21, 'Jeanne ROULON\n' +
            'née le 2 Décembre 1816 à Lesterps -> https://fr.wikipedia.org/wiki/Lesterps\n' +
            'mariée à Louis COMPAIN\n' +
            'décédée le 25 Décembre 1871 à Montrollet\n' +
            'Servante'));
        this.descriptionsMaillot.push(new OptionalInformationModel(22, 'François LAVOTTE\n' +
            'marié à Marie ALLEGROS'));
        this.descriptionsMaillot.push(new OptionalInformationModel(23, 'Marie ALLEGROS\n' +
            'mariée à François LAVOTTE'));
        this.descriptionsMaillot.push(new OptionalInformationModel(28, 'Jacques MAFFRE\n' +
            'né vers 1798 probablement à Pamproux\n' +
            'marié à Marie Jeanne BRAULT\n' +
            'Maçon\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(29, 'Marie Jeanne BRAULT\n' +
            'née vers 1801\n' +
            'mariée à Jacques MAFFRE\n'));
        this.descriptionsMaillot.push(new OptionalInformationModel(32, 'Jean MAILLOT\n' +
            'né le ??? à (probablement) Brigueil -> https://fr.wikipedia.org/wiki/Brigueil-le-Chantre\n' +
            'marié le 19 Février 1790 à Marie DEGUERCY\n' +
            'décédé le 4 Avril 1805'));
        this.descriptionsMaillot.push(new OptionalInformationModel(33, 'Marie DEGUERCY\n' +
            'mariée le 19 Février 1790 à Jean MAILLOT'));
        this.descriptionsMaillot.push(new OptionalInformationModel(34, 'François NADAUD\n' +
            'né en 1743 probablement à Montrollet\n' +
            'marié à Marie Anne LEFORT, qui est potentiellement sa propre mère (manque de sources)\n' +
            'décédé le 22 Aout 1813 à Montrollet\n' +
            'Cultivateur'));
        this.descriptionsMaillot.push(new OptionalInformationModel(35, 'Marie Anne LEFORT\n' +
            'mariée à François NADAUD\n' +
            'potentiellement sa mère, besoin de plus de sources'));
        this.descriptionsMaillot.push(new OptionalInformationModel(36, 'Emery CHATAIGNIER\n' +
            'décédé le 29 Septembre 1800\n' +
            'marié à Catherine LACROIX'));
        this.descriptionsMaillot.push(new OptionalInformationModel(37, 'Catherine LACROIX\n' +
            'décédée le 10 Février 1802 à Brigueil\n' +
            'mariée à Emery CHATAIGNIER'));
        this.descriptionsMaillot.push(new OptionalInformationModel(38, 'Jean DUMONTET\n' +
            'décédé le 12 Janvier 1813 à Saint-Christophe de Con.\n' +
            'marié à Laurence OU Léonne DE LA PORCHERIE'));
        this.descriptionsMaillot.push(new OptionalInformationModel(39, 'Laurence OU Léonne DE LA PORCHERIE\n' +
            'décédée avant 1836\n' +
            'mariée à Jean DUMONTET'));
        this.descriptionsMaillot.push(new OptionalInformationModel(40, 'Jean COMPAIN\n' +
            'né le 27 Mars 1777 à Lesterps\n' +
            'marié à Marie MORICHON\n' +
            'Cultivateur'));
        this.descriptionsMaillot.push(new OptionalInformationModel(41, 'Marie MORICHON\n' +
            'mariée à Jean COMPAIN\n' +
            'décédée le 8 Juin 1820 à Esse -> https://fr.wikipedia.org/wiki/Esse'));
        this.descriptionsMaillot.push(new OptionalInformationModel(80, 'Martial COMPAIN\n' +
            'marié à Marie BARRIER\n' +
            'Métayer'));
        this.descriptionsMaillot.push(new OptionalInformationModel(81, 'Marie BARRIER\n' +
            'mariée à Martial COMPAIN'));
        this.descriptionsMaillot.push(new OptionalInformationModel(82, 'Jean MORICHON\n' +
            'marié à Jeanne DUMASDELAGE'));
        this.descriptionsMaillot.push(new OptionalInformationModel(83, 'Jeanne DUMASDELAGE\n' +
            'mariée à Jean MORICHON'));
        this.descriptionsMaillot.push(new OptionalInformationModel(160, 'Clément COMPAIN\n' +
            'marié à Martialle JORIAUX'));
        this.descriptionsMaillot.push(new OptionalInformationModel(161, 'Martialle JORIAUX\n' +
            'mariée à Clément COMPAIN\n' +
            'décédée le 17 Février 1757'));
    }

    populateArnaud() {
        this.descriptionsArnaud.push(new OptionalInformationModel(2, 'Albert Jean Baptiste ARNAUD\n' +
            'né le 30 Juin 1878 à Montségur\n' +
            'marié le 25 Janvier 1903 à Laure Caroline SALLES à Montségur\n' +
            'Cultivateur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(3, 'Laure Caroline SALLES\n' +
            'née le 14 Novembre 1882 à Montségur\n' +
            '\n' +
            'décédée le 17 Frévrier 1944 à Montségur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(4, 'Marc ARNAUD dit Sanfranc\n' +
            'né le 2 Avril 1839 à Montségur\n' +
            'marié à Lafleur Victoire AUTHIE(é) le 9 Février 1874 à Montségur\n' +
            'Tisserand'));
        this.descriptionsArnaud.push(new OptionalInformationModel(5, 'Lafleur Victoire AUTHIE(é)\n' +
            'née le 8 (10 sur acte de mariage) Aout 1844 à Montségur\n' +
            'mariée à Marc ARNAUD le 9 Février 1874 à Montségur\n' +
            'Ménagère'));
        this.descriptionsArnaud.push(new OptionalInformationModel(6, 'Paul SALLES\n' +
            'né le 25 Juin 1856 à Montségur\n' +
            'marié à Marie BONNET à Montségur\n' +
            'Tisserand'));
        this.descriptionsArnaud.push(new OptionalInformationModel(7, 'Marie BONNET\n' +
            'née le 30 Novembre 1862 à Montségur\n' +
            'mariée à Paul SALLES à Montségur\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(8, 'Jean ARNAUD dit Sanfrang.c (sang-froid j\'imagine)\n' +
            'né le 17 Février 1808\n' +
            'marié à Jeanne ARNAUD le 15 Mai 1831 à Montségur\n' +
            'décédé le 1er Février 1873\n' +
            'Tisserand\n' +
            '\n' +
            'Référence document archive ariège:\n' +
            '1NUM/4E2484 - An XI-1843\n' +
            'Pages 181 et 182\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(9, 'Jeanne ARNAUD dite Caillol\n' +
            'née en 1804\n' +
            'mariée à Jean ARNAUD le 15 Mai 1831 à Montségur\n' +
            'décédée le 7 Janvier 1862 à Montségur\n' +
            'Ménagère\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(10, 'Joseph AUTHIE(é) dit Lafleur\n' +
            'né 20 Avril 1809 à Montségur\n' +
            'marié à Marie SICRE le 26 Novembre 1835 à Montésgur\n' +
            'Cultivateur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(11, 'Marie Anne SICRE\n' +
            'née le 1er Aout 1813 à Montségur\n' +
            'mariée à Joseph ANTHIE(e) le 26 Novembre 1835 à Montségur\n' +
            'Ménagère'));
        this.descriptionsArnaud.push(new OptionalInformationModel(12, 'Paul SALLES\n' +
            'né le 6 Septembre 1822 à Montségur\n' +
            'marié à Caroline BOUYCHOU le 10 Avril 1850 à Montségur\n' +
            'Journalier/Cultivateur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(13, 'Caroline BOUYCHOU\n' +
            'née le 18 Février 1830 à Montségur\n' +
            'mariée à Paul SALLES le 10 Avril 1850 à Montségur\n' +
            'Ménagère'));
        this.descriptionsArnaud.push(new OptionalInformationModel(14, 'Laurent BONNET\n' +
            'né le 14 Janvier 1823\n' +
            'marié à Marie CHAUBET\n' +
            'Cordonnier\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(15, 'Marie Adelle CHAUBET\n' +
            'née le 13 Juillet 1828\n' +
            'mariée à Laurent BONNET\n' +
            'Ménagére\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(16, 'Marc ARNAUD (Lapipe)\n' +
            'né vers 1782 à probablement Montségur\n' +
            'porté disparu depuis 1811\n' +
            'marié à Marie SERGOLE le 19 Septembre 1811 à Montségur\n' +
            'Journalier\n' +
            '\n' +
            '\n' +
            '++++++++++\n' +
            'Jean ARNAUD (Lapipe) son frère aÓné\n' +
            'né vers 1773 ou 1777\n' +
            'Journalié/er'));
        this.descriptionsArnaud.push(new OptionalInformationModel(17, 'Marie SERGOLE\n' +
            '\n' +
            'née en 1781\n' +
            '\n' +
            'mariée à Marc ARNAUD le 19 Septembre 1811 à Montségur\n' +
            'Ménagére\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(18, 'né vers 1771\n' +
            '\n' +
            'marié à Marie PECHEAU le 27 Janvier 1796\n' +
            'décédé le 28 Février 1851\n' +
            '\n' +
            'Cabaretie(?)\n' +
            ' = Aubergiste\n' +
            '\n' +
            '++++++++Fréres++++++++\n' +
            'Marc ARNAUD dit Caillol, 53 ans en 1829 (soit né vers 1776) Cultivateur\n' +
            'Laurent (Laurens dans l\'acte de naissance) ARNAUD dit Caillol, 45 ans en 1829 (soit né vers 1784) Voiturier\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(19, 'Marie PECHEAU dite Fidel\n' +
            'née vers 1773\n' +
            'mariée à Ambroise ARNAUD\n' +
            '\n' +
            'décédée le 26 Septembre 1829\n' +
            '\n' +
            'Ménagére'));
        this.descriptionsArnaud.push(new OptionalInformationModel(20, 'Jean AUTHIE\n' +
            'né vers 1775\n' +
            'marié à Magdelaine BARBAT le 28 Janvier 1796 à Montségur\n' +
            'Garde champêtre\n' +
            '\n' +
            'Mariage 1793-AN XI - page [20/21]/52\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(21, 'Magdelaine BARBAT\n' +
            'née vers 1775\n' +
            'mariée à Jean AUTHIE le 28 Janvier 1796 à Montségur\n' +
            'décédée le 20 Avril 1822\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(22, 'Raymond SICRE dit Ganareille\n' +
            'né vers 1789/1792 (46 ans en 1835)\n' +
            'marié à Angélique VIDAL\n' +
            'Cultivateur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(23, 'Angélique VIDAL\n' +
            '‚gée de 44 ans en 1835 soit née vers 1791\n' +
            'mariée à Raimond SICRE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(24, 'Jean SALLES\n' +
            'né vers 1792\n' +
            'marié à "Mariette" BARBAT\n' +
            'Cultivateur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(25, '"Mariette" BARBAT\n' +
            'née vers 1792\n' +
            'mariée à Jean SALLES'));
        this.descriptionsArnaud.push(new OptionalInformationModel(26, 'Jean Pierre BOUYCHOU\n' +
            'né vers 1795\n' +
            'marié à Catherine BRIOLE\n' +
            'Cultivateur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(27, 'Catherine BRIOLE\n' +
            'mariée à Jean Pierre BOUYCHOU'));
        this.descriptionsArnaud.push(new OptionalInformationModel(28, 'Baptiste BONNET\n' +
            'né  vers 1785\n' +
            'marié à Marguerite PUNTIS\n' +
            'Cultivateur\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(29, 'Marguerite PUNTIS\n' +
            'mariée à Baptiste BONNET\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(30, 'Noèl CHAUBET\n' +
            'né vers 1796\n' +
            'marié à Mariette LABEUR\n' +
            'Cultivateur\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(31, 'Mariette LABEUR\n' +
            'mariée à Noèl CHAUBET\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(32, 'Jean ARNAUD dit Lapipe\n' +
            'né vers 1744 ou 1748 (1807 - 63 ans)\n' +
            'marié à Marie JOFRE\n' +
            'Mendiant d\'après l\'acte de mariage de son fils Marc'));
        this.descriptionsArnaud.push(new OptionalInformationModel(33, 'Marie JOFRE\n' +
            'mariée à Jean ARNAUD'));
        this.descriptionsArnaud.push(new OptionalInformationModel(34, 'Jean SERGOLE dit Marc\n' +
            'né vers 1751 ou 1755\n' +
            'marié à Magdeleine FOURCASSA\n' +
            'Cultivateur\n' +
            '\n' +
            '+++++++++\n' +
            'Raymond SERGOLE dit Marc, né vers 1857 ou 1861, frère cadet de Jean SERGOLE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(35, 'Magdeleine FOURCASSA\n' +
            'mariée à Jean SERGOLE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(36, 'Antoine ARNAUD dit Caillol\n' +
            'marié à Catherine LABEUR Bruffiers ou Brussiers\n'));
        this.descriptionsArnaud.push(new OptionalInformationModel(37, 'Catherine LABEUR "Brassier" ou "Brussier"\n' +
            'mariée à Antoine ARNAUD'));
        this.descriptionsArnaud.push(new OptionalInformationModel(38, 'Guilhaume PECHEU\n' +
            'Marié à Marie MINJOT'));
        this.descriptionsArnaud.push(new OptionalInformationModel(39, 'Marie MINJOT\n' +
            'Mariée à Guillaume PECHEU'));
        this.descriptionsArnaud.push(new OptionalInformationModel(40, 'François AUTHIE\n' +
            'marié à Catherine MOUMIE à Montségur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(41, 'Catherine MOUMIE\n' +
            'mariée à François AUTHIE à Montségur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(42, 'Thomas BARBAT\n' +
            'marié à Antoinette ARNAUD à Montségur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(43, 'Antoinette ARNAUD\n' +
            'mariée à Thomas BARBAT à Montségur'));
        this.descriptionsArnaud.push(new OptionalInformationModel(44, 'Thomas SICRE\n' +
            'Marié à Jeanne ROUZAUD'));
        this.descriptionsArnaud.push(new OptionalInformationModel(45, 'Jeanne ROUZAUD\n' +
            'Mariée à Thomas SICRE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(46, 'Dominique VIDAL\n' +
            'Marié à Marie FAUCHE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(47, 'Marie FAUCHE\n' +
            'Mariée à Dominique VIDAL'));
        this.descriptionsArnaud.push(new OptionalInformationModel(48, 'Pierre SALLES\n' +
            'Marié à Marguerite BONNET'));
        this.descriptionsArnaud.push(new OptionalInformationModel(49, 'Marguerite BONNET\n' +
            'Mariée à Pierre SALLES'));
        this.descriptionsArnaud.push(new OptionalInformationModel(50, 'André BARBAT\n' +
            'Marié à Jeanne ALLIEU'));
        this.descriptionsArnaud.push(new OptionalInformationModel(51, 'Jeanne ALLIEU\n' +
            'Mariée à André BARBAT'));
        this.descriptionsArnaud.push(new OptionalInformationModel(52, 'Guillaume BOUYCHOU\n' +
            'Marié à Catherine CHAUBET'));
        this.descriptionsArnaud.push(new OptionalInformationModel(53, 'Catherine CHAUBET\n' +
            'Mariée à Guillaume BOUYCHOU'));
        this.descriptionsArnaud.push(new OptionalInformationModel(54, 'Pierre BRIOLE\n' +
            'Marié à Mariette MINJOT'));
        this.descriptionsArnaud.push(new OptionalInformationModel(55, 'Mariette MINJOT\n' +
            'Mariée à Pierre BRIOLE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(56, 'Pierre BONNET\n' +
            'Marié à Anne CHI---'));
        this.descriptionsArnaud.push(new OptionalInformationModel(57, 'Anne CHI---\n' +
            'Mariée à Pierre BONNET'));
        this.descriptionsArnaud.push(new OptionalInformationModel(58, 'Jacques PUNTIS\n' +
            'Marié à Marguerite AUTHIE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(59, 'Marguerite AUTHIE\n' +
            'Mariée à Jacques PUNTIS'));
        this.descriptionsArnaud.push(new OptionalInformationModel(60, 'Pierre CHAUBET\n' +
            'Marié à Catherine CHAUBET'));
        this.descriptionsArnaud.push(new OptionalInformationModel(61, 'Catherine PUNTIS\n' +
            'Mariée à Pierre CHAUBET'));
        this.descriptionsArnaud.push(new OptionalInformationModel(62, 'Antoine LABEUR\n' +
            'Marié à Angélique CONTE'));
        this.descriptionsArnaud.push(new OptionalInformationModel(63, 'Angélique CONTE\n' +
            'Mariée à Antoine LABEUR'));
    }

    populateBarthe() {
        this.descriptionsBarthe.push(new OptionalInformationModel(2, 'Honoré Marius BARTHE\n' +
            'né le 14 Novembre 1899 à Lespiteau\n' +
            'marié à Marie Mathilde Michelle CHOURREAU\n' +
            'décédé en 1963 à Toulouse\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(3, 'Marie Mathilde Michelle CHOURREAU\n' +
            'née le 14 Juin 1899 à Lespiteau\n' +
            'mariée à Honoré Marius BARTHE\n' +
            'décédée en Frévrier 1975 à Saint Gaudens'));
        this.descriptionsBarthe.push(new OptionalInformationModel(4, 'Jean Pierre Jules BARTHE\n' +
            'né le 9 Août 1871 à Castera-Vignoles\n' +
            'marié le 6 Septembre 1896 à Françoise Baptistine LABORIE à Lespiteau\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(5, 'Françoise Baptistine LABORIE\n' +
            'née le 1er Janvier 1874 à Lespiteau\n' +
            'mariée le 6 Septembre 1896 à Jean Jules BARTHE à Lespiteau\n' +
            'décédée le 26 Août 1952 à Lespiteau\n' +
            'Cultivatrice'));
        this.descriptionsBarthe.push(new OptionalInformationModel(6, 'Paul Jean François CHOURREAU\n' +
            'né le 1er Janvier 1854 à Lespiteau\n' +
            'marié à Anne Françoise TAPIE le 3 Octobre 1896 à Lespiteau\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(7, 'Anne Françoise TAPIE\n' +
            'née le 3 Février 1868 à Aspret\n' +
            'mariée le 3 Octobre 1896 à Paul Jean François CHOURREAU à Lespiteau\n' +
            'Ménagère, Cultivatrice'));
        this.descriptionsBarthe.push(new OptionalInformationModel(8, 'Barthélémy BARTHE\n' +
            'né le 24 Mai 1840 à Castera-Vignoles\n' +
            'marié le 24 Janvier 1864 à Catherine BARTHE à Castera-Vignoles\n' +
            'décédé le 11 Juillet 1889 à Esparron\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(9, 'Catherine BARTHE\n' +
            'née le 31 Décembre 1841 à Castera-Vignoles\n' +
            'mariée le 24 Janvier 1864 à Barthélémy BARTHE à Castera-Vignoles\n' +
            'décédée le 22 Octobre 1872 à Castera-Vignoles\n' +
            'Ménagère, Rapière'));
        this.descriptionsBarthe.push(new OptionalInformationModel(10, 'François LABORIE\n' +
            'né le 1er Mai 1839 à Montbernard\n' +
            'marié à Jeanne-Anne DUPUY en Août 1872 à Lespiteau\n' +
            'Cantonnier'));
        this.descriptionsBarthe.push(new OptionalInformationModel(11, 'Jeanne-Anne DUPUY\n' +
            'née le 6 Janvier 1843 à Lespiteau\n' +
            'mariée en Août 1872 à François LABORIE à Lespiteau\n' +
            'Cultivatrice'));
        this.descriptionsBarthe.push(new OptionalInformationModel(12, 'Simon CHOURREAU\n' +
            'né le 27 Octobre 1818 à Lespiteau\n' +
            'marié à Cathérine DECAUX le 28 Janvier 1845 à Lespiteau'));
        this.descriptionsBarthe.push(new OptionalInformationModel(13, 'Cathérine DECAUX\n' +
            'née le 28 Octobre 1823 à Regades\n' +
            'mariée à Simon CHOURREAU le 28 Janvier 1845 à Lespitau'));
        this.descriptionsBarthe.push(new OptionalInformationModel(14, 'Mathieu TAPIE\n' +
            'né le 2 Février 1829 à Aspret\n' +
            'marié à Marie GERMAIN le 28 Novembre 1865 à Aspret\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(15, 'Marie GERMAIN\n' +
            'née le 11 Janvier 1831 à Saint-Médard\n' +
            'mariée à Mathieu TAPIE le 28 Novembre 1865 à Aspret\n' +
            'Ménagère'));
        this.descriptionsBarthe.push(new OptionalInformationModel(16, 'Marc BARTHE\n' +
            'marié à Jeanne BORDES\n' +
            'Cultivateur, Métayer'));
        this.descriptionsBarthe.push(new OptionalInformationModel(17, 'Jeanne BORDES\n' +
            'mariée à Marc BARTHE\n' +
            'Ménagère, métayer'));
        this.descriptionsBarthe.push(new OptionalInformationModel(18, 'Jean BARTHE\n' +
            'marié à Guilthérie LABORIE\n' +
            'Cultivateur, Métayer'));
        this.descriptionsBarthe.push(new OptionalInformationModel(19, 'Guilthérie LABORIE\n' +
            'mariée à Jean BARTHE\n' +
            'Métayer'));
        this.descriptionsBarthe.push(new OptionalInformationModel(20, 'Guilheaume LABORIE\n' +
            'mariée à Jeanne Marie DUPRAT\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(21, 'Jeanne Marie DUPRAT\n' +
            'mariée à Guilheaume LABORIE'));
        this.descriptionsBarthe.push(new OptionalInformationModel(22, 'Jean Bertrand DUPUY\n' +
            'né le 10 Septembre 1792 à Lespiteau\n' +
            'marié le 11 Mai 1834 à Marie Anne CAZES\n' +
            'Laboureur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(23, 'Marie Anne CAZES\n' +
            'née le 14 Janvier 1806 à Pointis-Inard\n' +
            'mariée le 11 Mai 1834 à Jean Bertrand DUPUY à Lespiteau'));
        this.descriptionsBarthe.push(new OptionalInformationModel(24, 'Pierre CHOURREAU\n' +
            'Marié à Françoise AVIRAGNET'));
        this.descriptionsBarthe.push(new OptionalInformationModel(25, 'Françoise AVIRAGNET\n' +
            'Mariée à Pierre CHOURREAU'));
        this.descriptionsBarthe.push(new OptionalInformationModel(26, 'Paul DECAUX\n' +
            'marié à Bertrande PAYRAN'));
        this.descriptionsBarthe.push(new OptionalInformationModel(27, 'Bertrande PAYRAN\n' +
            'mariée à Paul DECAUX'));
        this.descriptionsBarthe.push(new OptionalInformationModel(28, 'Gerard TAPIE\n' +
            'né vers 1798\n' +
            'marié à Marie TAPIE\n' +
            'Cultivateur'));
        this.descriptionsBarthe.push(new OptionalInformationModel(29, 'Marie TAPIE\n' +
            'mariée à Gerard TAPIE\n' +
            'Ménagère'));
        this.descriptionsBarthe.push(new OptionalInformationModel(30, 'Rohe GERMAIN\n' +
            'né le 9 Mai 1793 à Saint Médard\n' +
            'marié à Jeanne MAUVAISIN le 25 Février 1816 à Saint Médard'));
        this.descriptionsBarthe.push(new OptionalInformationModel(31, 'Jeanne MAUVAISIN\n' +
            'né le 12 Novembre 1793 à Lespiteau\n' +
            'mariée à Rohe GERMAIN le 25 Février 1816 à Saint Médard'));
        this.descriptionsBarthe.push(new OptionalInformationModel(44, 'Arnaud DUPUY\n' +
            'marié à Jacquette MILHAS'));
        this.descriptionsBarthe.push(new OptionalInformationModel(45, 'Jacquette MILHAS\n' +
            'mariée à Arnaud DUPUY'));
        this.descriptionsBarthe.push(new OptionalInformationModel(46, 'Jean-François CAZES\n' +
            'marié à Marie CAZES'));
        this.descriptionsBarthe.push(new OptionalInformationModel(47, 'Marie CAZES\n' +
            'mariée à Jean-François CAZES'));
        this.descriptionsBarthe.push(new OptionalInformationModel(60, 'Jean GERMAIN\n' +
            'marié à Jeanne Marie BOHE à Saint Médard'));
        this.descriptionsBarthe.push(new OptionalInformationModel(61, 'Jeanne Marie BOHE\n' +
            'mariée à Jean GERMAIN'));
        this.descriptionsBarthe.push(new OptionalInformationModel(62, 'Jean Jacques MAUVAISIN\n' +
            'Marié à Maria Jeanne PICHALOUP\n'));
        this.descriptionsBarthe.push(new OptionalInformationModel(63, 'Maria Jeanne PICHALOUP\n' +
            'Mariée à Jacques MAUVAISIN'));
    }
}
