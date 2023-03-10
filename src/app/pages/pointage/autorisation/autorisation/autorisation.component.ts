import { Component, OnInit } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { PointageService } from '../../pointage.service';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import * as moment from 'moment';
import { Module } from "@ag-grid-community/core";
import { PersonnelService } from 'src/app/pages/Employe/personnel.service';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.scss']
})
export class AutorisationComponent implements OnInit {
  perso11 :any = {
    cod_soc:this.tokenService.getUser().cod_soc,
    mat_pers:this.tokenService.getUser().matpers}
    n:any
  rowData: any[] = [];
  constructor(private serv: PointageService , private tokenService: TokenStorage,private ser: PersonnelService) { }

  ngOnInit(){
    this.getpers();
  }

  getpers(){

    this.ser.getpersonnel(this.perso11).subscribe(
      data => {
        this.perso11 = data; console.log('exected' + data);
        this.n=this.perso11.cod_serv
        console.log("codserv"+this.n)
    this.GeAutorisationById()

      },
      err => {
        console.log(err);
      }
      );}

  GeAutorisationById() {
    this.serv.GeAutorisationById(this.n,this.tokenService.getUser().matpers).subscribe(
      (data: any[]) => {
        this.rowData = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  columnDefs = [
    {
      headerName: "Matricule",
      field: "id.mat_pers",
      width: 170,
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
     
      
    },
  
    {
      headerName: "Date début",
      field: "dat_debut_aut",
      cellRenderer: (data) => {
        return moment(data.createdAt).format('DD/MM/YYYY')
    },
      filter: "agDateColumnFilter",
      resizable: true,
      sortable: true,
      floatingFilter: true,
      
      width: 200,

      filterParams: {
        // provide comparator function
        comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
          var dateAsString = cellValue;

          if (dateAsString == null) {
            return 0;
          }

          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          var dateParts = dateAsString.split("/");
          var year = Number(dateParts[2]);
          var month = Number(dateParts[1]) - 1;
          var day = Number(dateParts[0]);
          var cellDate = new Date(year, month, day);

          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
          return 0;
        },
      },
      editable: true,
      cellEditor: "primeCellEditor",
    },

    {
      headerName: "Libélle autorisation",
      field: "lib_aut",
      width: 580,
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      
      
    },

    {
      headerName: "Heure retour",
      field: "heur_r",
      width: 150,
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      
      
    },

    {
      headerName: "Min sortie",
      field: "min_s",
      width: 150,
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
    
      
    },

    
    
    {
      headerName: "Min retour",
      field: "min_r",
      width: 170,
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
     
      
    },


    {
      headerName: "Durée",
      field: "duree_m",
      width: 130,
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
  
      
    },


  ];

  defaultColDef = {
    sortable: true,
    filter: true,
  };



  modules: Module[] = [ClientSideRowModelModule];
}

