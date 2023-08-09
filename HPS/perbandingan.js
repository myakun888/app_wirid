// let a ={
//     nilai:70
// }


// let b= {
//     nilai :80
// }


// ini dalam bentuk object , yang prosedural nya yang di komentari tinggal di buka saja
let nilai = {
    a: 100,
    b: 120,
    tampilA: document.getElementById("A"),
    tampilB: document.getElementById("B"),
    niladiDapatA: document.getElementById("AA"),
    niladiDapatB: document.getElementById("BB"),
    tampil:""
}



// tampil=""



// let nA = document.getElementById("A")
// let nB = document.getElementById("B")


let hasil ={
    // satu: a.nilai- b.nilai,
    // dua : b.nilai- a.nilai,

    satu: nilai.a- nilai.b,
    dua : nilai.b - nilai.a,

    cek : function(){

        if (nilai.a > nilai.b) {


            // nA.innerHTML=(`ini keungulan nilai A+ ${tampil= hasil.satu}`)
            // nB.innerHTML=(``)

            nilai.tampilA.innerHTML=(`ini keungulan nilai A+ ${nilai.tampil= hasil.satu}`)
            nilai.tampilB.innerHTML=(``)

            console.log(`ini keungulan nilai A + ${nilai.tampil =hasil.satu}`)
        }

        else if (nilai.a < nilai.b ){

            nilai.tampilB.innerHTML=(`ini keungulan nilai B+ ${nilai.tampil= hasil.dua}`)
            nilai.tampilA.innerHTML=(``)
            
            console.log(`ini keungulan nilai B +  ${nilai.tampil = hasil.dua}`)

        }
    }
}

    nilai.niladiDapatA.innerHTML=(`${nilai.a}`)
    nilai.niladiDapatB.innerHTML=(`${nilai.b}`)

hasil.cek()

