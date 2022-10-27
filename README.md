# code de base pour TP (et future SAE 301)

- **Nom :** Daboub
- **Prénom :** Mohamed
- **URL maquette Figma:** https://www.figma.com/file/4KbBO8sJvEL0eje3Y9FdkM/SAE301?node-id=1%3A45
- **URL publique du site :**
- **URL projet Supabase :** db.azbrdgwwpwkbiymlogmh.supabase.co
  - [x] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [x] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MCD.pdf](/MCD.pdf) [https://github.com/MMI-SAE-301/sae-301-2022-MohamedDaboub/commit/376691847b0b68c10b72436ed43b50e2d6bce3b0])
- [x] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [x] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :
[vers des fichiers](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files) ou page d'un commit sur Github.

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
  - Ne cochez que ce que vous avez fait.
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [x] usage de Classes utilitaires (1pt)
  - lien vers sa définition[text-shadow](/src/index.css#L8)
  - lien vers son usage [text-shadow](/src/pages/Connexion.vue#L18)
- [x] Composants graphiques (0-1-2pts)
  - liens[Header](/src/components/header.vue)
- Technique CSS (0-1-2pts)
  - Quelles techniques (Eg. Styles graphiques (répétés) tous ajoutés par CSS et/ou
    config. Tailwind (eg. before/after avec content, background...))
    - ...
  - liens
- Mise en page CSS (0-1-2pts)
  - Quelles techniques (Grilles Flex...)
    - ...
  - liens Flex[flex](/src/pages/index.vue#L53) Grid[Grid](/src/pages/Inspirations.vue#L9)
  - [x] Mise en page fluide
- [x] Mobile First (0-1-2pts)
  - [x] Plusieurs tailles
    - Lesquelles... [XS](/src/components/Footer.vue#L21),[md](/src/components/Footer.vue#L21),[lg](/src/components/Footer.vue#L22)
- [x] Dark Mode (0-1-2pts)
  - [x] Simple usage de 'dark:'
  - [x] Mise en place avec usage de custom property pour les couleurs. Ou usage de DaisyUI AVEC thèmes perso
    - liens [Light Simple](/src/components/Footer.vue#L25) [en Place](/src/index.css#L17)
- "tailwin.config.js" (0-1-2pts)
  - [x] usage basique couleurs/fonts
  - [x] Comporte des données supplémentaires (utilisées !). Eg: "content-xxx", "bg-xxx", "grid-cols-xxx"...
    - liens [grid-cols-xxx](/src/pages/Inspirations.vue#L9)
- Composants "accessibles" (0-1-2pts)
  - [x] textes "accessibles" (eg. 'sr-only')[sr-only](/src/components/header.vue#12)
  - [x] Contenu accessible ET Usage de composants étudié pour accessibilité (Eg. HeadlessUI)[HeadlessUI](/src/components/FormMontre.vue#L126)
- lien de problem id [id-Problem](/src/components/FormMontre.vue#L66)1er
  - 2er[id-Problem](/src/components/Formpaye.vue#L64)

[^1]: Supprimez les mentions inutiles.
