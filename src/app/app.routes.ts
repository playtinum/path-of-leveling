import { Route } from '@angular/router';
import { LevelingGuideComponent } from './pages/leveling-guide/leveling-guide.component';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./layout/shell.routes')
    }
];
