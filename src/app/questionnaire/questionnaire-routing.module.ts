import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'editor',
        pathMatch: 'full'
    },
    {
        path: 'editor',
        component: EditorComponent
    },
    {
        path: 'preview',
        component: PreviewComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
