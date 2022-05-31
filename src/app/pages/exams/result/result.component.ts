import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {

  
  constructor(
    private sharedDataService: SharedDataService,
    private apiService: ApiService
  ) {}
  result: any;
  ans: any;
  
 
    // toArray(res: object) {
    //   return Object.keys(res).map(key => res[key])
    // }
    // toArray(result: object) {
    //   return Object.keys(result).map(key => ({
    //     key,
    //     ...result<any>[key]
    //   }))
    // }
 
   
  

  ngOnInit(): void {
    this.sharedDataService.currentAnswersIds.subscribe((ansIds) => {
      this.apiService.getResult(ansIds).subscribe((res) => (this.result = res));
    });
  }
}
