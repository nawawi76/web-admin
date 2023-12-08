console.log("ho'oh");
document.getElementById("judul").innerHTML = "Form Login"; //cara ganti text via js. dom property
document.getElementById("judul").style.color = "blue"; //cara merubah style. dom property
// document.getElementById("username").value = "lp3i"; //value atau isi. dom property

//cara pertama
// document.write(txt_user+" <br> "); //cara menampilkan atau output
// document.write("username = "+txt_user+" <br> "); //cara menampilkan dengan memanggil 

//cara menulis function dan nama function/fungsi tidak boleh ada spasi
function ceklogin() {
    let txt_user = document.getElementById("username").value; //ini contoh isi function
    let password = document.getElementById("password").value;
    // //cara kedua
    // document.write("username = "+txt_user+ " <br> password ="+password); //menampilkan output ke halaman
    
    alert("Cek Login Bro!!"+" username = "+txt_user+ " <br> password = "+password); //ini menampilkan di notif
    //clear inputan form otomatis 
    document.getElementById("username").value =""; 
    document.getElementById("password").value ="";
}