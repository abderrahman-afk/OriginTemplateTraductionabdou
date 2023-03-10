import { Component, OnInit } from "@angular/core";
import { LigbsoinService } from "../services/ligbsoin.service";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  ColumnApi,
  GridApi,
  GridReadyEvent,
  Module,
} from "@ag-grid-community/core";
import { TokenStorage } from "src/app/core/services/token-storage.service";
import { PersonnelService } from "../../Employe/personnel.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-bsoin",
  templateUrl: "./bsoin.component.html",
  styleUrls: ["./bsoin.component.scss"],
})
export class BsoinComponent implements OnInit {
  data!: [];

  array: any;
  list: any;
  list1: any = [];
  mat!: any;
  datesoin: any;
  numsoins: any;
  //idBsoin !: Idbsoin;
  idbesoin: any = {
    cod_soc: this.token.getUser().cod_soc,
    mat_pers: this.token.getUser().matpers,
    num_soins: 6,
  };
  valoption: any;
  ligbult: any;
  /*
    this.idbesoin.mat_pers=this.token.getUser().matpers
    console.log("teeeeeeeeee"+this.token.getUser().matpers)*/

  constructor(private serv: LigbsoinService, private token: TokenStorage,private serve:PersonnelService,private translatee:TranslateService) {}

  ngOnInit() {
    this.mat = this.token.getUser().matpers;
    this.idbesoin.num_soins = this.numsoins;
    this.getgouv1();
    this.getListBulltin();
    this.serve.language$.subscribe((language) => {
      this.translateHeaderNames(language);
      this.translateHeaderNamess(language);
      this.translateHeaderNames3(language);
      this.translateHeaderNames4(language);
    });
    const currentLang = this.translatee.getBrowserLang();
    this.translatee.onLangChange.subscribe(() => {
      this.columnAutorisation = this.columnAutorisation.map((col) => {
        col.headerName = this.translatee.instant(col.headerName,currentLang);
        return col;
      }
      
      
      
      
      
      );
      
    });


    this.serve.language$.subscribe((language) => {
      
    });
   
    this.translatee.onLangChange.subscribe(() => {
      this.columnligbult = this.columnligbult.map((col2) => {
        col2.headerName = this.translatee.instant(col2.headerName,currentLang);
        return col2;
      }
      
      
      
      
      
      );
      
    });
    this.serve.language$.subscribe((language) => {
      
    });
   
    this.translatee.onLangChange.subscribe(() => {
      this.columnLigBultStar = this.columnLigBultStar.map((col2) => {
        col2.headerName = this.translatee.instant(col2.headerName,currentLang);
        return col2;
      }
      
      
      
      
      
      );
      
    });
    this.serve.language$.subscribe((language) => {
      
    });
   
    this.translatee.onLangChange.subscribe(() => {
      this.columnBultStar = this.columnBultStar.map((col2) => {
        col2.headerName = this.translatee.instant(col2.headerName,currentLang);
        return col2;
      }
      
      
      
      
      
      );
      
    });


  }
  changeLanguage() {
    const currentLanguage = this.serve.languageSubject.value;
    this.serve.setLanguage(currentLanguage === 'en' ? 'fr' : 'en');
  }

  translateHeaderNames(language: string) {
    this.columnAutorisation = this.columnAutorisation.map((col) => {
      col.headerName = this.translatee.instant(col.headerName, language);
      return col;
    });
  }
  translateHeaderNamess(language: string) {
    this.columnBultStar = this.columnBultStar.map((col) => {
      col.headerName = this.translatee.instant(col.headerName, language);
      return col;
    });
  }
  translateHeaderNames3(language: string) {
    this.columnLigBultStar = this.columnLigBultStar.map((col) => {
      col.headerName = this.translatee.instant(col.headerName, language);
      return col;
    });
  }
  translateHeaderNames4(language: string) {
    this.columnligbult = this.columnligbult.map((col) => {
      col.headerName = this.translatee.instant(col.headerName, language);
      return col;
    });
  }


  test() {
    this.idbesoin.num_soins = this.numsoins;
    // this.getgouv();
    console.log("test : ", this.numsoins);
  }

  listBultSoin: any;
  listLigBultStart: any;
  BultStart: any;
  getListBulltin() {
    this.serv
      .fetchListBulletSoin(
        this.token.getUser().cod_soc,
        this.token.getUser().matpers
      )
      .subscribe((dataBult) => {
        this.listBultSoin = dataBult;
        console.log("dddd : ", dataBult);
      });

    this.serv
      .fetchListBulletSoinStar(
        this.token.getUser().cod_soc,
        this.token.getUser().matpers
      )
      .subscribe((dataBultS) => {
        this.BultStart = dataBultS;
        console.log("dddd3 : ", dataBultS);
      });
  }

