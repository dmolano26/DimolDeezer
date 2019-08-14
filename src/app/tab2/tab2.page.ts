import { Component } from '@angular/core';
import { DeezerServiceService } from '../services/deezer-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public profiles: any;
  public users: any;

  constructor(private deezerService: DeezerServiceService) {
    this.getProfiles();
    this.users = [];
  }

  public getProfiles() {
    this.deezerService.getProfiles()
    .subscribe(
      data => {
        this.profiles = data;
        for (var val of this.profiles) {
          this.deezerService.getProfileDetail(val)
          .subscribe(
            perfil => {
              this.users.push(perfil);
            }
          );
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
