/* =========================================================
   JDP — Jeu de piste « Esprit piège »
   Thème : neurosciences & biais cognitifs.
   Découvertes du parcours, guide, balises, énigmes et quiz.
   NOTE : la variable interne BIRDS désigne les « découvertes »
   (un biais cognitif par balise) — nom conservé pour rester
   compatible avec l'éditeur et le serveur.
   Pour ajouter une photo : remplir `img` (chemin relatif).
   Pour ajouter un vrai son : remplir `audioFile` (chemin relatif)
   sinon une signature sonore synthétique (Web Audio) est jouée.
   ========================================================= */

const SITE = {
  name: "Jeu de piste",
  short: "JDP",
  region: "Parcours découverte",
  mapTitle: "Le sentier de l'esprit",
  // Position du centre du site (GPS) — À RÉGLER via l'éditeur
  // (« Ma position GPS » sur chaque balise) avant le terrain.
  center: { lat: 48.8566, lng: 2.3522 },
  proximityRadius: 30, // en mètres : distance pour valider par GPS
  hintRadius: 250,     // en mètres : à partir d'où le signal sonore guide
  photos: [],
};

const TRAIL = {
  // Le tracé du sentier (x, y dans la vue de la carte)
  path: [
    [36, 552], [48, 500], [74, 452], [110, 428], [148, 400],
    [176, 356], [200, 308], [238, 292], [282, 296], [320, 320],
    [356, 352], [388, 396], [406, 448], [392, 500], [366, 540], [330, 556],
  ],
  label: "Sentier de l'esprit",
};

/* ---- Découvertes (biais cognitifs) --------------------------------
   chant : phrase musicale répétée (Web Audio), signature unique.
   notes : [ { f, fEnd, d, g, type, v } ]
     f = fréquence de départ (Hz), fEnd = fréquence d'arrivée,
     d = durée (s), g = pause après la note (s),
     type = 'sine' | 'square' | 'sawtooth' | 'noise', v = volume relatif.
------------------------------------------------------------------- */

