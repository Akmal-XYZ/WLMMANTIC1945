document.getElementById('namaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let inputNama = document.getElementById('namaInput').value;
  let regex = /^(?!.*(?:Shelby|Tzy|Pcsi|Shellby|shellby|Tzy|Kontol|Memek|Ngentot|Puki|Jembut|Peler|Asu|tzy))(?=.*_)[a-zA-Z0-9_]+$/;
  
  if (!regex.test(inputNama)) {
    alert("NAMA TIDAK VALID\nMungkin Nama Anda Mengandung Kata Terlarang");
  } else {
    let website = "mailto: aditgaming1945gg@gmail.com?subject=wl " + inputNama + "";
    window.location.href = website;
  }
});
