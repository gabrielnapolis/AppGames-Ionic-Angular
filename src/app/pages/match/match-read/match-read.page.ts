import { Match } from '../../../model/match.model';
import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-match-read',
  templateUrl: './match-read.page.html',
  styleUrls: ['./match-read.page.scss'],
})
export class MatchReadPage implements OnInit {
  loading: any;
  matches: any[] = [];
  match!: Match;
  isAlertOpen = false;
  isToastOpen = false;

  constructor(
    private matchService: MatchService,
    private route: Router,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });
    this.loading.present();
    this.matchService.read().subscribe(
      (data) => {
        this.matches = data;
        this.loading.dismiss();
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;
        console.log(err);
      }
    );
  }
  async presentLoading(msg: any) {
    this.loading = await this.loadingController.create({
      message: msg,
    });
    this.loading.present();
  }

  async deleteMatch(id: string) {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });

    this.matchService.delete(id).subscribe(
      () => {
        this.route.navigate(['/match-read']);
        this.loadData();
        this.loading.dismiss();
        this.isToastOpen = true;
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;

        console.log(err);
      }
    );
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  goToHome() {
    this.route.navigate(['/']);
  }

  goToAdd() {
    this.route.navigate(['/match-add']);
  }

  goToUpdate(id: any): void {
    this.route.navigate([`/match-update/${id}`]);
  }
}
