
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TokenStorage } from "src/app/core/services/token-storage.service";
import { FamilleService } from "../../Employe/famille.service";
import { PersonnelService } from "../../Employe/personnel.service";
import { RenseignementpersService } from "../../Employe/renseignementpers.service";
import { GridApi, SelectionChangedEvent } from "ag-grid-community";
import { Module } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FicheevalcompService } from '../../Employe/ficheevalcomp.service';

@Component({
  selector: 'app-evaluation-objectif-chef',
  templateUrl: './evaluation-objectif-chef.component.html',
  styleUrls: ['./evaluation-objectif-chef.component.scss']
})
export class EvaluationObjectifChefComponent implements OnInit {

  z:any
  api!: GridApi;
  rowData: any=[]
  n: any;
  ficheeval:any
  gridOpen:boolean
  rowSelection
  cod_soc: any;
  mat_pers: any;
  conjoint: any = [];
  perso: any;
  get44: any;
  ad: any;
  affect: any;
  deb: any;
  fin: any;
  nat: any;
  etat: any;
  sexe: any;
  tab: any;
  gouv: any;
  tab2: any;
  getbymatcod: any;
  rens: any = [];
  adrpersbycodeandmat: any = [];
  rensper: any;
  g: any;
  mat: any;
  h: string = "10908";
  x: string = "01";
  perso11: any = {
    cod_soc: this.token.getUser().cod_soc,
    mat_pers: this.token.getUser().matpers,
  };
  columnDefs;
  gridApi
  gridColumnApi
  param
  fiche:any
  // bread crumb items
  collab: any
  @Input() testdelay: Boolean = false;

  constructor(
    private cd: ChangeDetectorRef,
    private token: TokenStorage,
    private serv: PersonnelService,
    private serv2: FamilleService,
    private serv3: RenseignementpersService,
    private modalService: NgbModal,
    private servficheeval:FicheevalcompService
  ) {

    
 this.columnDefs = [
  {
    headerName: "Matricule",
    field: "mat_pers",
    editable: true,
    resizable: true,
    sortable: true,
    filter: true,
    floatingFilter: true,
    width: 160,
  },
    {
      headerName: "Nom",
      field: "nom_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 160,
    },
    {
      headerName: "Pr??nom",
      field: "pren_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 390,
    },
    {
      headerName: "Prenom 2??me langue",
      field: "pren_pers_a",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Nom 2??me langue",
      field: "nom_pers_a",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Groupe sanguin",
      field: "grp_sang",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    
    {
      headerName: "Lieu de naissance",
      field: "lieu_nais",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    }
    ,
    {
      headerName: "Etat active",
      field: "lib_etat_act",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
  
  ];
    this.rowSelection="single"
  }



  columnDefs2 = [
    {
      headerName: "Rue",
      field: "rue",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Rue 2??me langue",
      field: "rue_a",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Nom et pr??nom",
      field: "libnompre",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "T??l. Perso.",
      field: "tel_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Gouvernorat",
      field: "lib_gouv",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Etat active",
      field: "lib_etat_act",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 160,
    },
    
    
  ];

  ngOnInit() {
 

    this.getadrpers();
    this.getrenspers();
    this.getconjoint();
    this.getcollaborateur()
  }
  update() {
    this.delayedTest();
    this.cd.detectChanges();
  }
  delayedTest() {
    console.log(this.testdelay);
    this.testdelay = true;
    this.cd.markForCheck();
  }

  defaultColDef = {
    sortable: true,
    filter: true,
  };
  getpers(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.serv.getpersonnel(this.perso11).subscribe(
      (data) => {
        this.perso11 = data;
        console.log("exected" + data);

        this.n = this.perso11.cod_serv;

        console.log("nnn" + this.n);
        this.getcollaborateur();

        //  this.adrpersbycodeandmat=this.perso11.adresses_personnel
        //this.rens=this.perso11.rens_pers
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getadrpers() {
   
  }
  getrenspers() {
    this.serv.getpersonnel(this.perso11).subscribe(
      (data) => {
        this.rens = this.perso11.rens_pers;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getconjoint() {
    this.serv2
      .getconjoint(this.token.getUser().cod_soc, this.token.getUser().matpers)
      .subscribe(
        (data) => {
          this.conjoint = this.perso11.rens_pers;
        },
        (err) => {
          console.log(err);
        }
      );
  }
  getcollaborateur() {

    this.serv.getcollab(this.n, this.token.getUser().matpers).subscribe(
      (data) => {
        this.rowData = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  smallModal(smallDataModal: any) {
    this.modalService.open(smallDataModal, { size: "sm", centered: true });
  }


  onSelectionChanged(event:SelectionChangedEvent) {
    
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows)
    var selectedRowsString = "";
    var selectedRowsMat = "";

    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.cod_soc;
      selectedRowsMat += selectedRow.mat_pers;
      console.log(selectedRowsMat)

    });
    this.servficheeval.getFicheEval(selectedRowsMat).subscribe(
      data => {
  
       this.ficheeval=data
  
      
       console.log(this.ficheeval)
      },
      err => {
        console.log(err);
      }
    )
    
    this.gridOpen = !this.gridOpen;

  }

  modules: Module[] = [ClientSideRowModelModule];

}
