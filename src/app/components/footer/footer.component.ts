import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
   <div class="bg-gradient-to-tl from-white via-gray-600 to-gray-900  py-20 px-6 flex justify-center font-bodoni">
     <p class="text-lg font-semibold text-gray-300 tracking-wide leading-relaxed drop-shadow-md">
       Ce portfolio est fait avec ❤️ et développé avec <span class="text-[#dd1b16] font-bold">Angular</span> 
       et <span class="text-[#06b6d4] font-bold">TailwindCSS</span>.
     </p>
   </div>
  `,
  styles: ``
})
export class FooterComponent {

}
