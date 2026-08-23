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
5. Ouvrez une Pull Request décrivant le *pourquoi* de votre changement. La CI vérifie la syntaxe des modules.

## Proposer du contenu pédagogique

Le contenu vit dans `js/data.js` :
- **BIRDS** — les 8 découvertes du sentier (fiche : définition, antidote, 3 exemples, quiz)
- **GUIDE** — les notions complémentaires
- **BALISES** — positions, codes, énigmes

Deux options :
- passez par l'éditeur intégré (`/editeur`) et joignez le JSON exporté à votre issue/PR ;
- ou éditez `js/data.js` directement en respectant la structure existante.

Critères d'acceptation d'une nouvelle notion : définition exacte avec référence, antidote formulable par un enfant de 8 ans, exemples tirés du quotidien.

## Règles

- **Français uniquement** dans les chaînes visibles par l'utilisateur (les identifiants techniques historiques comme `BIRDS`, `chant` sont conservés — voir NOTICE.md).
- Aucune donnée personnelle, aucun appel réseau sortant nouveau sans discussion préalable (vie privée = principe fondateur).
- En soumettant une contribution, vous acceptez de la publier sous [AGPL-3.0](LICENSE) (code) et [CC BY-SA 4.0](LICENSE-DOCS.md) (contenus).