const BIRDS = [
  {
    id: "confirmation",
    nom: "Biais de confirmation",
    latin: "Confirmation bias · Wason, 1960",
    emoji: "🔍",
    couleur: "#2e6fb3",
    categorie: "diurne",
    taille: "Antidote : chercher ce qui te contredit",
    img: "",
    audioFile: null,
    anecdotes: [
      "Notre cerveau adore avoir raison : il collectionne les preuves qui lui plaisent et jette les autres.",
      "Sur les réseaux sociaux, on voit surtout les messages qui confirment ce qu'on pense déjà : le biais adore ça !",
      "Pour le contrer, pose-toi la question : « Qu'est-ce qui pourrait prouver que j'ai tort ? »",
    ],
    chant: {
      tempo: 90,
      notes: [
        { f: 880, fEnd: 880, d: 0.12, g: 0.08, type: "sine", v: 0.5 },
        { f: 880, fEnd: 880, d: 0.12, g: 0.08, type: "sine", v: 0.5 },
        { f: 1100, fEnd: 1100, d: 0.10, g: 0.30, type: "sine", v: 0.4 },
      ],
    },
    quiz: [
      {
        q: "Que fait le biais de confirmation ?",
        options: ["Il ne retient que les preuves qui nous donnent raison", "Il rend myope", "Il traduit les langues"],
        reponse: 0,
      },
      {
        q: "Quel est le meilleur antidote ?",
        options: ["Chercher ce qui pourrait nous contredire", "Répéter plus fort son opinion", "Fermer les yeux"],
        reponse: 0,
      },
    ],
  },
  {
    id: "ancrage",
    nom: "Effet d'ancrage",
    latin: "Anchoring effect · Tversky & Kahneman, 1974",
    emoji: "⚓",
    couleur: "#5a4fcf",
    categorie: "diurne",
    taille: "Antidote : comparer avec tes propres repères",
    img: "",
    audioFile: null,
    anecdotes: [
      "Le premier nombre entendu devient une ancre : notre estimation reste collée dessus, même si elle est absurde.",
      "« Au lieu de 100 €, seulement 39 € ! » : le prix barré est une ancre qui donne l'impression d'une bonne affaire.",
      "Même les experts se font piéger : une roue de loterie truquée a suffi à fausser leurs estimations en labo.",
    ],
    chant: {
      tempo: 45,
      notes: [
        { f: 220, fEnd: 220, d: 0.30, g: 0.15, type: "sine", v: 0.55 },
        { f: 330, fEnd: 440, d: 0.25, g: 0.50, type: "sine", v: 0.45 },
      ],
    },
    quiz: [
      {
        q: "Qu'est-ce qu'une « ancre » dans notre tête ?",
        options: ["La première information reçue, qui influence toute la suite", "Un bijou", "Une chanson qui reste dans la tête"],
        reponse: 0,
      },
      {
        q: "« Barré à 100 €, vendu 39 € » joue sur…",
        options: ["L'effet d'ancrage", "La météo", "Notre faim"],
        reponse: 0,
      },
    ],
  },
  {
    id: "disponibilite",
    nom: "Biais de disponibilité",
    latin: "Availability heuristic · Tversky & Kahneman, 1973",
    emoji: "📺",
    couleur: "#c2452e",
    categorie: "diurne",
    taille: "Antidote : chercher les vrais chiffres",
    img: "",
    audioFile: null,
    anecdotes: [
      "Ce qui revient souvent à la télé ou dans les discussions semble plus fréquent qu'il ne l'est vraiment.",
      "On craint parfois l'avion plus que la voiture, parce que les accidents d'avion marquent les mémoires.",
      "Astuce : avant de juger « c'est plein d'accidents », demande-toi « ai-je des chiffres ou juste des souvenirs ? »",
    ],
    chant: {
      tempo: 160,
      notes: [
        { f: 1200, fEnd: 1400, d: 0.07, g: 0.04, type: "square", v: 0.4 },
        { f: 1500, fEnd: 1300, d: 0.07, g: 0.04, type: "square", v: 0.4 },
        { f: 1800, fEnd: 1600, d: 0.09, g: 0.35, type: "square", v: 0.38 },
      ],
    },
    quiz: [
      {
        q: "Pourquoi craint-on parfois l'avion plus que la voiture ?",
        options: ["Les accidents d'avion sont très médiatisés, donc faciles à se rappeler", "L'avion va moins vite", "Parce qu'on y est assis longtemps"],
        reponse: 0,
      },
      {
        q: "Quel est l'antidote du biais de disponibilité ?",
        options: ["Regarder les statistiques", "Regarder plus la télé", "Oublier vite"],
        reponse: 0,
      },
    ],
  },
  {
    id: "dunning",
    nom: "Effet Dunning-Kruger",
    latin: "Dunning-Kruger effect · Kruger & Dunning, 1999",
    emoji: "🎢",
    couleur: "#d98e04",
    categorie: "diurne",
    taille: "Antidote : s'entraîner et demander des avis",
    img: "",
    audioFile: null,
    anecdotes: [
      "Débutants, on se croit souvent très fort ; en progressant, on découvre enfin l'étendue de ce qu'on ignore.",
      "Les chercheurs ont testé des étudiants : les moins bons s'estimaient au-dessus de la moyenne !",
      "La vraie compétence commence quand on sait mesurer ce qu'on ne sait pas encore.",
    ],
    chant: {
      tempo: 70,
      notes: [
        { f: 520, fEnd: 900, d: 0.18, g: 0.06, type: "triangle", v: 0.5 },
        { f: 900, fEnd: 1300, d: 0.16, g: 0.06, type: "triangle", v: 0.5 },
        { f: 1300, fEnd: 600, d: 0.22, g: 0.55, type: "triangle", v: 0.45 },
      ],
    },
    quiz: [
      {
        q: "Que fait souvent un grand débutant, selon cet effet ?",
        options: ["Il se surestime car il ne voit pas encore ses lacunes", "Il devient champion tout de suite", "Il n'apprend jamais rien"],
        reponse: 0,
      },
      {
        q: "Comment progresse-t-on malgré cet effet ?",
        options: ["En s'entraînant et en écoutant les retours", "En évitant de pratiquer", "En se comparant aux débutants"],
        reponse: 0,
      },
    ],
  },
  {
    id: "cout",
    nom: "Sophisme du coût irrécupérable",
    latin: "Sunk cost fallacy · Arkes & Blumer, 1985",
    emoji: "🕳️",
    couleur: "#6b4a8a",
    categorie: "diurne",
    taille: "Antidote : raisonner sur l'avenir, pas le passé",
    img: "",
    audioFile: null,
    anecdotes: [
      "Rester jusqu'au bout d'un film ennuyeux « puisque le billet est payé » : l'argent dépensé ne reviendra pas !",
      "Continuer simplement parce qu'on a déjà beaucoup investi, c'est jeter bon argent après mauvais.",
      "La bonne question : « En partant de maintenant, qu'est-ce qui est le mieux pour la suite ? »",
    ],
    chant: {
      tempo: 40,
      notes: [
        { f: 700, fEnd: 480, d: 0.30, g: 0.20, type: "sine", v: 0.5 },
        { f: 600, fEnd: 400, d: 0.30, g: 0.20, type: "sine", v: 0.5 },
        { f: 500, fEnd: 300, d: 0.35, g: 0.60, type: "sine", v: 0.45 },
      ],
    },
    quiz: [
      {
        q: "Le film est nul mais tu restes « parce que le billet est payé ». C'est…",
        options: ["Le sophisme du coût irrécupérable", "Un bon calcul", "De la patience"],
        reponse: 0,
      },
      {
        q: "Que faut-il prendre en compte pour bien décider ?",
        options: ["Seulement ce qui peut encore arriver", "Tout ce qu'on a déjà dépensé", "Ce que les autres pensent"],
        reponse: 0,
      },
    ],
  },
  {
    id: "halo",
    nom: "Effet halo",
    latin: "Halo effect · Thorndike, 1920",
    emoji: "😇",
    couleur: "#0f9b8e",
    categorie: "diurne",
    taille: "Antidote : juger chaque point séparément",
    img: "",
    audioFile: null,
    anecdotes: [
      "Une seule qualité illumine tout le reste : on trouve quelqu'un « sympa », et voilà qu'on le croit intelligent et honnête.",
      "Edward Thorndike l'a observé chez des officiers notés par leurs supérieurs : une bonne note entraînait toutes les autres.",
      "La publicité l'utilise beaucoup : une star souriante prête son « halo » au produit.",
    ],
    chant: {
      tempo: 80,
      notes: [
        { f: 523, fEnd: 523, d: 0.14, g: 0.05, type: "sine", v: 0.45 },
        { f: 659, fEnd: 659, d: 0.14, g: 0.05, type: "sine", v: 0.45 },
        { f: 784, fEnd: 784, d: 0.20, g: 0.45, type: "sine", v: 0.45 },
      ],
    },
    quiz: [
      {
        q: "On trouve quelqu'un sympathique, alors on le croit aussi intelligent. C'est…",
        options: ["L'effet halo", "Un superpouvoir", "De la télépathie"],
        reponse: 0,
      },
      {
        q: "Comment éviter l'effet halo ?",
        options: ["Évaluer chaque qualité séparément", "Ne regarder qu'un seul détail", "Suivre la foule"],
        reponse: 0,
      },
    ],
  },
  {
    id: "verite",
    nom: "Illusion de la vérité",
    latin: "Illusory truth effect · Hasher, Goldstein & Toppino, 1977",
    emoji: "🔁",
    couleur: "#3d4a6b",
    categorie: "nocturne",
    taille: "Antidote : vérifier la source",
    img: "",
    audioFile: null,
    anecdotes: [
      "Plus une information est répétée, plus elle paraît vraie — même si elle est fausse !",
      "Les rumeurs et la désinformation exploitent cette répétition pour s'installer dans nos têtes.",
      "Avant de croire, demande-toi : « Qui le dit ? Où est la preuve ? » Une répétition n'est pas une preuve.",
    ],
    chant: {
      tempo: 60,
      notes: [
        { f: 440, fEnd: 440, d: 0.14, g: 0.10, type: "sine", v: 0.5 },
        { f: 440, fEnd: 440, d: 0.14, g: 0.10, type: "sine", v: 0.5 },
        { f: 440, fEnd: 440, d: 0.14, g: 0.90, type: "sine", v: 0.5 },
      ],
    },
    quiz: [
      {
        q: "Une info répétée dix fois paraît…",
        options: ["Plus vraie, même si elle est fausse", "Toujours fausse", "Plus longue"],
        reponse: 0,
      },
      {
        q: "Quel est le meilleur réflexe face à une info surprenante ?",
        options: ["Vérifier la source", "La partager tout de suite", "La répéter encore"],
        reponse: 0,
      },
    ],
  },
  {
    id: "barnum",
    nom: "Effet Barnum",
    latin: "Barnum (Forer) effect · Forer, 1949",
    emoji: "🔮",
    couleur: "#7a3b8f",
    categorie: "nocturne",
    taille: "Antidote : demander une description précise",
    img: "",
    audioFile: null,
    anecdotes: [
      "« Tu es parfois timide, mais très sociable avec ceux que tu aimes » : ça te ressemble ? Ça ressemble à tout le monde !",
      "Les horoscopes et faux tests de personnalité utilisent des phrases floues valables pour presque tous.",
      "Bertram Forer a donné exactement le même « portrait » à tous ses étudiants : ils y ont cru à 4/5 !",
    ],
    chant: {
      tempo: 50,
      notes: [
        { f: 600, fEnd: 750, d: 0.35, g: 0.15, type: "sawtooth", v: 0.32 },
        { f: 700, fEnd: 550, d: 0.35, g: 0.60, type: "sawtooth", v: 0.30 },
      ],
    },
    quiz: [
      {
        q: "Un horoscope décrit « ta personnalité unique ». En fait, il…",
        options: ["Décrit tout le monde avec des phrases floues", "Lit vraiment dans ton esprit", "Connaît ton avenir"],
        reponse: 0,
      },
      {
        q: "Comment reconnaître un effet Barnum ?",
        options: ["Une description vague qui conviendrait à presque tout le monde", "Des chiffres précis et vérifiables", "Une recette de cuisine"],
        reponse: 0,
      },
    ],
  },
];

