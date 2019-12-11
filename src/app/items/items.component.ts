import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery({
        query: gql`
          {
            users {
              id

              courses {
                id
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        // this.rates = data && data.rates;
        // this.loading = loading;
        // this.error = data.error;

        // console.log('this.rates',this.rates);
        // console.log('this.loading', this.loading);
        console.log('erroe', result);

      });
  }

}
