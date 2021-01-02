import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-claim-base',
  templateUrl: './claim-base.component.html',
  styleUrls: ['./claim-base.component.css'],
})
export class ClaimBaseComponent implements OnInit {
  listClaim: Array<any> = [
    {
      imgUrl: '../../../assets/broken.png',
      contentHeader: 'Own damages – collision without third party',
      contentDescription:
        'The company compensates for damages to the vehicle, ' +
        'including specified additional accessories, ' +
        'equipment and any fixture during the insurance period caused by collision, ' +
        'overturning or no involved third-party. ' +
        'Limits of liability: are equal to the sum insured.',
      onClick: 'noThirdClaim()',
      route: '/owner',
    },
    {
      imgUrl: '../../../assets/car-crash.png',
      contentHeader: 'Own damages – collision with third party',
      contentDescription:
        'The company will compensate for damages to the vehicle ' +
        'including specified additional accessories, ' +
        'equipment and any fixture during the insurance period ' +
        'caused by the collision with third party. ' +
        'Limits of liability: are equal to the sum insured.',
      onClick: 'thirdPartyClaim()',
      route: '/thirdparty',
    },
    {
      imgUrl: '../../../assets/flood.png',
      contentHeader: 'Natural disaster, including flood',
      contentDescription:
        'The company will compensate for damages to the vehicle, ' +
        'including specified additional accessories, ' +
        'equipment and any fixture during the insurance period ' +
        'caused by covered natural disaster. ' +
        'Limits of liability: are equal to the sum insured.',
      onClick: 'noThirdClaim()',
      route: '/owner',
    },
  ];
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    if (!this.dataService.isSignIn) {
      this.router.navigate(['']);
    }
  }
}
