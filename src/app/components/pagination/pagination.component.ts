import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  currentPage = 1;
  arrayToDisplay: Array<number>;
  @Input() set numberOfPages(value) {
    console.log(value);

    this.arrayToDisplay = [];
    for (let index = 1; index <= value; index++) {
      this.arrayToDisplay.push(index)
    }
  }
  @Output() $onPageChanges = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {

  }
  forwardPage(number): void {
    if (this.currentPage + number <= 0 || this.currentPage + number >= this.arrayToDisplay.length + 1) {
      return;
    }
    this.currentPage += number;
    this.$onPageChanges.emit(this.currentPage);
    const el = document.getElementById(stringify(this.currentPage));
    el.scrollIntoView();
  }

  pageChange(pageNumber: number): void {
    const el = document.getElementById(stringify(pageNumber));
    el.scrollIntoView();
    this.currentPage = pageNumber;
    this.$onPageChanges.emit(pageNumber);
  }
  nicePag(item): string {
    if (
      item === 1 ||
      item === 2 ||
      item === this.arrayToDisplay.length ||
      item === this.currentPage ||
      item === this.currentPage - 1 ||
      item === this.currentPage + 1) {
      if (item === this.currentPage - 1) {
        return '...' + item;
      }
      if (item === this.currentPage + 1) {
        return item + '...';
      }

      return item;
    } else {
      return '';
    }
  }

}
