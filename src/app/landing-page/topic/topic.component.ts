import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'landing-page-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  @Input()
  imgUrl: string = '';
  @Input()
  contentHeader: string = '';
  @Input()
  contentDescription: string = '';
  constructor() {}

  ngOnInit(): void {}
}
