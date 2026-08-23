# Contribuer à JDP_BC

Merci de votre intérêt ! Toutes les contributions sont bienvenues : corrections, nouvelles notions pédagogiques, énigmes, améliorations d'interface, documentation.

## Signaler un bug ou proposer une idée

Ouvrez une [issue](https://github.com/ducybrobin-ux/jpd/issues) en précisant :
- ce que vous faisiez et ce qui s'est passé ;
- navigateur + système (ex. Chrome 128 / Android 14) ;
- pour un bug GPS/audio : en intérieur ou extérieur ? casque ou haut-parleur ?

## Modifier le code

1. Forkez le dépôt puis créez une branche : `git checkout -b ma-branche`
2. Le projet est **sans build** : modifiez directement les fichiers (`js/`, `*.html`, `css/styles.css`).
3. Vérifiez la syntaxe de tous les modules avant de pousser :

   ```cmd
   for %f in (js\*.js) do node --check "%f"
   ```

4. Testez au moins : démarrage via `demarrer_serveur.cmd`, une balise complète (énigme → son → quiz), et le tableau de bord.
5. Ouvrez une Pull Request décrivant le *pourquoi* de votre changement. La CI vérifie la syntaxe des modules **et** la synchronisation `content/ ↔ js/data.js`.

## Proposer du contenu pédagogique (architecture modulaire)

Le contenu vit dans [`content/`](content/) — un fichier JSON par notion, avec métadonnées pédagogiques :

```
content/
  manifest.json                     packs actifs
  schemas/                          contrats JSON Schema (draft-07)
  packs/biais-cognitifs/
    pack.json                       identité du pack
    decouvertes/01-confirmation.json   … une fiche par biais du sentier
    guide/01-reciprocite.json          … les notions complémentaires
    balises/B1.json                    … énigmes par niveau + tranches d'âge
```

Chaque notion porte un bloc `pedagogie` :

```json
"pedagogie": {
  "ages": [6, 99],
  "duree_min": 8,
  "objectif": "Ce que l'enfant saura faire après la balise",
  "programme": ["cycle 3", "cycle 4", "lycée"]
}
```

et chaque niveau d'énigme sa tranche d'âge (`facile` 6-9 ans, `moyen` 10-13, `difficile` 14+) → le moteur peut adapter le parcours au profil.

### Ajouter ou modifier une notion — deux façons

**🧩 Avec l'atelier (recommandé, sans coder) :** ouvrez [`/atelier`](atelier.html) (« Atelier de packs », aussi depuis l'éditeur). Créez le pack 🆕 ou partez de l'exemple ✨, remplissez les fiches (objectifs pédagogiques et tranches d'âge incluses), cliquez 🔎 puis 📥. Installez ensuite le bundle :

```cmd
node tools/import-pack.mjs mon-pack.jdpbc.json --actif
node tools/build-data.mjs
```

**✏️ À la main :**

1. Créez/modifiez un fichier dans le pack (préfixe numérique = ordre d'affichage).
2. Respectez le schéma correspondant dans `content/schemas/`.
3. Régénérez et vérifiez :

   ```cmd
   node tools/build-data.mjs
   node tools/build-data.mjs --check
   ```

   (`js/data.js` est **généré** — ne l'éditez jamais à la main ; SITE/TRAIL restent modifiables directement.)

### Nouveau pack thématique ?

Dupliquez la structure d'un pack, changez `pack.json`, ajoutez-le à `manifest.json` avec `"actif": true`. Le moteur affiche ce que contiennent les packs actifs — rien d'autre.

Critères d'acceptation d'une nouvelle notion : définition exacte avec référence, antidote formulable par un enfant de 8 ans, exemples tirés du quotidien, objectif pédagogique explicite.

## Règles

- **Français uniquement** dans les chaînes visibles par l'utilisateur (les identifiants techniques historiques comme `BIRDS`, `chant` sont conservés — voir NOTICE.md).
- Aucune donnée personnelle, aucun appel réseau sortant nouveau sans discussion préalable (vie privée = principe fondateur).
- En soumettant une contribution, vous acceptez de la publier sous [AGPL-3.0](LICENSE) (code) et [CC BY-SA 4.0](LICENSE-DOCS.md) (contenus).
