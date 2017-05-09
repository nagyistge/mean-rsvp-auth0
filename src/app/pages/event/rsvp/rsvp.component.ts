import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../../auth/auth.service';
import { UtilsService } from './../../../core/utils.service';
import { RsvpModel } from './../../../core/models/rsvp.model';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  @Input() rsvps: RsvpModel[];
  @Input() eventId: string;
  userRsvp: RsvpModel;
  totalAttending: number;
  showEditForm = false;
  editBtnText = 'Edit RSVP';

  constructor(
    public auth: AuthService,
    public utils: UtilsService) { }

  ngOnInit() {
    this._getRsvp();
  }

  toggleEditForm() {
    this.showEditForm = !this.showEditForm;
    this.editBtnText = this.showEditForm ? 'Cancel Edit' : 'Edit RSVP';
  }

  onSubmitRsvp(e) {
    if (e.rsvp) {
      this.userRsvp = e.rsvp;
      this._getRsvp(true);
      this.toggleEditForm();
    }
  }

  private _getRsvp(updated?: boolean) {
    let guests = 0;

    this.rsvps.forEach((rsvp, i) => {
      // If user ID is in RSVPs, set as user's RSVP
      if (rsvp.userId === this.auth.userProfile.sub) {
        if (updated) { 
          this.rsvps[i] = this.userRsvp;
        } else {
          this.userRsvp = rsvp;
        }
      }
      // Count total number of guests across all RSVPs
      if (this.rsvps[i].guests) {
        guests += this.rsvps[i].guests;
      }
    });

    this.totalAttending = guests;
  }

}
