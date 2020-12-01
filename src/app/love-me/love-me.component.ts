import { Component, Input, OnInit } from '@angular/core';
import { LikesRes, LoveService } from '../love.service';
import { Observable } from 'rxjs';

const initialLikeColor = 'white';
const colors = [
  'red',
  'springgreen',
  'gold',
  'mediumslateblue',
  'crimson',
  'salmon',
  'dodgerblue',
  'limegreen',
  'cyan',
  'deepskyblue',
  'seagreen',
  'blueviolet'];

@Component({
  selector: 'app-love-me',
  templateUrl: './love-me.component.html',
  styleUrls: ['./love-me.component.scss']
})
export class LoveMeComponent implements OnInit {
  @Input() initialColor = initialLikeColor;
  likes$: Observable<LikesRes>;
  currentColor = -1;
  heartStyle = { color: initialLikeColor };
;

  constructor(private likeService: LoveService) {
    this.likes$ = this.likeService.likes$;
  }

  ngOnInit(): void {
    this.heartStyle = { color: this.initialColor };
  }

  like(): void {
    this.heartStyle = { color: colors[(++this.currentColor) % colors.length] };
    this.likeService.like();
  }

}
