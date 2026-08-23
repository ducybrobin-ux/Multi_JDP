# Journal des modifications

Toutes les évolutions notables de JDP_BC sont documentées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) — versionnement sémantique.

## [1.1.1] — 2026-08-23

### Ajouté
- **Atelier de packs** (`atelier.html` + `js/atelier.js`) : application embarquée de création de contenu — pack metadata, découvertes avec quiz et objectifs pédagogiques, notions du guide, balises avec énigmes par niveau d'âge, validation en direct, export/import de bundles
- `tools/import-pack.mjs` : installe un bundle exporté par l'atelier (validation, éclatement en fichiers, mise à jour du manifest)
- `tools/build-data.mjs` génère désormais aussi `content/bundles/<id>.json` (bundle complet par pack, ouvrable dans l'atelier)
- Lien « Atelier de packs » dans l'éditeur ; atelier préchargé hors-ligne (cache SW v2)

## [1.1.0] — 2026-08-23

### Ajouté
- **Architecture de contenu modulaire** : le contenu pédagogique vit dans `content/` — un fichier JSON par notion (8 découvertes, 10 notions du guide, 8 balises), regroupés en packs activables via `manifest.json`
- Métadonnées pédagogiques par notion : `ages`, `duree_min`, `objectif`, `programme` ; tranches d'âge par niveau d'énigme (facile 6-9, moyen 10-13, difficile 14+)
- Schémas JSON Schema (draft-07) dans `content/schemas/` comme contrat pour les contributions
- `tools/build-data.mjs` : régénération validée de `js/data.js` depuis les packs + mode `--check` (contrôle de synchronisation exécuté en CI)
- `tools/split-content.mjs` : migration one-shot de l'ancien `data.js` monolithique vers les packs

### Modifié
- `js/data.js` : la région contenu est désormais générée (marqueurs explicites) ; SITE, TRAIL et les fonctions moteur restent manuels

### Compatibilité
- Aucun changement d'interface runtime : éditeur, serveur, PDF et PWA fonctionnent à l'identique

## [1.0.0] — 2026-08-23

### Ajouté
- Jeu complet : 8 balises sur le sentier, 8 pièges cognitifs (énigmes, quiz 3 niveaux, antidotes), guide de 10 notions supplémentaires
- Avertisseur d'approche au choix : signature sonore, radar, bip-bip, pulsation — ou enregistrement micro personnalisé (5 s max)
- Fiche pédagogique PDF (4 pages) générée depuis les données du jeu, consultable hors-ligne depuis l'écran Guide
- Tableau de bord organisateur : messages aux équipes, épreuves en direct (enquête, son, observation, rapidité), suivi GPS, panneau urgences, affiche QR Wi-Fi + jeu imprimable
- Éditeur intégré (`/editeur`) : site, balises, découvertes, quiz, guide — export/import JSON
- Modes classique / aléatoire / course chronométrée ; palmarès hebdomadaire ; carnet de terrain ; livre d'or avec selfie
- Mode hors-ligne complet via service worker (`jdpbc-*`)
- Serveur local HTTPS PowerShell (`server.ps1`) avec tunnel cloudflared optionnel
- Accessibilité : dictée vocale, lecture d'écran, mode nuit
- Démo statique sur GitHub Pages

### Dérivation
- Œuvre dérivée de TSLE1 « La toile sous les étoiles » (ornithologie) : mécanique de jeu conservée, thème remplacé par les biais cognitifs, interface entièrement francisée — voir NOTICE.md

[1.0.0]: https://github.com/ducybrobin-ux/jpd/releases/tag/v1.0.0
