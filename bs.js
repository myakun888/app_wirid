let form = {
  pilihan: document.getElementById("pilihan"),
  wirid: document.getElementById("wirid"),
  teks: document.getElementById("teks"),
  arti: document.getElementById("arti"),
  doa: document.getElementById("doa"),
  textDoa: document.getElementById("floatingTextarea2"),
  jumlah: document.getElementById("jumlah"),
  state: document.getElementById("batas"),
  btn: {
    close: document.getElementById("close"),
    clear: document.getElementById("clear"),
    simpan: document.getElementById("simpan"),
  },
  proses: document.getElementById("proses"),
  stop: document.getElementById("stop"),
  bcg1: document.getElementById("b1"),
};

// let pilihan=document.getElementById("pilihan")
// form hasil

let hasil = {};

class wirid {
  constructor(lafal, teks, arti) {
    (this.lafal = lafal), (this.teks = teks), (this.arti = arti);
  }
}

let groupobject = {
  sholawat: (sholawat = new wirid(
    "َللهم صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
    "Allahumma Sholli 'Ala Sayyidina Muhammad Wa'ala Ali Sayyidina Muhammad",
    "Ya Allah, limpahkanlah rahmat kepada Nabi Muhammad dan kepada keluarga Nabi Muhammad"
  )),

  istgifar: (istigfar = new wirid(
    "أَسْتَغْفِرُ ٱللَّٰهَ",
    "Astaghfirullah",
    "Aku memohon ampun kepada Allah"
  )),

  takbir: (takbir = new wirid(
    "ٱللَّٰهُ أَكْبَرُ",
    "Allahu Akbar",
    "Allah Maha Besar"
  )),

  tahmid: (tahmid = new wirid(
    "ٱلْحَمْدُ لِلَّٰهِ",
    "alhamdulillah",
    "segala puji bagi Allah"
  )),

  tasbihTahmidTakbir: (tasbihTahmidTakbir = new wirid(
    "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ",
    "Subhanallah walhamdulillah walailaha illallah wallahu akbar",
    "Maha suci Allah, segala puji bagi Allah tidak ada Tuhan selain Allah dan Allah Maha Besa"
  )),
}; // proses

// pem interval adalah function yg hanya membungkgus function interval biar tidak otmtatis jalan

// untuk setinterval membuat variabel menggunakan keyword var, agar bisa di akses secara global oleh function lain yang berbeda scope

let pem_interval = function () {
  let start = 0;
  mulai = setInterval(function () {
    start += 1;

    form.state.innerHTML = start;

    // if(start==parseInt(jumlah)){
    //     clearInterval(mulai)
    // }
    form.state.style.color = "white";
    if (start == 10000) {
      clearInterval(mulai);
      form.state.innerHTML = `telah mencapai ${start}`;
    }

    if (start % 2 == 0) {
      form.wirid.style.color = " salmon";
    } else {
      form.wirid.style.color = " green";
    }

    if (start % 60 == 0) {
      form.bcg1.style.backgroundColor = "green";
    } else {
      form.bcg1.style.backgroundColor = "warning";
    }
  }, 1000);
};

function proses(jalan) {
  // let start =0;

  switch (form.pilihan.value) {
    case "sholawat":
      (form.wirid.innerHTML = sholawat.lafal),
        (form.teks.innerHTML = sholawat.teks);
      form.arti.innerHTML = sholawat.arti;
      break;
    case "istigfar":
      form.wirid.innerHTML = istigfar.lafal;
      form.teks.innerHTML = istigfar.teks;
      form.arti.innerHTML = istigfar.arti;
      break;
    case "takbir":
      form.wirid.innerHTML = takbir.lafal;
      form.teks.innerHTML = takbir.teks;
      form.arti.innerHTML = takbir.arti;
      break;
    case "tahmid":
      form.wirid.innerHTML = tahmid.lafal;
      form.teks.innerHTML = tahmid.teks;
      form.arti.innerHTML = tahmid.arti;
      break;
    case "tasbih tahmid takbir":
      form.wirid.innerHTML = tasbihTahmidTakbir.lafal;
      form.teks.innerHTML = tasbihTahmidTakbir.teks;
      form.arti.innerHTML = tasbihTahmidTakbir.arti;
      break;

    default:
      break;
  }
  // form.wirid.innerHTML= form.pilihan.lafal
  // form.arti.innerHTML= pilihan.arti
  form.doa.innerHTML = form.textDoa.value;
  // console.log(form.pilihan.value)

  jalan();

  if (form.pilihan.value == "0") {
    alert("anda belum memilih");
    clearInterval(mulai);
  }
}

/* function oke adalah function pembugkuhs function proses, dimana function proses memiiliki parameter yang isi ny fungsion 

         jika tidak inggin mengunakan funcion sebagai parameter masukan saja isi fungsion pem_interval ke dalam function proses

         memisakhan funciton dan dibuat jd parameter agar lebih muda di lihat*/
let oke = function () {
  proses(pem_interval);
};

function berhenti() {
  clearInterval(mulai);
  start = 0;
  form.state.innerHTML = start;
  form.wirid.style.color = "black";
  console.log(start);
  form.proses.disabled = false;
}

function hapus() {
  form.textDoa.value = "";
}

function simpandoa() {
  form.doa.innerHTML = form.textDoa.value;
}

form.btn.clear.addEventListener(`click`, hapus);

form.btn.simpan.addEventListener(`click`, simpandoa);

form.proses.addEventListener(`click`, oke);
form.proses.addEventListener(`click`, function () {
  form.proses.disabled = true;
  if (form.pilihan.value == "0") {
    form.proses.disabled = false;
  }
});
// form.proses.classList.toggle("hilang")

form.stop.addEventListener("click", berhenti);

waktu = {
  utama: new Date().getMonth().toString(),
};
