
// let waktu = new Date()






let tempatWaktu = {
    jam :document.getElementsByTagName("li")[0],
    menit : document.getElementsByTagName("li")[1],
    detik :document.getElementsByTagName("li")[2]
}
   
        
        



setInterval(function(){
    let waktu = new Date()
    let satuan = {
        detik: waktu.getSeconds(),
        menit: waktu.getMinutes(),
        jam: waktu.getHours(),
    }


         tempatWaktu.jam.innerHTML= satuan.jam
         tempatWaktu.menit.innerHTML= satuan.menit
         tempatWaktu.detik.innerHTML= satuan.detik

        
    
    if(satuan.detik%2==0){
          tempatWaktu.detik.style.color="white"
     tempatWaktu.detik.style.backgroundColor="black"

        // form.wirid.style.color=" green"
    }
    else {
         tempatWaktu.detik.style.color="black"
    tempatWaktu.detik.style.background="white"
    }
   
},1000)

