import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({ providedIn:"root"})
export class CommunicationService {

   private messageStream = new Subject<string>();

    pulishMesg(msg:string){
    this.messageStream.next(msg);
    }

    registerMsg() : Observable<string>{
     return this.messageStream.asObservable()
    }

}