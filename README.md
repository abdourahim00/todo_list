# Application Web ToDo List – Projet Collaboratif Dockerisé

## Objectif :

Ce projet collaboratif vise à :
- Développer une application web de gestion de tâches.
- Utiliser Git de manière structurée (branches, PR, historique).
- Déployer l'application dans une architecture Docker avec MySQL.
- Documenter clairement le processus de réalisation.

---

## 👥 Équipe projet (5 membres)

| Nom                         | Rôle |
|----------------------------|------|
| **Abdourahim DIOUF**       | Responsable Git et Docker, création du projet et des branches |
| **Papa Samba DOUCOURÉ**    | Responsable de la branche `develop`, développement Front-End et coordination |
| **Babacar DIAGNE**         | Développement Back-End PHP et gestion de la base de données |
| **Maxim ETSE SOMANA**      | Développement Back-End PHP et gestion de la base de données |
| **Abdou Rahim MOUKAILA**   | Intégration JavaScript pour la communication front ↔ back |

---

## Technologies utilisées

- **Front-End** : HTML, CSS, JavaScript
- **Back-End** : PHP
- **Base de données** : MySQL
- **Outils DevOps** : Docker, Docker Compose
- **Interface BDD** : phpMyAdmin
- **Contrôle de version** : Git + GitHub

---

## Organisation Git

- main : branche de production finale
- infrastructure : configuration Docker et BDD
- develop : développement de l'application web

Chaque membre a travaillé sur une branche ou une partie spécifique avec des commits clairs et des pull requests coordonnées, puis une fusion propre a été faite vers main.


## Étapes de réalisation du projet

### Étape 1 : Création de l’interface de base
- Mise en place de la structure HTML/CSS.
- Première version visuelle de la page principale.

### Étape 2 : Développement des fonctionnalités principales
- Ajout de l’interface de consultation des tâches.
- Création des interfaces pour 'ajout', 'modification', 'suppression' des tâches.

### Étape 3 : Intégration BDD + Dockerisation
- Création de la base de données MySQL (todo_db avec table tasks).
- Développement des fichiers PHP pour CRUD + connexion MySQL.
- Intégration JS pour assurer la communication entre le front et le back sans rechargement.
- Modification du docker-compose.yml pour déployer :
  - App PHP
  - MySQL
  - phpMyAdmin
- Tests complets et merge final dans `main`.

---

## Lancement du projet (instructions Docker)

### Prérequis
- Docker installé
- Docker Compose installé

### Clonage du dépôt

```bash / CMD
git clone https://github.com/abdourahim00/todo_list
cd todo_list


### Build du projet
docker-compose up --build

### Lancer le projet avec le lien 
http://localhost:8080/