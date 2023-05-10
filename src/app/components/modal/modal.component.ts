import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  myForm!: FormGroup;

  @Input()
  textBodyPost:string = '';

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  submitModal( ){
    this.onSubmit.emit( );
  }

}
