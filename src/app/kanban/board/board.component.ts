import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../board.model';
import { BoardService } from '../board.service';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() board;

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTasks(this.board.id, this.board.tasks);
  }

  handleDelete() {
    this.boardService.deleteBoard(this.board.id);
  }
  openDialog(task?: Task, idx?: number) {
    const newTask = { label: 'purple' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        if (res.inNew) {
          this.boardService.updateTasks(this.board.id, [
            ...this.board.tasks,
            res.task,
          ]);
        } else {
          const update = this.board.tasks;
          update.splice(res.idx, 1, res.task);
          this.boardService.updateTasks(this.board.id, this.board.tasks);
        }
      }
    });
  }
  constructor(private boardService: BoardService, private dialog: MatDialog) {}
}
