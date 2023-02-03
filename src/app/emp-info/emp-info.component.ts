import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService],
})
export class EmpInfoComponent {
  infoRecieved1: string[] = []
  infoRecieved2: string[] = []
  infoRecieved3: string[] = []

  getinfofromclass1(){
    this.infoRecieved1 = this.rservice.getInfo1();
  }
  getinfofromclass2(){
    this.infoRecieved1 = this.rservice.getInfo2();
  }
  getinfofromclass3(){
    this.infoRecieved1 = this.rservice.getInfo3();
  }
  constructor (private rservice: RecordsService){

  }


}
