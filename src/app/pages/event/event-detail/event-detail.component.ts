import { UtilsService } from './../../../core/utils.service';
import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from './../../../core/models/event.model';
import { RsvpModel } from './../../../core/models/rsvp.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() event: EventModel;
  @Input() rsvps: RsvpModel[];

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {
  }

}
