import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule, ClrFormsNextModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { HTitleComponent } from './commons/components/basics/h-title/h-title.component';
import { Aka404NotFoundComponent } from './components/aka-404-not-found/aka-404-not-found.component';
import { AppComponent } from './app.component';
import { AkaNavigationComponent } from './commons/components/aka-navigation/aka-navigation.component';
import { AkaLoginComponent } from './commons/components/aka-login/aka-login.component';
import { AkaLoginScreenComponent } from './components/aka-login-screen/aka-login-screen.component';
import { AkaModalComponent } from './commons/components/aka-modal/aka-modal.component';
import { AkaModalsComponent } from './commons/components/aka-modals/aka-modals.component.';
import { AkaCourseCardComponent } from './commons/components/aka-course-card/aka-course-card.component';
import { AkaCoursesComponent } from './commons/components/aka-courses/aka-courses.component';
import { AkaGroupCollapsable } from './commons/components/aka-group-collapsable/aka-group-collapsable.component';

// SCREEN COMPONENTS
import { AkaMyCoursesComponent } from './components/aka-my-courses/aka-my-courses.component';
import { AkaActiveCoursesComponent } from './components/aka-my-courses/aka-active-courses/aka-active-courses.component';
import { AkaApprovedCoursesComponent } from './components/aka-my-courses/aka-approved-courses/aka-approved-courses.component';
import { AkaPathComponent } from './components/aka-my-courses/aka-path-courses/aka-path-courses.component';
import { AkaExploreComponent } from './components/aka-explore/aka-explore.component';
import { AkaCategoriesComponent } from './components/aka-explore/aka-categories/aka-categories.component';
import { AkaDifficultyComponent } from './components/aka-explore/aka-difficulty/aka-difficulty.component';

// SERVICES
import { AkaBasicsService } from './commons/services/aka-basics.service';

@NgModule({
  declarations: [
    // COMPONENTS
    HTitleComponent,
    Aka404NotFoundComponent,
    AppComponent,
    AkaNavigationComponent,
    AkaLoginComponent,
    AkaLoginScreenComponent,
    AkaModalComponent,
    AkaModalsComponent,
    AkaCourseCardComponent,
    AkaCoursesComponent,
    AkaGroupCollapsable,
    // SCREEN COMPONENTS
    AkaMyCoursesComponent,
    AkaActiveCoursesComponent,
    AkaApprovedCoursesComponent,
    AkaPathComponent,
    AkaExploreComponent,
    AkaCategoriesComponent,
    AkaDifficultyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule,
    AppRoutingModule
  ],
  providers: [
    AkaBasicsService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
