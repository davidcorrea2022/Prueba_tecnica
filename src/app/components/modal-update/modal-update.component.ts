import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnChanges {




  @Input()
  titlePost:string = '';

  @Input()
  bodyPost:string = '';


  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  myForm!: FormGroup;


  ngOnChanges(changes: SimpleChanges): void {
    
    this.myForm = new FormGroup({
      title: new FormControl(this.titlePost),
      body: new FormControl(this.bodyPost)
    });

  }

  submit(){
    const title = this.myForm.get('title')?.value;
    const body = this.myForm.get('body')?.value;
    
    this.onSubmit.emit( { title, body }  );
  }

}
