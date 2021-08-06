import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ResourceService } from 'src/app/services';

@Component({
  selector: 'app-third-layer',
  templateUrl: './third-layer.component.html',
  styleUrls: ['./third-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdLayerComponent implements OnInit {

  public description?: string;
  public constructor(
    private srv: ResourceService
  ) { }

  public ngDoCheck(): void {
    console.log('third layer do check');
  }

  public ngOnInit(): void {

    of(1).pipe(delay(1000)).subscribe(() => {
      console.log('tt');
      this.description = Date.now().toString();
    });

    // this.srv.query('users').subscribe(res => {
    //   console.log('res:', res);
    //   this.description = Date.now().toString();
    // });

    // setInterval(() => {
    //   this.description = Date.now().toString();
    //   console.log('setInterval work:', Date.now());

    // }, 3000);
  }

  public test(): void {

  }

}