/* ---- Guide « L'esprit malin » --------------------------------------
   Autres pièges à connaître, en complément des 8 du parcours.
   « img » : image optionnelle (sinon illustration SVG/emoji).
------------------------------------------------------------------- */

const GUIDE = [
  {
    id: "reciprocite", nom: "Biais de réciprocité", latin: "Reciprocity norm · Cialdini",
    emoji: "🤝", couleur: "#b05f2a", categorie: "diurne", taille: "Antidote : accepter sans se sentir redevable",
    img: "", description: "Recevoir un petit cadeau crée une dette invisible : on dit alors oui à de grosses demandes.",
    anecdotes: ["C'est la technique du « échantillon gratuit ».", "Offrir d'abord, demander ensuite : ça marche trop bien."],
  },
  {
    id: "joueur", nom: "Erreur du joueur", latin: "Gambler's fallacy",
    emoji: "🎲", couleur: "#2a6e5a", categorie: "diurne", taille: "Antidote : chaque tirage est indépendant",
    img: "", description: "Croire que « ça doit bien tomber maintenant » après une série de pile, alors que les chances n'ont pas bougé.",
    anecdotes: ["La pièce n'a pas de mémoire.", "Les casinos adorent cette erreur."],
  },
  {
    id: "apophenie", nom: "Apophénie", latin: "Apophenia · Conrad, 1958",
    emoji: "👀", couleur: "#5c5c8a", categorie: "nocturne", taille: "Antidote : tester avant de croire",
    img: "", description: "Voir des formes ou des liens là où il n'y en a pas : visages dans les nuages, « coïncidences » partout.",
    anecdotes: ["Pareidolie : voir un visage dans une prise électrique.", "Notre cerveau détecteur de motifs, parfois trop zélé."],
  },
  {
    id: "optimisme", nom: "Biais d'optimisme", latin: "Optimism bias · Weinstein, 1980",
    emoji: "🌈", couleur: "#d97b1f", categorie: "diurne", taille: "Antidote : prévoir une marge de sécurité",
    img: "", description: "« Ça n'arrivera qu'aux autres. » On sous-estime ses risques et on surestime ses chances.",
    anecdotes: ["La plupart des conducteurs se disent « au-dessus de la moyenne ».", "Les projets dépassent toujours leur délai prévu : loi de Hofstadter."],
  },
  {
    id: "paille", nom: "Homme de paille", latin: "Straw man fallacy",
    emoji: "🎯", couleur: "#8a3b3b", categorie: "diurne", taille: "Antidote : reformuler l'argument d'autrui",
    img: "", description: "Déformer l'argument de l'autre pour le réfuter plus facilement, puis attaquer cette version affaiblie.",
    anecdotes: ["Classique des débats en ligne.", "Contre-pied : l'homme d'acier — reformuler au plus juste."],
  },
  {
    id: "statuquo", nom: "Biais du statu quo", latin: "Status quo bias · Samuelson & Zeckhauser, 1988",
    emoji: "🛋️", couleur: "#4a5a6a", categorie: "diurne", taille: "Antidote : imaginer qu'on choisit aujourd'hui",
    img: "", description: "Préférer ce qui existe déjà, par simple habitude, même quand une meilleure option est disponible.",
    anecdotes: ["Le « fait comme d'habitude » qui coûte cher.", "Tester : « Si je découvrais tout aujourd'hui, je choisirais quoi ? »"],
  },
  {
    id: "exposition", nom: "Simple exposition", latin: "Mere exposure effect · Zajonc, 1968",
    emoji: "💿", couleur: "#7a5c9a", categorie: "diurne", taille: "Antidote : juger la chose, pas sa familiarité",
    img: "", description: "À force d'être vu ou entendu, quelque chose nous plaît davantage — sans aucune autre raison.",
    anecdotes: ["Pourquoi les pubs passent en boucle.", "Une chanson « moyenne » devient favorite après quelques écoutes."],
  },
  {
    id: "controle", nom: "Illusion de contrôle", latin: "Illusion of control · Langer, 1975",
    emoji: "🎮", couleur: "#2a5a8a", categorie: "diurne", taille: "Antidote : distinguer habileté et hasard",
    img: "", description: "Croire qu'on maîtrise des événements purement aléatoires : lancer fort les dés pour faire un six !",
    anecdotes: ["Les loteries vendent le choix des numéros comme un pouvoir.", "Souffler sur les dés ne change pas les probabilités."],
  },
  {
    id: "groupe", nom: "Pensée de groupe", latin: "Groupthink · Janis, 1972",
    emoji: "🐑", couleur: "#6a7a3a", categorie: "nocturne", taille: "Antidote : garder un avocat du diable",
    img: "", description: "Dans un groupe soudé, l'envie d'être d'accord écrase le doute : personne n'ose dire « attention ».",
    anecdotes: ["Décisions célèbres ratées faute de contradiction.", "Une voix discordante améliore la décision collective."],
  },
  {
    id: "recence", nom: "Biais de récence", latin: "Recency bias",
    emoji: "⏱️", couleur: "#8a6a2a", categorie: "diurne", taille: "Antidote : regagner la vue d'ensemble",
    img: "", description: "Donner trop de poids aux derniers événements : la dernière réponse d'un élève colore toute sa note.",
    anecdotes: ["Après un accident médiatisé, tous les risques semblent imminents.", "Tenir un journal aide à se souvenir de tout, pas juste de la fin."],
  },
];

