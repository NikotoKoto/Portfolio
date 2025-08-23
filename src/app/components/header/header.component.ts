import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div
      class="relative min-h-screen bg-gradient-to-tl from-white via-gray-600 to-gray-900 px-4 py-10 flex flex-col items-center justify-center text-white"
    >
      
      <div class="absolute top-6 left-0 right-0 flex justify-center gap-8 text-xl">
        @for (s of socials; track $index) {
        <a
          [href]="s.url"
          target="_blank"
          [attr.aria-label]="s.name"
          class="hover:text-blue-300 transition"
        >
          {{ s.icon }} {{ s.name }}
        </a>
        }
      </div>


      <h1 class="mt-10 text-9xl sm:text-9xl font-bold uppercase tracking-wide text-center drop-shadow mb-16 font-bodoni">
        Nicolas Floris
      </h1>


      <div class="grid grid-cols-12 gap-8 w-full max-w-7xl">


        <div class="col-span-12 md:col-span-5 bg-white/10 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-white">
          <img
            src="assets/images/NicolasFloris.jpg"
            alt="Nicolas Floris"
            class="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-white shadow-md mb-6"/>
            <p class="text-lg leading-relaxed text-justify">
          Je m'appelle <strong>Nicolas Floris</strong>, j'ai 29 ans.  
Fraîchement diplômé d’un <strong>Master Développeur Manager Full Stack</strong> à l'<strong>EFREI</strong>, je suis à la recherche de ma première opportunité en tant que développeur full stack junior <strong>AngularJS / Java</strong>, dans un environnement dynamique où je pourrai mettre à profit mes compétences et continuer à apprendre auprès d’une équipe expérimentée.
<br /><br />
 Passionné par les <strong>sports de combat</strong> 🥋, la <strong>musculation</strong> 🏋️‍♂️, je cultive rigueur, discipline et persévérance — des qualités que je mets aussi au service de ma carrière.
      </p>       
</div>

        <ul class="col-span-12 md:col-span-7 flex flex-wrap justify-center items-center gap-6">
    @for (n of nav; track $index) {
      <li>
        <a
          [href]="n.href"
          class="block w-52 h-36 sm:w-64 sm:h-40 bg-cover bg-center rounded-xl shadow-xl overflow-hidden relative group transition-transform duration-300 hover:scale-105"
          [style]="{ 'background-image': 'url('  + ')' }"
        >
          <div
            class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300"
          ></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <span
              class="text-white font-bodoni uppercase text-xl font-semibold drop-shadow-md text-center"
            >
              {{ n.name }}
            </span>
          </div>
        </a>
      </li>
    }
  </ul>

      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  nav = [
    {
      href: '#about',
      name: 'Mon parcours',
      
    },
    {
      href: '#projectsPro',
      name: 'Mes projets pro',
      
    },
    {
      href: '#projectsPerso',
      name: 'Mes projets perso',
      
    },
   
  ];

  socials = [
    {
      name: 'Github',
      url: 'https://github.com/NikotoKoto',
      icon: '🐙',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nicolas-floris/',
      icon: '💼',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nicolasfloris',
      icon: '🐦',
    },
  ];
}