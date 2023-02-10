import { Component, OnInit } from '@angular/core';
import { GridApi } from "ag-grid-community";
import { Module } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { PersonnelService } from '../personnel.service';
import { NivpersService } from '../nivpers.service';
import * as jspdf from "jspdf";
import "jspdf-autotable";

@Component({
  selector: 'app-gridetab',
  templateUrl: './gridetab.component.html',
  styleUrls: ['./gridetab.component.scss']
})
export class GridetabComponent implements OnInit {
  public columns = [ "Diploma", "Specialité","Etablissement","Observation","Date Niveau","Date Debut","Date Fin"];
row:any=[]


  title = "grid";
  api!: GridApi;
  prs:any=[]
  rowData: any[] = [];
  perso11 :any = {
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers
  };

  constructor(private serv: NivpersService,private token: TokenStorage) {}
  columnDefs = [
   
   
    {
      headerName: "Diploma",
      field: "diplome",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Specialité",
      field: "specialite",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
      },
      {
        headerName: "Etablissement",
        field: "libetablissement",
        editable: true,
        resizable: true,
        sortable: true,
        filter: true,
        floatingFilter: true,
        width: 200,
      },
      {
        headerName: "Observation",
        field: "observation",
        editable: true,
        resizable: true,
        sortable: true,
        filter: true,
        floatingFilter: true,
        width: 200,
        },
   
    {
      headerName: "Date Niveau",
      field: "date_niveau",
      filter: "agDateColumnFilter",
      floatingFilter: true,

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
      headerName: "Date Debut",
      field: "date_deb",
      filter: "agDateColumnFilter",
      floatingFilter: true,

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
      headerName: "Date Fin",
      field: "date_fin",
      filter: "agDateColumnFilter",
      floatingFilter: true,

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
        

    }

  ];

  ngOnInit(): void {
    this.getFacture();
  }
  defaultColDef = {
    sortable: true,
    filter: true,
  };
  getFacture() {
    this.serv.getnivpers(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
      (data: any[]) => {
        this.rowData=data

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  public openPDF():void {
 


    const doc = new jspdf("portrait", "px", "a4") 
    doc.text(170, 15, "Niveau d'instruction:")
  
      doc.autoTable(this.columns, this.row);
  
      doc.save("Niveau d'instruction.pdf");
  
    }


  modules: Module[] = [ClientSideRowModelModule];
}
