//! double-quote only!! Objects should be in 'assets/img/objects/{object_name}.png'
var diapo = {
    "1": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/avion-atterrit.jpeg",
                "text": "JOUR 1 : Vous venez tout juste d'atterir à l'aéroport Charles de Gaulle (CDG). Vous et votre équipe commencez à vous demander où aller...",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/roissy-cdg.jpeg",
                "text": "En effet, l'aéroport CDG est connu pour être le plus grand d'Europe ! On peut notamment prendre le RER (subway) ou le TGV (grandes lignes) qui permettent d'aller dans d'autre villes majeures.",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/plan-rer-paris.jpeg",
                "text": "Finalement, votre équipe décide de prendre le large pour...",
                "prop": {
                    "A": {
                        "propText": "PARIS : prendre le RER",
                        "toDiapo": "2",
                        "requireObject": null,
                        "requireMoney": 5
                    },
                    "B": {
                        "propText": "Les autres villes : gare TGV",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 50
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "2": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": -5,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/rerb-quais.jpeg",
                "text": "Vous sautez dans le premier RER B que vous voyez !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/Plan-RER-B-Paris.png",
                "text": "Mais vous ne savez pas vraiment où vous arrêter... Vous remarquez qu'il y a plusieurs stations dans Paris et vous ne savez pas laquelle prendre...",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/rer-banlieue.png",
                "text": "Pendant ce temps la, vous observez que le train se déplace dans la banlieue parisienne, là où on retrouve beaucoup de quartiers résidentiels...",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/Plan-RER-B-Paris.png",
                "text": "Mais vous voilà arrivés à Paris ! Alors ? Où est ce qu'on s'arrête ?",
                "prop": {
                    "A": {
                        "propText": "Gare du Nord",
                        "toDiapo": "3",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "B": {
                        "propText": "Chatelet-les-Halles",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "C": {
                        "propText": "Denfert-Rocherot",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "D": null
                }
            }
        ]
    },
    "3": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/gare-nord.jpeg",
                "text": "Vous êtes descendus à la gare du Nord ! Il y a un peu de monde et vous semblez un peu perdu...",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/demander-chemin.jpeg",
                "text": "Ne savant pas quoi faire ici, vous décidez de demender des renseignements à quelqu'un...",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/montmartre-bas.jpeg",
                "text": "Cette personne vous conseille d'aller en haut de la butte de Montmartre, où on a une vue magnifique !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/faim.jpeg",
                "text": "Cependant, vous avez très faim après votre voyage... Alors, vous allez prendre votre mal en patience ou aller manger au restaurant le plus proche ?",
                "prop": {
                    "A": {
                        "propText": "Aller à Montmartre",
                        "toDiapo": "4",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "B": {
                        "propText": "Aller au resto le plus proche",
                        "toDiapo": "11",
                        "requireObject": null,
                        "requireMoney": 15
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "4": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 1,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/vue-montmartre.jpeg",
                "text": "Après tant d'effort, vous avez grimpés la butte ! La vue est magnifique !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/village-montmartre.webp",
                "text": "Vous remarquez également une sorte d'ambiance de vilage, avec un énorme batiment au milieu... C'est le Sacré-Coeur ! La célèbre basilique de Paris ! Vous gagnez 1 <culture> !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/crepes.png",
                "text": "Cependant vous avez toujours faim ! Vous remarquez beaucoup de crêperies ici, mais également un simple McDo... Que-faire ?",
                "prop": {
                    "A": {
                        "propText": "Crêpe et manger dehors",
                        "toDiapo": "5",
                        "requireObject": null,
                        "requireMoney": 5
                    },
                    "B": {
                        "propText": "Aller au McDo",
                        "toDiapo": "7",
                        "requireObject": null,
                        "requireMoney": 10
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "5": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": -5,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/crepes-montmartre.jpeg",
                "text": "Vous decidez donc d'aller vers le crêpier. Il y en a une tonne a Montmartre et il y a aussi une tonne de monde...",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/assis-montmartre.webp",
                "text": "Vous avez pris votre mal en patience et vous partez en direction de la vue de Paris pour la manger.",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/defense-montmartre.jpeg",
                "text": "Pendant que vous mangiez, vous appercevez au loin un amas de tours vers l'ouest de la ville... Ça pourait être interessant d'y faire un tour !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/ibis-budget.jpeg",
                "text": "Mais pour l'instant c'est l'heure de dormir et vous n'avez pas trouvé d'hôtel en avance... Vous dormirez donc dans un hôtel low-cost.",
                "prop": {
                    "A": {
                        "propText": "Aller à l'hôtel low-cost",
                        "toDiapo": "6",
                        "requireObject": null,
                        "requireMoney": 20
                    },
                    "B": null,
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "6": {
        "endOfDay": false,
        "endOfGame": true,
        "futureRoute": null,
        "money": -20,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/chambre-ibis-budget.jpeg",
                "text": "Vous dormez paisiblement, en pensant à ce que vous pourriez faire demain...",
                "prop": null
            },
        ]
    },
    "7": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": -10,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/village-montmartre.webp",
                "text": "Vous décidez donc d'aller dans le McDo le plus proche et de vous enfoncer dans le 'vilage' de Paris.",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/mcdo-nuit.png",
                "text": "Après avoir mangé un bon repas, vous decidez de vous promener dans ce village... Les habitants ont l'habitude de voir des touristes ici !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/maisons-montmartre.webp",
                "text": "Un couple de grand-parent vous propose de passer la nuit dans leur maison... On y va?",
                "prop": {
                    "A": {
                        "propText": "Évidemment !",
                        "toDiapo": "8",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "B": null,
                    "C": null,
                    "D": null
                }
            },
        ]
    },
    "8": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 1,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/loft-paris.jpeg",
                "text": "Vous rentrez donc dans l'immense demeure des grand-parent, il faut se le permettre pour acheter une grande maison dans un endroit comme ça !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/vieux-parlent.webp",
                "text": "Vous discutez et parlez de du challenge que votre classe à mis en oevre, et que vous devez visiter le plus d'endroits possible ! Cela fait rire le couple, ils n'avaient jamais vu de touristes comme ça ! Vous gagnez 1 <fun> !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/tickets-disney.jpeg",
                "text": "Pour vous aider dans votre quête, le couple vous propose des tickets pour 2 sorties disponibles au JOUR 5, soit une sortie à DisneyLand Paris <disney>, soit une visite d'un chateau <chateau> dans le sud de Paris... Que choisisez-vous ?",
                "prop": {
                    "A": {
                        "propText": "Ticket Disney",
                        "toDiapo": "9",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "B": {
                        "propText": "Ticket chateau",
                        "toDiapo": "10",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "9": {
        "endOfDay": false,
        "endOfGame": true,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": "disney",
        "pages": [
            {
                "pathToImg": "assets/img/diapo/tickets-disney.jpeg",
                "text": "Vous avez choisi le ticket <disney> ! Vous remerciez le couple et vous allez vous coucher, tout en pensant à quoi faire demain.",
                "prop": null
            }
        ]
    },
    "10": {
        "endOfDay": false,
        "endOfGame": true,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": "chateau",
        "pages": [
            {
                "pathToImg": "assets/img/diapo/billet-chateau.jpeg",
                "text": "Vous avez choisi le ticket <chateau> ! Vous remerciez le couple et vous allez vous coucher, tout en pensant à quoi faire demain.",
                "prop": null
            }
        ]
    },
    "11": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": -15,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/rue-gare-du-nord.jpeg",
                "text": "Vous decidez donc d'être impacient et de manger sans attendre... C'est peut-être le bon choix !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/resto-paris.jpeg",
                "text": "Après il faut dire que Paris ne manque pas de restos et de bars, mais près de la Gare du Nord vous trouverez beaucoup de restaurants multi-culturels !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/resto-gare-nord.jpeg",
                "text": "Donc vous décidez de manger au premier restaurant que vous voyez, et vous trouvez ça très bon ! Par contre vous remarquez qu'il n'y a pas beaucoup de touristes... Après tout c'est normal ! Gare du Nord n'est pas un endroit touristique, mais plutôt un lieu pour prendre le métro à d'autres endroits !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/marche-paris.webp",
                "text": "Ayant fini de manger, vous vous demandez qu'a-t-il d'autre à faire dans ce quartier ? Et à ce moment précis, vous remarquez un joli marché ! Vous ne savez pas si ça vaut le coup... On y va ?",
                "prop": {
                    "A": {
                        "propText": "Aller au marché",
                        "toDiapo": "12",
                        "requireObject": null,
                        "requireMoney": 20
                    },
                    "B": {
                        "propText": "Continuer à se promener vers l'est",
                        "toDiapo": "13",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "12": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": -20,
        "culture": 0,
        "fun": 1,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": "assets/img/diapo/vente-sauvette-paris.jpeg",
                "text": "Vous décidez donc d'aller vers ce fameux marché ! Et c'est plutôt pas mal ! Vous y trouvez beaucoup d'objets souvenirs de Paris (+1 <fun>). Cependant ne vous faites pas avoir ! On retrouve beaucoup de magasins de rue de ce genre partout autour des attractions trouristiques ! Et on retrouve se genre d'objet beaucoup moins cher en boutique !",
                "prop": null
            },
            {
                "pathToImg": "assets/img/diapo/ibis-budget.jpeg",
                "text": "Ayant déjà fait pas mal de chose le 1er jour, vous decidez d'aller chercher un hôtel dans le coin ! Cependant, il y a pas beaucoup d'hôtels de luxe dans ce quartier ! Vous vous contenterez d'un simple hôtel low-cost !",
                "prop": {
                    "A": {
                        "propText": "Aller à l'hôtel low-cost",
                        "toDiapo": "6",
                        "requireObject": null,
                        "requireMoney": 20
                    },
                    "B": null,
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "13": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 1,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": null,
                "text": "Vous décidez donc de continuer de marcher en dehors du quartier pour voir quelque chose de cool à faire...",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Tout à coup, vous voyez une entrée pour aller dans un parc, vous decidez d'entrer...",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Vous entrez dans le magnifique parc des Buttes Chaumont ! Vous remarquez sa célèbre cascade et decidez de manger un pique-nique juste à côté ! Vous gagnez 1 <fun> !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Après avoir passé une magnifique journée, vous avez envie de vous reposer. Où voulez vous dormir ?",
                "prop": {
                    "A": {
                        "propText": "Aller à l'hôtel low-cost",
                        "toDiapo": "6",
                        "requireObject": null,
                        "requireMoney": 20
                    },
                    "B": {
                        "propText": "Dormir à la belle étoile",
                        "toDiapo": "14",
                        "requireObject": null,
                        "requireMoney": 0
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "14": {
        "endOfDay": false,
        "endOfGame": true,
        "futureRoute": "0",
        "money": 0,
        "culture": 0,
        "fun": -1,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": null,
                "text": "Une nuit à la belle étoile ! Pourquoi pas ?",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Cependant, vous remarquerez que ce n'est pas l'déal de dormir dehors à Paris... Vous remarquez des rats qui se déplacent partout ! Il y en a partout dans la capitale ! Vous perdez 1 <fun> ! Vous arrivez tout de même à dormir.",
                "prop": null
            },
        ]
    },
    "15": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": null,
                "text": "Après tant d'effort, vous avez grimpés la butte ! La vue est magnifique !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Vous remarquez également une sorte d'ambiance de vilage, avec un énorme batiment au milieu... C'est le Sacré-Coeur ! La célèbre basilique de Paris ! Vous gagnez 1 <culture> !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Cependant vous avez toujours faim ! Vous remarquez beaucoup de crêperies ici, mais également un simple McDo... Que-faire ?",
                "prop": {
                    "A": {
                        "propText": "Crêpe et manger dehors",
                        "toDiapo": "5",
                        "requireObject": null,
                        "requireMoney": 5
                    },
                    "B": {
                        "propText": "Aller au McDo",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 10
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "16": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": null,
                "text": "Après tant d'effort, vous avez grimpés la butte ! La vue est magnifique !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Vous remarquez également une sorte d'ambiance de vilage, avec un énorme batiment au milieu... C'est le Sacré-Coeur ! La célèbre basilique de Paris ! Vous gagnez 1 <culture> !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Cependant vous avez toujours faim ! Vous remarquez beaucoup de crêperies ici, mais également un simple McDo... Que-faire ?",
                "prop": {
                    "A": {
                        "propText": "Crêpe et manger dehors",
                        "toDiapo": "5",
                        "requireObject": null,
                        "requireMoney": 5
                    },
                    "B": {
                        "propText": "Aller au McDo",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 10
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "17": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": null,
                "text": "Après tant d'effort, vous avez grimpés la butte ! La vue est magnifique !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Vous remarquez également une sorte d'ambiance de vilage, avec un énorme batiment au milieu... C'est le Sacré-Coeur ! La célèbre basilique de Paris ! Vous gagnez 1 <culture> !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Cependant vous avez toujours faim ! Vous remarquez beaucoup de crêperies ici, mais également un simple McDo... Que-faire ?",
                "prop": {
                    "A": {
                        "propText": "Crêpe et manger dehors",
                        "toDiapo": "5",
                        "requireObject": null,
                        "requireMoney": 5
                    },
                    "B": {
                        "propText": "Aller au McDo",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 10
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    },
    "18": {
        "endOfDay": false,
        "endOfGame": false,
        "futureRoute": null,
        "money": 0,
        "culture": 0,
        "fun": 0,
        "pictures": 0,
        "object": null,
        "pages": [
            {
                "pathToImg": null,
                "text": "Après tant d'effort, vous avez grimpés la butte ! La vue est magnifique !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Vous remarquez également une sorte d'ambiance de vilage, avec un énorme batiment au milieu... C'est le Sacré-Coeur ! La célèbre basilique de Paris ! Vous gagnez 1 <culture> !",
                "prop": null
            },
            {
                "pathToImg": null,
                "text": "Cependant vous avez toujours faim ! Vous remarquez beaucoup de crêperies ici, mais également un simple McDo... Que-faire ?",
                "prop": {
                    "A": {
                        "propText": "Crêpe et manger dehors",
                        "toDiapo": "5",
                        "requireObject": null,
                        "requireMoney": 5
                    },
                    "B": {
                        "propText": "Aller au McDo",
                        "toDiapo": "0",
                        "requireObject": null,
                        "requireMoney": 10
                    },
                    "C": null,
                    "D": null
                }
            }
        ]
    }
};