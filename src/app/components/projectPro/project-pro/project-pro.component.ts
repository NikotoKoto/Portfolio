import { Component } from '@angular/core';

@Component({
  selector: 'app-project-pro',
  imports: [],
  template: `
     <section id="projectsPro" class=" bg-gradient-to-tl from-white via-gray-600 to-gray-900 text-black py-20 px-6 flex justify-center">
      <div class="max-w-6xl w-full">
        <h2 class="text-6xl sm:text-4xl uppercase font-bold font-bodoni text-center mb-16 text-white">Projets Professionnels</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          @for (project of projects; track $index) {
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-gray-400 animate-slide-in">
              <h3 class="text-2xl font-bold text-gray-600 mb-2">{{ project.title }}</h3>
              <p class="text-sm font-bodoni text-gray-600 italic mb-2">{{ project.stack }}</p>
              <ul class="list-disc pl-5 space-y-2 text-gray-800">
                @for (task of project.tasks; track $index) {
                  <li>{{ task }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class ProjectProComponent {
  projects = [
    {
      title: 'Application d’évaluation des compétences techniques',
      stack: 'Angular 19 • Spring Boot 3 • PostgreSQL • JWT • JUnit • Jest',
      tasks: [
        'Conception de l’architecture front/back selon les principes SOLID',
        'Développement Angular avec routing, reactive forms et services',
        'Création des APIs REST sécurisées (Spring Boot)',
        'Gestion des exceptions, validation, repository/service layer',
        'Modélisation et gestion de la base PostgreSQL',
        'Authentification via JWT',
        'Tests unitaires Jest (Angular) et JUnit (Java)',
        'Versioning via Git'
      ]    },
    {
      title: 'Site e-commerce',
      stack: 'React.js • Node.js • Express.js • MongoDB • JWT • OAuth2',
      tasks: [
        'Développement React (Hooks, Context API, Router)',
        'APIs REST Node/Express avec middleware de sécurité',
        'Base MongoDB avec Mongoose : schémas et agrégations',
        'Authentification via JWT / OAuth2',
        'CRUD produits, panier dynamique, interface admin',
        'Méthodologie Gitflow et déploiement staging'
      ]    },
    {
      title: 'Spécifications migration base de données (Offre produit)',
      stack: 'Scrum • UML • SQL • MCD • Atelier métier',
      tasks: [
        'Recueil et analyse des besoins métier via ateliers avec les parties prenantes',
        'Rédaction des spécifications fonctionnelles : user stories, cas d’usage, diagrammes UML',
        'Spécifications techniques : modèle de données cible, mapping de migration',
        'Proposition d’une stratégie de migration incrémentale',
        'Collaboration en mode Agile (Scrum) : sprint planning, daily, revues techniques'
      ]    },
    {
      title: 'Site web 5G-mMTC',
      stack: 'React.js • Node.js • Express.js • GitHub Actions • CI/CD',
      tasks: [
        'Conception d’un site vitrine interactif avec React.js (Hooks, responsive, routing)',
        'Navigation fluide optimisée (lazy loading, code splitting)',
        'Back-end Node.js avec Express : gestion des contenus, sécurisation CORS/HTTPS',
        'Intégration continue et déploiement via GitHub Actions'
      ]
    }
  ];
}