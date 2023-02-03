import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Arnold Swaznegger", 'G234', "as@gold12.net"];
  info2: string[] = ["Brad Belleck", 'G769', "bb@gold34.net"];
  info3: string[] = ["Tom Dubois", 'G567', "td@gold57.net"];

  getInfo1(): string[]{
    return this.info1;
  }
  getInfo2(): string[]{
    return this.info2;
  }
  getInfo3(): string[]{
    return this.info3;
  }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1

  }

  constructor() { }
}
