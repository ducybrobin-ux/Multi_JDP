# JDP_BC — Jeu de piste Biais Cognitif

**JDP_BC** est une application web progressive (PWA) 100 % française qui transforme un sentier en parcours de lucidité : huit balises, huit pièges mentaux (biais cognitifs) à démasquer en famille, avec énigmes, quiz, boussole, indices sonores d'approche et tableau de bord organisateur.

> Œuvre dérivée de l'application TSLE1 « La toile sous les étoiles » — voir [NOTICE.md](NOTICE.md).

## Fonctionnalités

- 🗺️ **Carte du sentier** interactive avec GPS, boussole et indice lumineux d'approche
- 🔐 **Validation des balises** : QR code, code saisi ou distance GPS
- 🧠 **8 pièges du sentier** : confirmation, ancrage, disponibilité, Dunning-Kruger, coût irrécupérable, halo, illusion de la vérité, effet Barnum — chacun avec antidote, exemples et quiz à 3 niveaux de difficulté
- 📚 **Guide des découvertes** : 10 notions supplémentaires (réciprocité, erreur du joueur, apophénie…)
- 🔔 **Avertisseur d'approche au choix** : signature sonore de la découverte, radar, bip-bip, pulsation — ou **votre propre enregistrement micro** (5 s)
- 🎵 **Signatures sonores synthétiques** (Web Audio) dont le rythme s'accélère à l'approche de la balise
- 🌙 Mode nuit, mode course chronométrée, palmarès hebdomadaire, carnet de terrain
- ♿ Accessibilité : dictée vocale, lecture d'écran, contrastes nuit
- 📄 **Fiche pédagogique PDF** générée depuis les données du jeu ([docs/fiche-pedagogique-JDP_BC.pdf](docs/fiche-pedagogique-JDP_BC.pdf)), disponible hors-ligne dans l'app (écran Guide)
- 🏠 **Tableau de bord organisateur** : messages aux équipes, épreuves en direct, suivi GPS, urgences, QR d'accès imprimables

## Démarrage rapide

```cmd
demarrer_serveur.cmd
```

Puis acceptez le certificat auto-signé au premier accès (requis pour GPS et caméra), et connectez les téléphones sur `https://<ip-du-pc>:8080` ou via le tunnel public cloudflared.

- Écran familles : `/` (index.html)
- Tableau de bord organisateur : `/dashboard`
- Éditeur de contenu : `/editeur`

Aucune dépendance à installer : tout fonctionne en local (PowerShell + navigateur).

## Structure

```
index.html          écran familles
dashboard.html      tableau de bord organisateur
editeur.html        éditeur de contenu (site, balises, découvertes, quiz)
questionnaire.html  questionnaire testeurs
js/                 data, moteur audio, boussole, QR, reconnaissance sonore, i18n…
css/styles.css      styles (thème jour/nuit)
audio/              fichiers audio optionnels
docs/               fiche pédagogique PDF
server.ps1          serveur HTTPS local (+ tunnel cloudflared optionnel)
sw.js               service worker (mode hors-ligne complet)
```

## Licences

- Code : [GNU AGPL-3.0](LICENSE)
- Documentation & contenus : [CC BY-SA 4.0](LICENSE-DOCS.md) — voir [NOTICE.md](NOTICE.md) pour la provenance et ce qui est exclu.
