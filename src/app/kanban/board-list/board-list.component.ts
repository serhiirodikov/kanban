import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Board } from '../board.model';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../dialogs/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[];
  sub: Subscription;

  constructor(public boardService: BoardService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.sub = this.boardService.getUserBoards().subscribe((boards) => {
      this.boards = boards;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }
  openBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.boardService.createBoard({
          title: res,
          priority: this.boards.length,
        });
      }
    });
  }
}