/* Toutes les découvertes : celles du parcours + le guide */
function allBirds() { return BIRDS.concat(GUIDE); }

/* Photo / illustration d'une découverte :
   img fournie sinon illustration locale (emoji/couleur). */
function birdPhoto(bird) {
  return (bird && bird.img) || (bird ? "" : "");
}

/* ---- Balises du parcours ------------------------------------------ */
/* Chaque balise propose 3 énigmes (facile / moyen / difficile).
   « enigme » reste l'énigme par défaut (moyen) pour compatibilité. */

const BALISES = [
  {
    id: "B1", bird: "confirmation", code: "JDP-B1",
    x: 74, y: 452,
    lat: 48.8566, lng: 2.3522,
    label: "La cabane à idées",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Je ne vois que les preuves qui me donnent raison, et je ferme les yeux sur les autres. Quel biais suis-je ?",
        reponses: ["confirmation", "biais de confirmation", "le biais de confirmation", "biais de confirmations"],
        indice: "Mon nom parle de « confirmer » une idée déjà en place.",
        saviez: "Peter Wason l'a démontré avec une suite de nombres : presque personne n'osait tester une hypothèse qui pouvait la détruire.",
      },
      moyen: {
        text: "Quand tu cherches des arguments, je ne te montre que ceux qui flattent ton opinion. Ton idée a toujours raison avec moi. Qui suis-je ?",
        reponses: ["confirmation", "biais de confirmation", "le biais de confirmation"],
        indice: "Je porte le nom d'un accord : « oui, oui, c'est confirmé ! »",
        saviez: "Les réseaux sociaux montrent surtout des contenus qui nous ressemblent : notre biais adore s'y nourrir.",
      },
      difficile: {
        text: "Née dans les laboratoires de Peter Wason en 1960, je fais tester les hypothèses dans un seul sens : celui qui arrange mon propriétaire. Quel biais suis-je ?",
        reponses: ["confirmation", "biais de confirmation", "le biais de confirmation"],
        indice: "Chercher à confirmer plutôt qu'à infirmer : me voilà.",
        saviez: "Le meilleur réflexe scientifique : essayer de se tromper. Une hypothèse qui survit à tous les tests gagne notre confiance.",
      },
    },
    enigme: null,
  },
  {
    id: "B2", bird: "ancrage", code: "JDP-B2",
    x: 148, y: 400,
    lat: 48.8567, lng: 2.3523,
    label: "Le quai des ancres",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Le premier nombre que tu entends me devient une chaîne : tes estimations restent accrochées dessus. Quel effet suis-je ?",
        reponses: ["ancrage", "effet d ancrage", "l effet d ancrage", "effet d'ancrage", "l'effet d'ancrage"],
        indice: "Mon nom vient du gros objet lourd qui empêche le bateau de bouger.",
        saviez: "Même un nombre tiré au sort sous vos yeux influence ensuite vos estimations : l'ancre tient bon.",
      },
      moyen: {
        text: "« Barré à 100 €, aujourd'hui 39 € ! » Grâce à moi, 100 € est resté dans ta tête et l'affaire te paraît imbattable. Qui suis-je ?",
        reponses: ["ancrage", "effet d ancrage", "l effet d ancrage", "effet d'ancrage", "l'effet d'ancrage"],
        indice: "Le prix barré sert de… point de départ à ton jugement.",
        saviez: "Kahneman et Tversky ont montré qu'une roue de loterie truquée changeait les estimations des participants, experts compris.",
      },
      difficile: {
        text: "Amiral des premiers chiffres, je mouille devant ta pensée : tout ce qui suit se mesure à ma chaîne, même quand je suis absurde. Nommez-moi.",
        reponses: ["ancrage", "effet d ancrage", "l effet d ancrage", "effet d'ancrage", "l'effet d'ancrage"],
        indice: "Tversky & Kahneman, 1974 : la première valeur capture l'estimation.",
        saviez: "En négociation, celui qui annonce le premier prix pose souvent l'ancre : connaître l'effet permet de le contrer.",
      },
    },
    enigme: null,
  },
  {
    id: "B3", bird: "disponibilite", code: "JDP-B3",
    x: 238, y: 292,
    lat: 48.8565, lng: 2.3521,
    label: "L'écran géant",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Ce que tu vois souvent aux infos te semble arriver tout le temps. Je juge la fréquence par la facilité de s'en souvenir. Quel biais suis-je ?",
        reponses: ["disponibilite", "biais de disponibilite", "le biais de disponibilite", "disponibilité", "biais de disponibilité", "le biais de disponibilité"],
        indice: "Mon nom parle de ce qui est facilement « disponible » dans ta mémoire.",
        saviez: "Après un accident d'avion médiatisé, beaucoup ont peur de voler… alors que la route reste bien plus risquée.",
      },
      moyen: {
        text: "Images choc, titres fracassants : je transforme les souvenirs faciles en statistiques imaginaires. Qui suis-je ?",
        reponses: ["disponibilite", "biais de disponibilite", "le biais de disponibilite", "disponibilité", "biais de disponibilité", "le biais de disponibilité"],
        indice: "Facile à retrouver en mémoire ≠ fréquent dans la réalité.",
        saviez: "Tversky et Kahneman (1973) : on estime la fréquence d'un mot selon la vitesse à laquelle on retrouve des exemples.",
      },
      difficile: {
        text: "Archiviste paresseux, je classe « fréquent » ce qui remonte vite à la surface, et « rare » ce que la mémoire peine à retrouver. Mon nom ?",
        reponses: ["disponibilite", "biais de disponibilite", "le biais de disponibilite", "disponibilité", "biais de disponibilité", "le biais de disponibilité"],
        indice: "Heuristique de… : la mémoire comme raccourci de jugement.",
        saviez: "L'antidote : demander les chiffres. Les vraies statistiques corrigent les impressions créées par les médias.",
      },
    },
    enigme: null,
  },
  {
    id: "B4", bird: "dunning", code: "JDP-B4",
    x: 320, y: 320,
    lat: 48.8568, lng: 2.3524,
    label: "La grande montagne russe",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Plus on débute, plus on se croit fort ; plus on apprend, plus on voit ses lacunes. Quel effet suis-je ?",
        reponses: ["dunning kruger", "effet dunning kruger", "l effet dunning kruger", "dunning-kruger", "effet dunning-kruger", "kruger dunning"],
        indice: "Mon nom est composé de deux noms de chercheurs.",
        saviez: "Chez les étudiants testés, les moins bons résultats s'accompagnaient des estimations les plus élevées.",
      },
      moyen: {
        text: "Je suis la bosse de confiance du débutant : elle monte vite, puis redescend à mesure que la vraie compétence apparaît. Qui suis-je ?",
        reponses: ["dunning kruger", "effet dunning kruger", "l effet dunning kruger", "dunning-kruger", "effet dunning-kruger"],
        indice: "Deux psychologues de Cornell, Kruger et Dunning, m'ont décrit en 1999.",
        saviez: "Courbe célèbre : la « vallée de la mort » arrive quand on réalise enfin tout ce qu'il reste à apprendre.",
      },
      difficile: {
        text: "Double incompétence : celle qui échoue, et celle qui ne permet pas de voir l'échec. Mes deux pères portent des noms de chercheurs. Qui suis-je ?",
        reponses: ["dunning kruger", "effet dunning kruger", "l effet dunning kruger", "dunning-kruger", "effet dunning-kruger"],
        indice: "Il faut être un minimum compétent pour mesurer son incompétence.",
        saviez: "L'humilité épistémique — savoir qu'on peut se tromper — est la marque des vrais experts.",
      },
    },
    enigme: null,
  },
  {
    id: "B5", bird: "cout", code: "JDP-B5",
    x: 406, y: 448,
    lat: 48.8564, lng: 2.3520,
    label: "Le puits aux pièces",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Tu continues un jeu ennuyeux juste parce que tu as déjà payé. L'argent perdu te pousse à en perdre plus. Quel sophisme suis-je ?",
        reponses: ["cout irrecuperable", "coût irrécupérable", "le coût irrécupérable", "sophisme du coût irrécupérable", "sunk cost"],
        indice: "Mon nom parle d'une dépense qui ne reviendra jamais.",
        saviez: "Restez jusqu'au bout d'un film nul « puisque le billet est payé » : classique ! Le billet ne reviendra pas pour autant.",
      },
      moyen: {
        text: "« J'ai déjà investi tant de temps, je ne peux pas arrêter maintenant ! » Je transforme le passé en prison. Qui suis-je ?",
        reponses: ["cout irrecuperable", "coût irrécupérable", "le coût irrécupérable", "sophisme du coût irrécupérable", "sunk cost"],
        indice: "Seuls les gains futurs devraient compter dans une décision.",
        saviez: "Le projet Concorde a été poursuivi des années « à cause des milliards déjà dépensés » : le sophisme porte aussi son nom.",
      },
      difficile: {
        text: "Comptable de l'impossible, j'exige qu'on paye deux fois la même erreur sous prétexte qu'elle a déjà coûté. Les économistes m'appellent sunk cost. Mon nom français ?",
        reponses: ["cout irrecuperable", "coût irrécupérable", "le coût irrécupérable", "sophisme du coût irrécupérable"],
        indice: "Irrécupérable : ce qui est perdu ne se récupère pas.",
        saviez: "La bonne question : « En partant de maintenant, quelle est la meilleure option ? » Le passé n'a pas de vote.",
      },
    },
    enigme: null,
  },
  {
    id: "B6", bird: "halo", code: "JDP-B6",
    x: 388, y: 396,
    lat: 48.8569, lng: 2.3525,
    label: "Le jardin lumineux",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Une seule qualité illumine tout : « Il est sympa, donc intelligent et honnête ! » Quel effet suis-je ?",
        reponses: ["halo", "effet halo", "l effet halo", "effet de halo"],
        indice: "Mon nom est le cercle de lumière que les peintres mettent autour des saints.",
        saviez: "Edward Thorndike l'a observé en 1920 : une bonne note d'un officier entraînait toutes les autres.",
      },
      moyen: {
        text: "Une star sourit à la télé et voilà qu'on croit que son produit est génial. Sa lumière colorie tout ce qu'elle touche. Qui suis-je ?",
        reponses: ["halo", "effet halo", "l effet halo", "effet de halo"],
        indice: "La publicité exploite la renommée : c'est mon royaume.",
        saviez: "À l'inverse, le « horn effect » (effet corne) : un seul défaut, et tout le dossier devient sombre.",
      },
      difficile: {
        text: "Auréole trompeuse, je fais déborder une vertu sur toutes les autres : jugez-moi en 1920 chez les officiers de Thorndike. Mon nom ?",
        reponses: ["halo", "effet halo", "l effet halo", "effet de halo"],
        indice: "Un rayon de lumière qui aveugle le jugement.",
        saviez: "Antidote : noter chaque critère séparément, avant de se faire une opinion globale.",
      },
    },
    enigme: null,
  },
  {
    id: "B7", bird: "verite", code: "JDP-B7",
    x: 320, y: 500,
    lat: 48.8570, lng: 2.3526,
    label: "L'écho sans fin",
    hintImg: "",
    enigmes: {
      facile: {
        text: "Répétée dix fois, une fausse information finit par paraître vraie. Quelle illusion suis-je ?",
        reponses: ["illusion de la verite", "l illusion de la verite", "verite illusoire", "illusion de vérité", "la illusion de la vérité", "vérité illusoire"],
        indice: "Mon nom associe « illusion » et une grande mot à 5 lettres : la vérité.",
        saviez: "Hasher, Goldstein et Toppino (1977) ont montré que la répétition suffit à créer un sentiment de vérité.",
      },
      moyen: {
        text: "Je ne suis ni preuve ni source : je ne suis qu'une répétition. Et pourtant, plus on m'entend, plus on me croit. Qui suis-je ?",
        reponses: ["illusion de la verite", "l illusion de la verite", "verite illusoire", "illusion de vérité", "vérité illusoire"],
        indice: "Les rumeurs prospèrent grâce à moi.",
        saviez: "Le réflexe : vérifier la source et la date avant de partager. Une répétition n'est pas une preuve.",
      },
      difficile: {
        text: "Sœur jumelle du mensonge, je gagne ma force à chaque écho. Trois chercheurs de 1977 m'ont donnée un nom. Lequel ?",
        reponses: ["illusion de la verite", "verite illusoire", "illusory truth"],
        indice: "Illusory truth effect en anglais.",
        saviez: "Même des gens avertis retombent dans le panneau : la familiarité agit avant la réflexion.",
      },
    },
    enigme: null,
  },
  {
    id: "B8", bird: "barnum", code: "JDP-B8",
    x: 148, y: 560,
    lat: 48.8571, lng: 2.3527,
    label: "La roulotte du devin",
    hintImg: "",
    enigmes: {
      facile: {
        text: "« Tu as besoin que les autres t'estiment, mais tu doutes de toi parfois. » Ça te ressemble ? À moi aussi ! Quel effet suis-je ?",
        reponses: ["barnum", "effet barnum", "l effet barnum", "forer", "effet forer"],
        indice: "Mon nom vient du directeur de cirque P.T. Barnum : un spectacle pour tous !",
        saviez: "En 1949, Bertram Forer a donné le même portrait astrologique à toute sa classe : note moyenne de vérité, 4/5 !",
      },
      moyen: {
        text: "Horoscopes et faux tests me servent de scène : mes phrases floues semblent faites sur mesure… pour tout le monde. Qui suis-je ?",
        reponses: ["barnum", "effet barnum", "l effet barnum", "forer", "effet forer"],
        indice: "Une description vague qui convient à presque tout le monde.",
        saviez: "Test Barnum : si la phrase marcherait pour n'importe qui, elle ne décrit personne en particulier.",
      },
      difficile: {
        text: "Charlatan des généralités, je peins des portraits universels que chacun prend pour son reflet. Mon second nom est celui du psychologue de 1949. Qui suis-je ?",
        reponses: ["barnum", "forer", "effet barnum", "effet forer"],
        indice: "Deux noms possibles : un cirque et un psychologue.",
        saviez: "L'antidote : exiger de la précision. Une vraie description personnelle comporte des détails vérifiables.",
      },
    },
    enigme: null,
  },
];

