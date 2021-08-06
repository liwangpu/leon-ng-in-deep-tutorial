import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-layer',
  templateUrl: './first-layer.component.html',
  styleUrls: ['./first-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstLayerComponent implements OnInit {

  public constructor() { }

  public ngDoCheck(): void {
    console.log('first layer do check');
  }

  public ngOnInit(): void {
  }

}
