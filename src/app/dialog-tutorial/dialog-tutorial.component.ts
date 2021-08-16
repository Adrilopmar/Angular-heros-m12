import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-tutorial',
  templateUrl: './dialog-tutorial.component.html',
  styleUrls: ['./dialog-tutorial.component.css']
})
export class DialogTutorialComponent implements OnInit {

  constructor(
    public dialogTutorialRef:MatDialogRef<DialogTutorialComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any) {  }

    closeDialogTutorial(){
      this.dialogTutorialRef.close()
    }
    closeDialog():void{
      this.dialogTutorialRef.close()
    }

  ngOnInit(): void {
  }

}
