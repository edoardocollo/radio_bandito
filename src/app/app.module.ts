import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/pages/home/home.component';
import { PalinsestoComponent } from './content/pages/palinsesto/palinsesto.component';
import { ProgrammiComponent } from './content/pages/programmi/programmi.component';
import { PodcastComponent } from './content/pages/podcast/podcast.component';
import { DjComponent } from './content/pages/dj/dj.component';
import { EventiComponent } from './content/pages/eventi/eventi.component';
import { RichiesteComponent } from './content/pages/richieste/richieste.component';
import { ContattiComponent } from './content/pages/contatti/contatti.component';
import { SliderComponent } from './content/components/slider/slider.component';
import { NavMenuComponent } from './content/components/nav-menu/nav-menu.component';
import { JumbotronComponent } from './content/components/jumbotron/jumbotron.component';
import { InOndaComponent } from './content/components/in-onda/in-onda.component';
import { ProssimiInOndaComponent } from './content/components/prossimi-in-onda/prossimi-in-onda.component';
import { SocialComponent } from './content/components/social/social.component';
import { VideoComponent } from './content/components/video/video.component';
import { SostieniComponent } from './content/components/sostieni/sostieni.component';
import { ProssimiEventiComponent } from './content/components/prossimi-eventi/prossimi-eventi.component';
import { SupportersComponent } from './content/components/supporters/supporters.component';
import { FooterComponent } from './content/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PalinsestoComponent,
    ProgrammiComponent,
    PodcastComponent,
    DjComponent,
    EventiComponent,
    RichiesteComponent,
    ContattiComponent,
    SliderComponent,
    NavMenuComponent,
    JumbotronComponent,
    InOndaComponent,
    ProssimiInOndaComponent,
    SocialComponent,
    VideoComponent,
    SostieniComponent,
    ProssimiEventiComponent,
    SupportersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
