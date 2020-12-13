import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateComponent } from './dialog-create/dialog-create.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(public afAuth: AngularFireAuth, public dialog: MatDialog) {}
  items = [
    { title: 'english', content: [1, 2, 3, 4, 5] },
    { title: 'Nones', content: ['asd', 2, 3, 4, 5] },
  ];

  listForShow;

  deleteBtn($event) {
    const lal = $event.querySelector('label').textContent;
    const listener = this.listForShow;
    this.listForShow = listener.map((i) => {
      let num = i.content.filter((it) => it != lal);
      return Object.assign({}, i, { content: num });
    });
    this.items = this.items.map((i) =>
      this.listForShow[0].title === i.title ? this.listForShow[0] : i
    );
  }

  changeChecked(event) {
    const ref = event.querySelector('div');
    event.classList.toggle('checked');
  }
  addTodos($event, some) {
    if (some.value.trim()) {
      $event.content.push(some.value);
      some.value = '';
    }
  }
  openDialof() {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) return;
      this.items = [...this.items, { title: res.value, content: [] }];
    });
  }
  containerBtn($event) {
    this.listForShow = this.items.filter((i) => i.title == $event.textContent);
  }
  editTodo($event) {
    const data = $event.querySelector('label').textContent;
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      data,
      autoFocus: true,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) return;
      const label = $event.querySelector('label').textContent;
      const listener = this.listForShow;
      this.listForShow = listener.map((i) => {
        let num = i.content.map((it) => (it == label ? res.value : it));
        return Object.assign({}, i, { content: num });
      });
      this.items = this.items.map((i) =>
        this.listForShow[0].title === i.title ? this.listForShow[0] : i
      );
    });
  }
}
