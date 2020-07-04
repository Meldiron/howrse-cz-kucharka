import {
  Component,
  ɵCodegenComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/config.json').subscribe((data) => {
      this.data = data;
    });
  }

  scrollTo(tableId: string) {
    document.getElementById(tableId).scrollIntoView();
  }

  getStyle(table: any, recordI: number, rowI: number): any {
    const obj = {
      fontWeight: 'normal',
      textTransform: 'none',
    };

    const lineConfig = table.headings[rowI];

    if (!lineConfig) {
      return obj;
    }

    if (lineConfig.isBold) {
      obj.fontWeight = 'bold';
    }

    if (lineConfig.isUppercase) {
      obj.textTransform = 'uppercase';
    }

    return obj;
  }
}
