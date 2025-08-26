import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="min-h-screen py-20 px-6 flex justify-center">
      <div class="max-w-5xl w-full">
        <h2 class="text-6xl sm:text-4xl uppercase font-bold font-bodoni text-center mb-16 text-white">Mon parcours scolaire</h2>

        <div class="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:bg-gray-400">
          
          @for (event of timeline; track $index) {
            <div class="mb-12 flex justify-between items-center w-full" [class.flex-row-reverse]="$index % 2 === 0">
              <div class="w-5/12 bg-gray-100 p-6 rounded-lg shadow-md animate-slide-in"
                   [class.text-right]="$index % 2 === 0"
                   [class.text-left]="$index % 2 !== 0">
                <h3 class="text-xl font-semibold text-gray-600">{{ event.school }}</h3>
                <p class="mt-2 text-gray-800 font-medium">{{ event.title }}</p>
                <p class="mt-1 text-gray-700 text-sm uppercase">{{ event.mention }}</p>
                <p class="mt-1 text-gray-700 text-sm">{{ event.date }}</p>
              </div>
              <div class="w-5 flex justify-center z-10">
                <span class="w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-md"></span>
              </div>

              <div class="w-5/12"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-slide-in {
      animation: slideIn 0.8s ease-out both;
    }
  `]
})
export class AboutComponent {
  timeline = [
   
    {
      school: 'EFREI',
      date: '2022 - 2024 ',
      title: 'Master Full Stack Dev ',
      mention: 'Mention bien'
    },
    {
      school: 'EFREI',
      date: '2021 - 2022 ',
      title: 'Bachelor Concepteur dev full stack ',
      mention:''
    },
    {
      school: 'UVSQ',
      date: '2018 - 2019',
      title: 'Licence Pro Communication et systèmes embarqués',
      mention: 'Mention bien'
    },
    {
      school: 'Lycée Gustave Monod',
      date: '2015 - 2017',
      title: 'BTS Electrotechnique option sécurité ferroviaire',
      mention:''
    }
  ];
}