import { Match } from './../../../model/match.model';
import { MatchService } from './../../../services/match.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-match-update',
  templateUrl: './match-update.page.html',
  styleUrls: ['./match-update.page.scss'],
})
export class MatchUpdatePage implements OnInit {
  match!: Match;
  loading: any;
  isAlertOpen = false;
  isToastOpen = false;
  errorMsg = '';

  matchForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    player1: new FormControl('', Validators.required),
    player2: new FormControl('', Validators.required),
    time: new FormControl(0, Validators.required),
    winner: new FormControl('', Validators.required),
    game: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private matchService: MatchService,
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
    const id = this.route.snapshot.paramMap.get('id')!;
    this.matchService.readById(id).subscribe(
      (match) => {
        this.matchForm.setValue(match);      
        this.match = match;
        this.loading.dismiss();
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;
        console.log(err);
      }
    );
  }

  async updateMatch() {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });
    if(this.matchForm.valid){
      this.match={
        id:this.matchForm.controls['id'].value,
        player1: this.matchForm.controls['player1'].value,
        player2:  this.matchForm.controls['player2'].value,
        time: this.matchForm.controls['time'].value,
        winner: this.matchForm.controls['winner'].value,
        game:  this.matchForm.controls['game'].value,
      };
      this.loading.present();
      this.matchService.update(this.match).subscribe(
        () => {
          this.loading.dismiss();
          this.isToastOpen = true;
          setTimeout(()=>{this.router.navigate(['/']);},500)
        },
        (err) => {
          this.loading.dismiss();
          this.isAlertOpen = true;
          console.log(err);
        }
      );
    }
    
  }

  goToHome() {
    this.router.navigate(['/']);
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
