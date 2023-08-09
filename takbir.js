
// domm






let takbir={
    takbir:"allahu akbar",
    walillah_ilham: "lailahaillah wallaukabar allhuakbar walillah ilham",
    jumlah:0,
    ucapan: " fajrin dan keluarga mengucapkan minal aidin walfaidzin mohon maaf lahir dan batin",
    mulai: ""
}





let bismillah_takbir= function(state,nama){
    takbir.jumlah
mulai =setInterval(function(){
  takbir.jumlah++
console.log(`${takbir.takbir} `)
if(takbir.jumlah==state){
    console.log(`${takbir.walillah_ilham}`)
    clearInterval(mulai)
    setTimeout(function(){
        console.log(`${nama} dan keluarga mengucapkan minal aidin walfaidzin mohon maaf lahir dan batin` )
    },2000)
}

},1500)

}


// setTimeout(() => {console.log("bismillah hirohmanirohim")
    
// }, 500);

// bismillah_takbir(5,"fajrin")


let wirid= function(state,jenisWirid,doa){
    let wiridStart=0;
mulai =setInterval(function(){
    wiridStart++
console.log(`${jenisWirid} ${wiridStart} X`)
if(wiridStart==state){
  
    clearInterval(mulai)
    setTimeout(function(){
        console.log(` ${doa} aamiin yarobbal alamin` )
    },2000)
}

},1500)

}


// setTimeout(() => {console.log("bismillah hirohmanirohim")
    
// }, 500);




// funcion contruktur membuat object nya
function wiridharian ( wiridnya,){
    this.wiridd= wiridnya

}

let tasbih = new wiridharian ("subhananallah")
let takbirrr = new wiridharian( "allahuakbar")
let subh = new wiridharian( "subhanallah wabihamdi subhananllah hiladzim astafirullah")
let istigfar = new wiridharian( "astafirullah")
let sholawat= new wiridharian("allahuma sholiala sayidina muhammad")

// let wirid= function(state,jenisWirid,doa)

wirid(10000,sholawat.wiridd,"ya allah jadi kan kami, saya dan istri saya orang yg kaya ilmu,kaya harta ,kaya hati, tingkatkan lah karir hamba dan pintarkan otak hamba , jadi programmer yg handal dan profesional")
// wirid(1000,subh.wiridd,"ya robbi engkau maha tinggi dan engkau maha besar")

