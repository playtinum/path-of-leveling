import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div class="relative min-h-screen grid grid-rows-layout grid-flow-col overflow-hidden bg-gray-50 dark:bg-stone-800 dark:text-slate-300">
      <!--navbar-->
      <nav class="bg-gray-200 dark:bg-stone-900 w-full h-16 shadow-md"></nav>
      <main class=""></main>
      <footer class="bg-gray-200 dark:bg-stone-900 w-full h-8 shadow-md"></footer>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
