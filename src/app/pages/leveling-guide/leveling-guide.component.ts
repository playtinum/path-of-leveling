import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leveling-guide',
  standalone: true,
  imports: [CommonModule],
  template: `<p>leveling-guide works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelingGuideComponent {}