/* ---- Aide au parcours --------------------------------------------- */
const DIFFICULTIES = [
  { id: "facile", label: "Facile" },
  { id: "moyen", label: "Moyen" },
  { id: "difficile", label: "Difficile" },
];

function getBird(id) { return allBirds().find((b) => b.id === id); }
function getBalise(id) { return BALISES.find((b) => b.id === id); }
function getBaliseIndex(id) { return BALISES.findIndex((b) => b.id === id); }
function nextBalise(id) { const i = getBaliseIndex(id); return i >= 0 && i < BALISES.length - 1 ? BALISES[i + 1] : null; }

/* Retourne l'énigme d'une balise selon la difficulté choisie */
function getEnigme(balise, difficulty) {
  if (!balise) return null;
  const d = difficulty || "facile";
  if (balise.enigmes && balise.enigmes[d]) return balise.enigmes[d];
  return balise.enigme || null;
}

/* Normalisation d'une réponse : minuscules, sans accents ni espaces doubles */
function normalize(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[''\u2019]/g, " ").replace(/\s+/g, " ").trim();
}

function checkAnswer(enigme, answer) {
  const a = normalize(answer);
  if (!a) return false;
  return enigme.reponses.some((r) => normalize(r) === a || normalize(r) === a.replace(/^(le |la |un |une |l )/, ""));
}

