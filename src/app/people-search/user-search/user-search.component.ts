import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SearchService } from '../service/search.service';
import { PeopleSearchViewModel } from '../viewmodels/peoplesearch-model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit, OnChanges, OnDestroy {
  filteredUsers: PeopleSearchViewModel[] = [];
  usersForm: FormGroup;
  isLoading = false;
  selectedUser: PeopleSearchViewModel;
  userSelectSubscription$: Subscription;
  constructor(private fb: FormBuilder, private userService: SearchService) { }
  ngOnChanges() {
    this.setupForm();
    this.setupSubscription();
  }
  ngOnInit() {
    this.setupForm();
    this.setupSubscription();
  }
  setupForm() {
    this.usersForm = this.fb.group({
      userInput: null
    });
  }
  setupSubscription() {
    if (this.userSelectSubscription$) {
      this.userSelectSubscription$.unsubscribe();
    }
    this.userSelectSubscription$ = this.usersForm
      .get('userInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap((value) =>
          this.userService.search(value).pipe(finalize(() => this.isLoading = false))
        )
      )
      .subscribe(users => {
        this.filteredUsers = users;
      });
  }
  displayFn(user: PeopleSearchViewModel) {
    if (user) {
      return user.FirstName;
    }
  }
  showUser(input) {
    this.selectedUser = input;
  }
  ngOnDestroy() {
    if (this.userSelectSubscription$) {
      this.userSelectSubscription$.unsubscribe();
    }
  }

}
