# Journal des modifications

Toutes les évolutions notables de JDP_BC sont documentées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) — versionnement sémantique.

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
