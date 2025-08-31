import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MenuComponent } from './pages/menu/menu';
import { PaoGraos } from './pages/comidas/pao-graos/pao-graos';
import { SaladaLegumes } from './pages/comidas/salada-legumes/salada-legumes';
import { SopaAbobora } from './pages/comidas/sopa-abobora/sopa-abobora';
import { SucoCenoura } from './pages/refrescos/suco-cenoura/suco-cenoura';
import { SucoManga } from './pages/refrescos/suco-manga/suco-manga';
import { SucoMelancia } from './pages/refrescos/suco-melancia/suco-melancia';
import { PanquecaChocolate } from './pages/doces/panqueca-chocolate/panqueca-chocolate';
import { GeleiaPessego } from './pages/doces/geleia-pessego/geleia-pessego';
import { BiscoitoCanela } from './pages/doces/biscoito-canela/biscoito-canela';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu', component: MenuComponent},

  { path: 'receita/pao-com-graos', component: PaoGraos },
  { path: 'receita/salada-legumes', component: SaladaLegumes },
  { path: 'receita/sopa-abobora', component: SopaAbobora },

  { path: 'receita/suco-manga', component: SucoManga },
  { path: 'receita/suco-melancia', component: SucoMelancia },
  { path: 'receita/suco-cenoura', component: SucoCenoura },

  { path: 'receita/biscoito-canela', component: BiscoitoCanela },
  { path: 'receita/geleia-pessego', component: GeleiaPessego },
  { path: 'receita/panqueca-chocolate', component: PanquecaChocolate },
];
