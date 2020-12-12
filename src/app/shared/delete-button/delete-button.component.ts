import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit {
  canDelete: boolean;
  @Output() delete = new EventEmitter<boolean>();

  prepareForDelete() {
    this.canDelete = true;
  }
  cancel() {
    this.canDelete = false;
  }
  deleteBoard() {
    this.delete.emit(true);
    this.canDelete = false;
  }

  ngOnInit(): void {}
}
