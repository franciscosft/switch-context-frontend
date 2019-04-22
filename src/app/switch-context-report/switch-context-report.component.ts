import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-switch-context-report',
  templateUrl: './switch-context-report.component.html',
  styleUrls: ['./switch-context-report.component.css']
})
export class SwitchContextReportComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    console.log("Lista de mudanças de contextos");
    console.log();
    
    this.items = db.list('/').snapshotChanges();
    // this.items.snapshotChanges().subscribe((value) => {
    //   console.log(value);
    // });

  }

  ngOnInit() {
  }

}