  /* getgouv(){
    
    this.serv.bultSoinDet(this.idbesoin).subscribe(
      data => {
     
     //  this.array=this.list.numSoinParam
      // console.log("dddd : ",this.array );
       
      },
      err => {
        console.log(err);
      }
      );
    } */
  getgouv1() {
    this.serv
      .fetchListCodPret(
        this.token.getUser().cod_soc,
        this.token.getUser().matpers
      )
      .subscribe(
        (data1) => {
          this.array = data1;
          //this.ligbult =this.list.ligBult
          // this.array=this.list.numSoinParam

          console.log("dddd : ", this.array);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onChange($event: any) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;

    this.valoption.patchValue({ labelText: text });

    console.log(text);
  }

  columnAutorisation = [
    {
      headerName: "Num??ro soins",
      field: "num_soins",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Num??ro bord",
      field: "num_bord",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Date Soin",
      field: "dat_soins",
      filter: "agDateColumnFilter",
      sortable: true,
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
      headerName: "Type parent ",
      field: "typ_parent",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Etat bulletin",
      field: "etat_bult",
      editable: true,
      filter: true,
      floatingFilter: true,
    },

    {
      headerName: "nature_bs",
      field: "nature_bs",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "tot_honor",
      field: "tot_honor",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Date saisie",
      field: "dat_saisie",
      editable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      headerName: "num_ass",
      field: "num_ass",
      // cellRenderer: this.createHyperLink.bind(this),

      editable: true,
      floatingFilter: true,
      filter: true,
    },
  ];
  modules: Module[] = [ClientSideRowModelModule];
  defaultColDef = {
    sortable: true,
    filter: true,
  };

  columnligbult = [
    {
      headerName: "Num??ro Lig",
      field: "num_lig",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Libell?? Acte",
      field: "libcact",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Ann??e",
      field: "annee_envoi",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Date soins",
      field: "dat_soins",
      filter: "agDateColumnFilter",
      sortable: true,
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
      headerName: "Type Act",
      field: "type_act",
      editable: true,
      filter: true,
      floatingFilter: true,
    },

    {
      headerName: "abrv_act",
      field: "abrv_act",
      editable: true,
      filter: true,
      floatingFilter: true,
    },

    {
      headerName: "Totale net",
      field: "tot_net",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Totale honor",
      field: "tot_honor",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Date Acte",
      field: "dat_acte",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Libell?? org",
      field: "liborg",
      editable: true,
      floatingFilter: true,
    },
  ];

  columnBultStar = [
    {
      headerName: "Num??ro bord",
      field: "num_bord_assur",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Num??ro Bulletin",
      field: "num_bult",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Ann??e Bord",
      field: "annee_bord",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Date Soin star",
      field: "dat_soins_star",
      filter: "agDateColumnFilter",
      sortable: true,
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
      headerName: "Date Soin BCT",
      field: "dat_soins_bct",
      filter: "agDateColumnFilter",
      sortable: true,
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
      headerName: "Totale honor Star",
      field: "tot_honor_star",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Totale honor BCT",
      field: "tot_honor_bct",
      editable: true,
      filter: true,
      floatingFilter: true,
    },

    {
      headerName: "Totale rembours?? Star",
      field: "tot_remb_star",
      editable: true,
      floatingFilter: true,

      filter: true,
    },

    {
      headerName: "Totale A rembours?? Bct",
      field: "tot_a_remb_bct",
      editable: true,
      floatingFilter: true,

      filter: true,
    },
    {
      headerName: "Montant rembours?? avant",
      field: "mnt_remb_avant",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
  ];
  columnLigBultStar = [
    {
      headerName: "Num??ro Bulletin",
      field: "num_lig_bord",
      editable: true,
      floatingFilter: true,

      filter: true,
    },
    {
      headerName: "Num??ro bord",
      field: "num_bord_assur",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Ann??e bord",
      field: "annee_bord",
      editable: true,
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Num??ro assur??",
      field: "num_ass",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Date soins",
      field: "dat_soins_star",
      filter: "agDateColumnFilter",
      sortable: true,
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
      headerName: "Totale honor Star",
      field: "tot_honor_star",
      editable: true,
      filter: true,
      floatingFilter: true,
    },

    {
      headerName: "Totale honor BCT",
      field: "tot_honor_bct",
      editable: true,
      floatingFilter: true,
      filter: true,
    },

    {
      headerName: "Totale rembours?? Star",
      field: "tot_remb_star",
      editable: true,
      floatingFilter: true,

      filter: true,
    },
    {
      headerName: "Totrale A rembours?? BCT",
      field: "tot_a_remb_bct",
      editable: true,
      floatingFilter: true,

      filter: true,
    },
  ];

  gridColumnApi: any;
  gridApi: any;
  onCellClicked(event) {
    this.idbesoin.num_soins = event.value;
    this.serv
      .bultSoinDet(
        this.idbesoin.cod_soc,
        this.idbesoin.mat_pers,
        this.idbesoin.num_soins
      )
      .subscribe(
        (dat) => {
          this.gridApi = dat;
          console.log("tttttttttttttttttttttt" + this.gridApi);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onCellClickedLigStar(event) {
    this.serv
      .fetchLigbultStarDetList(
        this.token.getUser().cod_soc,
        this.token.getUser().matpers,
        event.value
      )
      .subscribe((dataBultS) => {
        this.listLigBultStart = dataBultS;
        console.log("dddd2 : ", dataBultS);
      });
  }
}
