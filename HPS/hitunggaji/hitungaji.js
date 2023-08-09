

// let gaji={
// pokok: 1000000,
// lembur:0,

// total_telat:7,
// telat:50000,
// total_potongan:0
// }

// absen = {
//     masuk:30,
//     telat:3
// }


// function hitung_tlat (){
//  if (gaji.total_telat<=2){
//     console.log (gaji.total_potongan= gaji.telat* gaji.total_telat)
// }
//  else if(gaji.total_telat >2 && gaji.total_telat<=4){
//    gaji.total_potongan= ((gaji.total_telat-2)*100000) + (2*50000)
//    console.log(gaji.total_potongan)
//  }
//   else if(gaji.total_telat >4){
//     gaji.total_potongan= ((gaji.total_telat-4)*200000) + (300000)
//   console.log(gaji.total_potongan)
//   }


// }

// hitung_tlat()
    


class ceo {
    constructor(nama,gajipokok,){
        this.nama = nama
        this.pokok =gajipokok;
        this.lembur = 0;
        this.total_telat=2
        this.dendaTelat=50000;
        this.total_potongan=0;

    };
 
       telat (jumlah){
         this.total_telat+=jumlah

         return this.total_telat
       }
       hitung_tlat (){
        if (this.total_telat<=2){
         return this.total_potongan= this.dendaTelat* this.total_telat
       }
        else if(this.total_telat >2 && this.total_telat<=4){
          this.total_potongan= ((this.total_telat-2)*100000) + (2*50000)
          console.log(this.total_potongan)
        }
         else if(this.total_telat >4){
           this.total_potongan= ((this.total_telat-4)*200000) + (300000)
         console.log(this.total_potongan)
         }
       
       
       }
       
    
}

fajrin = new ceo ("fajrin",100000000)
// console.table(fajrin)


console.log(fajrin)