# 🔥 Multi JDP — Jeux de piste éducatifs

[![CI](https://github.com/ducybrobin-ux/Multi_JDP/actions/workflows/ci.yml/badge.svg)](https://github.com/ducybrobin-ux/Multi_JDP/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-2.0.0-blue)](../../releases)
[![Code : AGPL‑3.0](https://img.shields.io/badge/code-AGPL--3.0-blueviolet)](LICENSE)
[![Docs : CC BY-SA 4.0](https://img.shields.io/badge/docs-CC%20BY%20SA%204.0-orange)](LICENSE-DOCS.md)
[![PRs bienvenues](https://img.shields.io/badge/PRs-bienvenues-success)](CONTRIBUTING.md)

**Multi JDP** est une plateforme web progressive (PWA) 100 % française qui transforme un sentier en parcours éducatif modulaire : balises à valider par QR code ou GPS, énigmes et quiz par tranche d'âge, signatures sonores, guide des découvertes et tableau de bord organisateur. Le contenu pédagogique est organisé en **packs activables**, combinables dans un même parcours :

| Pack | Statut | Contenu |
|---|---|---|
| 🧠 `biais-cognitifs` | ✅ Actif | 8 pièges mentaux (confirmation, ancrage, disponibilité…) + 10 notions du guide |
| 🤝 `cemea-education-populaire` | ✅ Actif | Éducation populaire & mouvement CEMÉA : histoire, métiers de l'animation, anecdotes |
| 🛡️ `harcelement-scolaire` | 📦 Prêt (désactivé) | Briser le silence, spectateurs, cyberharcèlement, défenseurs — cycle 3/4 |
| 🚜 `metiers-tension` | 📦 Prêt (désactivé) | 8 métiers en tension + orientation, apprentissage, stage de 3e |

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
| 🎮 **Démo en ligne** | <https://ducybrobin-ux.github.io/Multi_JDP/> | Consultation de l'app et des fiches ; GPS selon le navigateur ; pas de tableau de bord temps réel |
| 🏠 **Partie complète** | Serveur local (voir ci-dessous) | Tout fonctionne : GPS, QR, sons, dashboard, urgences |

> 💡 Installez l'app sur votre téléphone (« Ajouter à l'écran d'accueil ») puis « ⬇️ Préparer le mode hors-ligne » dans Réglages.

## Fonctionnalités

- 🗺️ **Carte du sentier** interactive avec GPS, boussole et indice lumineux d'approche
- 🔐 **Validation des balises** : QR code, code saisi ou distance GPS
- 🧩 **Packs modulaires** : chaque notion vit dans un fichier JSON avec âges, durée, objectif et programme scolaire ; activez/désactivez les packs dans `content/manifest.json`
- 🎨 **Thèmes visuels** (Nuit étoilée, Nature, Espace, Futuriste, Rétro) protégés par un mot de passe organisateur (par défaut `Sam`, configurable dans Réglages)
- 📚 **Guide des découvertes** : toutes les notions des packs actifs, consultables hors-ligne
- 🔔 **Avertisseur d'approche au choix** : signature sonore de la découverte, radar, bip-bip, pulsation — ou **votre propre enregistrement micro** (5 s)
- 🌙 Mode nuit, mode course chronométrée, palmarès hebdomadaire, carnet de terrain
- ♿ Accessibilité : dictée vocale, lecture d'écran, contrastes nuit
- 📄 **Fiche pédagogique PDF** générée depuis les données du jeu ([docs/fiche-pedagogique-JDP_BC.pdf](docs/fiche-pedagogique-JDP_BC.pdf)), disponible hors-ligne dans l'app (écran Guide)
- 🏠 **Tableau de bord organisateur** : messages aux équipes, épreuves en direct, suivi GPS, urgences, QR d'accès imprimables
- ✍️ **Éditeur intégré** (`/editeur`) pour adapter site, balises, énigmes, quiz et guide — export/import JSON
- 🧩 **Atelier de packs** (`/atelier`) : créez votre propre pack depuis le navigateur, sans coder, puis importez-le

## Démarrage rapide

```cmd
demarrer_serveur.cmd
```

Puis acceptez le certificat auto-signé au premier accès (requis pour GPS et caméra), et connectez les téléphones sur `https://<ip-du-pc>:8080` ou via le tunnel public cloudflared.

- Écran familles : `/` (index.html)
- Tableau de bord organisateur : `/dashboard`
- Éditeur de contenu : `/editeur`
- Atelier de packs : `/atelier`

Aucune dépendance à installer : tout fonctionne en local (PowerShell + navigateur).

## Structure

```
index.html          écran familles
dashboard.html      tableau de bord organisateur
editeur.html        éditeur de contenu (site, balises, découvertes, quiz)
atelier.html        atelier de création de packs (export bundle → import-pack)
questionnaire.html  questionnaire testeurs
content/            CONTENU MODULAIRE : packs JSON par notion (+ schémas + bundles + thèmes)
  manifest.json       liste des packs actifs
  packs/biais-cognitifs/            pack pièges de l'esprit
  packs/cemea-education-populaire/  pack éducation populaire
  packs/harcelement-scolaire/       module cycle 3/4 (désactivé)
  packs/metiers-tension/            module orientation 3e (désactivé)
  bundles/            bundle complet par pack (ouvert dans l'atelier)
  schemas/            contrats JSON Schema (draft-07)
  themes/             thèmes visuels (JSON)
js/                 moteur : data (généré), audio, boussole, QR, i18n…
tools/              build-data.mjs · import-pack.mjs · split-content.mjs
css/styles.css      styles (thème jour/nuit + thèmes)
audio/              fichiers audio optionnels
docs/               fiche pédagogique PDF
server.ps1          serveur HTTPS local (+ tunnel cloudflared optionnel)
sw.js               service worker (mode hors-ligne complet)
```

## Documentation

- 📖 **Wiki** : [github.com/ducybrobin-ux/jpd/wiki](https://github.com/ducybrobin-ux/jpd/wiki) — installation détaillée, règles, fiches des notions, guide organisateur, architecture technique, FAQ
- 📄 **Fiche pédagogique PDF** : [`docs/fiche-pedagogique-JDP_BC.pdf`](docs/fiche-pedagogique-JDP_BC.pdf)
- 🤝 **Pack CEMÉA** : contenu inspiré des pages publiques de [cemea-npdc.org](https://www.cemea-npdc.org/) et [cemea.asso.fr](https://www.cemea.asso.fr/) (faits historiques et pédagogiques uniquement ; logo et marque non reproduits)

## Contribuer

Les contributions sont bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) : signalement de bugs, propositions de notions, de packs ou d'énigmes, traductions… Le contenu pédagogique vit dans [`content/`](content/) (packs JSON modulaires, un fichier par notion, avec métadonnées d'âge et objectifs) ; la CI vérifie la syntaxe et la synchronisation avec `js/data.js`.

## Licences

- Code : [GNU AGPL-3.0](LICENSE)
- Documentation & contenus : [CC BY-SA 4.0](LICENSE-DOCS.md) — voir [NOTICE.md](NOTICE.md) pour la provenance et ce qui est exclu.
