import { Component, OnInit } from '@angular/core';
import { MesssagesService } from '../messsages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor( public messsagesService: MesssagesService) { }

  ngOnInit(): void {
  }

}
