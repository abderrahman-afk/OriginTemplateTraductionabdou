import { Component, OnInit } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { LigbsoinService } from '../../bsoin/services/ligbsoin.service';
import { PersonnelService } from '../../Employe/personnel.service';
import { Module } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { PretAvanceService } from '../pret-avance.service';


@Component({
  selector: 'app-pret-avance',
  templateUrl: './pret-avance.component.html',
  styleUrls: ['./pret-avance.component.scss']
})
export class PretAvanceComponent implements OnInit {

  [x: string]: any;
  idCessionPers:any={
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
    cod_pret: 1,
    prt_dat_deb:"01/05/2011",
    typ_pret:"06"

  }
  idLpret:any={
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
    cod_pret: 1,
    l_pret:0

  }
  list:any;
  listpretavance:any;

  list1:any;

  data !:any;
  listPers:any;
  listlig:any;
  listL:any;
  dataL !:any;
  typ_pret:any[];
  perso11 :any = {
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
 
  }
  
    array : any;
    listPret:any
    libPret:any
    datDeb:any
  constructor(private serv :PretAvanceService,public token:TokenStorage, private service:PersonnelService,private serv1 : LigbsoinService ) {

  
   }

  ngOnInit() {

    this.perso11.cod_pret=this.codepret

 
this.getListPret()
 
    this.getgouv1()
  }
  rechercher(){


    this.idCessionPers.prt_dat_deb=this.datDeb
    this.idCessionPers.typ_pret=this.libPret
    this.idCessionPers.cod_pret=this.codepret
    this.getCessionPerso()
    console.log("test : ",this.idCessionPers.cod_pret);
    console.log(" list dat :",this.datDeb+ "lib pret "+this.libPret); 

    this.getPretAvance()


  }

  getListPret(){
    this.serv.getListPret23().subscribe(
      
        dataPret => {
          this.listPret =dataPret;
          
          console.log(" list pert :",this.listPret); 
                 
      },
      err => {
        console.log(err);
      }
      );

    }



   anotherFunction(event: Event ) {
   
    if (event){
    console.log(this.listlig.l_pret)
   
    }

  }


  action(code :any){

    if (code){
      console.log(code)
      this.idLpret.l_pret=code
      console.log(this.idLpret.l_pret)

      
      this.listlig=this.list.ligPretPers
      console.log(" 1 :",this.listlig); 
      }


  }
  getCessionPerso(){
    this.serv.fetchPretAvance(this.idCessionPers).subscribe(
      
        data => {
          this.list =data;
          this.listlig=this.list.ligPretPers;
          console.log(" 1 :",this.listlig); 
                 
      },
      err => {
        console.log(err);
      }
      );

    }
    
    getPretAvance(){
      this.serv.fetchPretAvance(this.idCessionPers).subscribe(
        
          data => {
            this.listpretavance =data[0];
           this.list=data
            console.log(" 1pret et avance  :",this.listpretavance); 
                   
        },
        err => {
          console.log(err);
        }
        );
  
      }

        
  test(){
    this.idCessionPers.cod_pret=this.codepret
    this.getCessionPerso()
    console.log("test : ",this.idCessionPers.cod_pret);
  } 


  onCellClicked(cellData){

this.action(cellData.value)

   
   
  }


getgouv1(){
  this.serv.getListPretCode(this.idCessionPers.cod_soc,this.idCessionPers.mat_pers).subscribe(
    data1 => {
      this.array =data1;
     

      console.log("dddd : ",this.array );
     
    },
    err => {
      console.log(err);
    }
    );

  }




  columnDefs = [
    {
      headerName: "N Lig",
      field: "l_pret",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
      cellRenderer: function(params) {
        if (params.node.isSelected()) {
          return '<div style="background-color: yellow">' + params.value + '</div>';
        } else {
          return params.value;
        }
      }
    },

    {
      headerName: "Type Bulletin",
      field: "cod_typ_bul",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Libell??",
      field: " ",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    
    {
      headerName: "Date tranche r??el",
      field: "mois_pret_prevu",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Retenue",
      field: "val_pret",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Rest cap pr??t",
      field: "cap_rest",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Valid??",
      field: "val_pret",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "R??gler",
      field: "reg_pret",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
   

  ];

  listObject:any
  modules: Module[] = [ClientSideRowModelModule];
}