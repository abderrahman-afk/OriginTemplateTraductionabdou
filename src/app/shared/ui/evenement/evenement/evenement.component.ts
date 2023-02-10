import { Component, OnInit } from '@angular/core';
import { NoteEventService } from '../../note-event.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {

  breadCrumbItems: Array<{}>;
 list:any=[]
 term:string
 p:any

  constructor(private serv:NoteEventService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Blog' }, { label: 'Blog Grid', active: true }];
    this.getbyid()

  }
  getbyid(){  this.serv.getbyD().subscribe(
    data => {

     this.list=data
    },
    err => {
      console.log(err);
    }
    );

  }


  getFormattedDate(date: string) {

    // check if the date is in the format dd/mm/yyyy
    const ddMmYyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/;
   
       if (ddMmYyyyRegex.test(date)) {
         // the date is in the correct format, so you can return it as is
         if (date.includes('/')) {
           const dateParts = date.split('/');
           
           const day = dateParts[0];
           const month = dateParts[1];
           const year = dateParts[2];
           if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
   
           
             return `${day}/${month}/${year}`;
           }
         }
       }
   
   
       // check if the date is in the format dd-mm-yyyy
       const ddDashMmYyyyRegex = /^\d{2}-\d{2}-\d{4}$/;
      
       if (ddDashMmYyyyRegex.test(date)) {
         // the date is in the correct format, so you can return it as is
         if (date.includes('-')) {
           const dateParts = date.split('-');
   
           const day = dateParts[0];
           const month = dateParts[1];
           const year = dateParts[2];
           if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
             return `${day}/${month}/${year}`;
           
   
           }
   
                 }
               
               
       }
   
   
   
      // check if the date is in the format dd-mm-yyyy
      const dDashMmYyyyRegex = /^\d{2}-\d{2}-\d{4}$/;
   
      if (dDashMmYyyyRegex.test(date)) {
        // the date is in the correct format, so you can return it as is
        if (date.includes('-')) {
         const dateParts = date.split('-');
   
           const day = dateParts[0];
           const month = dateParts[1];
           const year = dateParts[2];
          if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
   
           return `${day}/${month}/${year}`;
         
         
         }
         
        }    
       }
      
   
       
        
       // check if the date is in the format mm/dd/yyyy
       const mmDdYyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/;
   
       if (mmDdYyyyRegex.test(date)) {
         // the date is in the correct format, so you can return it as is
         if (!date.includes('/')) {
           const dateParts = date.split('/');
           
           const day = dateParts[0];
           const month = dateParts[1];
           const year = dateParts[2];
        
           if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
   
           
             return `${day}/${month}/${year}`;
           }
         }    }
     
       // if the date is in none of the above formats, return an empty string
       
       if (date.length== 8 ) {
         if( Number(date.substring(2, 4))>12 || Number(date.substring(2, 4))<=31 ){
           
           
           const day = date.substring(0, 2);
   
           const  month= date.substring(2, 4);
           const year = date.substring(4);
   
   
         }
         
         const day = date.substring(0, 2);
         const  month= date.substring(2, 4);
         const year = date.substring(4);
      if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
   
       document.getElementById('date1').style.borderColor = ""
   
   
       return `${day}/${month}/${year}`;
     
     }
     
     }
   
       // check if the date is in the format yyyy/mm/dd
       const yyyyMmDdRegex = /^\d{4}\/\d{2}\/\d{2}$/;
   
       if (yyyyMmDdRegex.test(date)) {
         // the date is in the format yyyy/mm/dd
         const dateParts = date.split('/');
         const year = dateParts[0];
         const month = dateParts[1];
         const day = dateParts[2];
         if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
   
           return `${day}/${month}/${year}`;
         }
       }
   
   
       // check if the date is in the format yyyy/dd/mm
       const yyyyDdMmRegex = /^\d{4}\/\d{2}\/\d{2}$/;
       if (yyyyDdMmRegex.test(date)) {
         // the date is in the format yyyy/dd/mm
         const dateParts = date.split('/');
         const year = dateParts[0];
         const day = dateParts[1];
         const month = dateParts[2];
   
   
         if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
   
   
          
           return `${day}/${month}/${year}`;
       
           }
   
       
       }
   
   
         // check if the date is in the format yyyy-mm-dd
         const yyyyMmDdRegexM = /^\d{4}-\d{2}-\d{2}$/;
   
   
         if (yyyyMmDdRegexM.test(date)) {
           // the date is in the format yyyy-mm-dd
           const dateParts = date.split('-');
           const year = dateParts[0];
           const  month= dateParts[1];
           const day = dateParts[2];
     
     
           if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
     
     
           
             return `${day}/${month}/${year}`;
     }
         
         }
         // check if the date is in the format yyyy-dd-mm
         const yyyyDdMmRegexD = /^\d{4}-\d{2}-\d{2}$/;
   
   
         if (yyyyDdMmRegexD.test(date)) {
           // the date is in the format yyyy/dd/mm
           const dateParts = date.split('-');
           const year = dateParts[0];
           const day = dateParts[1];
           const month = dateParts[2];
     
     
           if( Number(month)<=12 &&Number(day)<=31 &&year.length==4){
     
     
           
             return `${day}/${month}/${year}`;
           }
         
         }
     }

}
