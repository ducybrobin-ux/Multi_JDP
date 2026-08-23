# 🧠 JDP_BC — Jeu de piste Biais Cognitif

[![CI](https://github.com/ducybrobin-ux/jpd/actions/workflows/ci.yml/badge.svg)](https://github.com/ducybrobin-ux/jpd/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](../../releases)
[![Code : AGPL‑3.0](https://img.shields.io/badge/code-AGPL--3.0-blueviolet)](LICENSE)
[![Docs : CC BY-SA 4.0](https://img.shields.io/badge/docs-CC%20BY%20SA%204.0-orange)](LICENSE-DOCS.md)
[![PRs bienvenues](https://img.shields.io/badge/PRs-bienvenues-success)](CONTRIBUTING.md)

**JDP_BC** est une application web progressive (PWA) 100 % française qui transforme un sentier en parcours de lucidité : huit balises, huit pièges mentaux (biais cognitifs) à démasquer en famille, avec énigmes, quiz, boussole, indices sonores d'approche et tableau de bord organisateur.

> Œuvre dérivée de l'application TSLE1 « La toile sous les étoiles » — voir [NOTICE.md](NOTICE.md).

## Sommaire

- [Essayer](#essayer)
- [Fonctionnalités](#fonctionnalités)
- [Démarrage rapide](#démarrage-rapide)
- [Structure](#structure)
- [Documentation](#documentation)
- [Contribuer](#contribuer)
- [Licences](#licences)

## Essayer

| Mode | Lien | Limites |
|---|---|---|
| 🎮 **Démo en ligne** | <https://ducybrobin-ux.github.io/jpd/> | Consultation de l'app et des fiches ; GPS selon le navigateur ; pas de tableau de bord temps réel |
| 🏠 **Partie complète** | Serveur local (voir ci-dessous) | Tout fonctionne : GPS, QR, sons, dashboard, urgences |

> 💡 Installez l'app sur votre téléphone (« Ajouter à l'écran d'accueil ») puis « ⬇️ Préparer le mode hors-ligne » dans Réglages.

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
- ✍️ **Éditeur intégré** (`/editeur`) pour adapter site, balises, énigmes, quiz et guide — export/import JSON

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
docs/               fiche pédagogique PDF + sources du wiki
server.ps1          serveur HTTPS local (+ tunnel cloudflared optionnel)
sw.js               service worker (mode hors-ligne complet)
```

## Documentation

- 📖 **Wiki** : [github.com/ducybrobin-ux/jpd/wiki](https://github.com/ducybrobin-ux/jpd/wiki) — installation détaillée, règles, fiches des 8 biais et 10 notions, guide organisateur, architecture technique, FAQ
- 📄 **Fiche pédagogique PDF** : [`docs/fiche-pedagogique-JDP_BC.pdf`](docs/fiche-pedagogique-JDP_BC.pdf)
- ❓ Questions fréquentes : [FAQ du wiki](https://github.com/ducybrobin-ux/jpd/wiki/FAQ)

## Contribuer

Les contributions sont bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) : signalement de bugs, propositions de notions ou d'énigmes, traductions… Chaque modification passe par la CI (vérification syntaxique des modules).

## Licences

- Code : [GNU AGPL-3.0](LICENSE)
- Documentation & contenus : [CC BY-SA 4.0](LICENSE-DOCS.md) — voir [NOTICE.md](NOTICE.md) pour la provenance et ce qui est exclu.
