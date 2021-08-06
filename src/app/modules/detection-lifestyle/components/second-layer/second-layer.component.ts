import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-layer',
  templateUrl: './second-layer.component.html',
  styleUrls: ['./second-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondLayerComponent implements OnInit {

  public constructor() { }

  public ngDoCheck(): void {
    console.log('second layer do check');
  }

  public ngOnInit(): void {
  }

}
