// contoh fungsi function dengan return
function welcome(){
    return("Selamat Datang di Aplikasi Web");
}
welcome();
document.getElementById("title").innerHTML = welcome();
// contoh fungsi dengan parameter
function creator(tanggal, programer){
    return("tanggal "+tanggal+" programer"+programer);
}
let tgl = new Date();
let tanggalSekarang = tgl.getDay()+"-"+tgl.getMonth()+"-"+tgl.getFullYear();
document.getElementById("subtitle").innerHTML = creator(tanggalSekarang, " amin");
// contoh membuat array
let menus = ["menu_1", "menu_2", "menu_3"]; 
console.log(menus.length); //untuk menampilkan panjang array
console.log(menus[1]); //untuk menampilkan isi array berdasarkan index
menus.push("menu_4"); // menambahkan satu atau lebih elemen didalam Array di akhir
menus.pop(); // untuk menghapus elemen terakhir di dalam Array
menus.unshift("menu_0"); // untuk menambahkan satu atau lebih elemen didalam Array di awal
menus.shift(); // untuk menghapus elemen di awal di dalam Array
menus.splice(0,2,["abc"]); // index akan diganti semaunya (string) dihapus atau diganti
console.log(menus); //untuk menampilkan panjang array dan berdasarkan index atau keseluruhan
let submenu = ["sub01", "sub02", "sub03"];
let join = menus.concat(submenu); // untuk memggabungkan beberapa Array menjadi satu atau membuat array baru
console.log(join); // menampilkan yg diatas
//fungsi foreach
let spesifikasi = ["HTML/CSS", "PHP", "JAVASCRIPT", "DB MYSQL"];
let ulspek = document.getElementById("listspek");
//menggunakan foreach untuk menambahkan elemen <li> kedalam <ul>
spesifikasi.forEach(function(spek){
    //membuat <li>
    let listspek = document.createElement("li");
    //menetapkan teks elemen <li> dengan nilai dari array
    listspek.textContent = spek;
    //menambahkan elemen <li> kedalam <ul>
    ulspek.appendChild(listspek);
});
//contoh variabel dengan value berupa data object
let dataPerusahaan = {Alamat:"jl. Perlis Selatan", Telp:"0881026670618", Email:"nawawimachmud@gmail.com"};
document.getElementById("almt").innerHTML = dataPerusahaan.Alamat;
document.getElementById("tlp").innerHTML = dataPerusahaan.Telp;
document.getElementById("email").innerHTML = dataPerusahaan.Email;




