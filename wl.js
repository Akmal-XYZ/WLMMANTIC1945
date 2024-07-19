document.getElementById('namaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let inputNama = document.getElementById('namaInput').value;
  let regex = /^(?!.*(?:Shelby|Tzy|Pcsi|Shellby|shellby|Tzy|Kontol|Memek|Ngentot|Puki|Jemut|Peler|Asu|tzy|dajjal|Skibidi|Yesus|yesus|mewing|skibidi|cool|Cool|suki|Suki|Alpha|Sigma|sigma|ambatukam|Ambatukam|Amba|amba|Yanto_Cukurukuk|cold|Cold))(?=.*_)(?=(?:[a-z]*[A-Z]){0,2})[a-zA-Z0-9_]+$/;
  
  if (!regex.test(inputNama)) {
    document.getElementById('error').innerText = "⚠️Masukin Nama Yang Bener Kontol";
  } else {
    let uppercaseCount = inputNama.replace(/[^A-Z]/g, "").length;
    if (uppercaseCount > 2) {
      document.getElementById('error').innerText = "⚠️Masukin Nama Yang Bener Kontol";
    } else {
      let website = "mailto: aditgaming1945gg@gmail.com?subject=wl " + inputNama + "";
      window.location.href = website;
    }
  }
});