/* Quiz ---------------------------------------------------------------- */
function makeQuiz(bird) {
  return bird.quiz.map((q, i) => {
    const entries = q.options.map((opt, j) => ({ opt, j }));
    entries.sort(() => Math.random() - 0.5);
    return {
      bird: bird.id,
      num: i,
      q: q.q,
      options: entries.map((e) => e.opt),
      reponse: entries.findIndex((e) => e.j === q.reponse),
    };
  });
}

/* ---- Surcharges éditables (admin-data.json) -------------------------
   Applique les modifications sauvegardées par l'éditeur (serveur ou god
   mode) sur les données de base. Mutate les structures SITE / TRAIL /
   BALISES / BIRDS / GUIDE.
   Supporte : modification, AJOUT (balises/découvertes absentes créés) et
   SUPPRESSION (removedBalises / removedBirds). Idempotent. */
function applyAdminData(admin) {
  if (!admin || typeof admin !== "object") return;

  /* --- 0) Suppressions --- */
  if (Array.isArray(admin.removedBirds)) {
    const gone = new Set(admin.removedBirds);
    for (let i = BIRDS.length - 1; i >= 0; i--) {
      if (gone.has(BIRDS[i].id)) BIRDS.splice(i, 1);
    }
    BALISES.forEach((b) => { if (gone.has(b.bird)) b.bird = ""; });
  }
  if (Array.isArray(admin.removedBalises)) {
    const gone = new Set(admin.removedBalises);
    for (let i = BALISES.length - 1; i >= 0; i--) {
      if (gone.has(BALISES[i].id)) BALISES.splice(i, 1);
    }
  }

  /* --- 1) Site (nom, rayon, centre, photos…) --- */
  if (admin.site && typeof admin.site === "object") {
    for (const k of Object.keys(admin.site)) {
      if (k === "center" && admin.site.center && typeof admin.site.center === "object") {
        if (admin.site.center.lat != null) SITE.center.lat = Number(admin.site.center.lat);
        if (admin.site.center.lng != null) SITE.center.lng = Number(admin.site.center.lng);
      } else if (SITE[k] !== undefined) {
        SITE[k] = admin.site[k];
      }
    }
  }
  if (admin.trail && typeof admin.trail === "object") {
    if (Array.isArray(admin.trail.path)) TRAIL.path = admin.trail.path;
    if (admin.trail.label) TRAIL.label = admin.trail.label;
  }
  if (admin.guide && typeof admin.guide === "object") {
    for (const id of Object.keys(admin.guide)) {
      const g = GUIDE.find((x) => x.id === id);
      if (!g) continue;
      const ov = admin.guide[id];
      if (ov && typeof ov === "object") {
        for (const k of Object.keys(ov)) g[k] = ov[k];
      }
    }
  }

  /* --- 2) Découvertes : création (id absent) + modification --- */
  if (admin.birds && typeof admin.birds === "object") {
    for (const id of Object.keys(admin.birds)) {
      const ov = admin.birds[id];
      if (!ov || typeof ov !== "object") continue;
      let bird = getBird(id);
      if (!bird) {
        bird = {
          id: id,
          nom: ov.nom || id,
          latin: ov.latin || "",
          emoji: ov.emoji || "🧠",
          couleur: ov.couleur || "#6a6a6a",
          categorie: ov.categorie || "diurne",
          taille: ov.taille || "?",
          img: ov.img || "",
          audioFile: ov.audioFile || null,
          anecdotes: Array.isArray(ov.anecdotes) ? ov.anecdotes.slice() : [],
          chant: ov.chant || null,
          quiz: Array.isArray(ov.quiz) ? ov.quiz.slice() : [],
        };
        BIRDS.push(bird);
      }
      for (const k of Object.keys(ov)) {
        if (k === "id") continue;
        if (k === "questions" && Array.isArray(ov.questions)) bird.quiz = ov.questions;
        else if (k === "anecdotes" && Array.isArray(ov.anecdotes)) bird.anecdotes = ov.anecdotes.slice();
        else if (k === "quiz" && Array.isArray(ov.quiz)) bird.quiz = ov.quiz.slice();
        else bird[k] = ov[k];
      }
    }
  }

  /* --- 3) Balises : création (id absent) + modification --- */
  if (admin.balises && typeof admin.balises === "object") {
    for (const id of Object.keys(admin.balises)) {
      const ov = admin.balises[id];
      if (!ov || typeof ov !== "object") continue;
      let bal = getBalise(id);
      if (!bal) {
        bal = {
          id: id,
          bird: ov.bird || "",
          code: ov.code || "JDP-" + String(id).toUpperCase(),
          x: (ov.x != null && isFinite(Number(ov.x))) ? Number(ov.x) : 200,
          y: (ov.y != null && isFinite(Number(ov.y))) ? Number(ov.y) : 400,
          lat: (ov.lat != null && isFinite(Number(ov.lat))) ? Number(ov.lat) : SITE.center.lat,
          lng: (ov.lng != null && isFinite(Number(ov.lng))) ? Number(ov.lng) : SITE.center.lng,
          label: ov.label || id,
          hintImg: ov.hintImg || "",
          enigmes: {},
          enigme: ov.enigme || null,
        };
        BALISES.push(bal);
      }
      for (const k of Object.keys(ov)) {
        if (k === "id") continue;
        if (k === "enigmes" && ov.enigmes && typeof ov.enigmes === "object") {
          if (!bal.enigmes) bal.enigmes = {};
          for (const diff of Object.keys(ov.enigmes)) {
            if (!bal.enigmes[diff]) bal.enigmes[diff] = {};
            const eo = ov.enigmes[diff];
            if (eo && typeof eo === "object") {
              for (const ek of Object.keys(eo)) {
                bal.enigmes[diff][ek] = eo[ek];
              }
            }
          }
        } else if ((k === "x" || k === "y" || k === "lat" || k === "lng") && ov[k] != null && isFinite(Number(ov[k]))) {
          bal[k] = Number(ov[k]);
        } else {
          bal[k] = ov[k];
        }
      }
    }
  }

  /* --- 4) Quiz : surcharge des questions d'une découverte --- */
  if (admin.quiz && typeof admin.quiz === "object") {
    for (const id of Object.keys(admin.quiz)) {
      const bird = getBird(id);
      if (!bird) continue;
      const ov = admin.quiz[id];
      if (ov && typeof ov === "object") {
        if (ov.q) { bird.quiz = [ov]; continue; }
        for (const k of Object.keys(ov)) {
          if (k === "questions" && Array.isArray(ov.questions)) bird.quiz = ov.questions;
          else bird[k] = ov[k];
        }
      }
    }
  }
}
