import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ChangerContextComponent } from './changer-context/changer-context.component';
import { SwitchContextReportComponent } from './switch-context-report/switch-context-report.component';

const routes: Routes = [
    { path: '', component: ChangerContextComponent },
    { path: 'switch-context', component: ChangerContextComponent },
    { path: 'switch-context-report', component: SwitchContextReportComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}