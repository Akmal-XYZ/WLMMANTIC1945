document.getElementById('namaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let inputNama = document.getElementById('namaInput').value;
  let regex = /^(?!.*(?:Shelby|Tzy|Pcsi|Shellby|shellby|Tzy|Kontol|Memek|Ngentot|Puki|Jemut|Peler|Asu|tzy|dajjal|Skibidi|Yesus|yesus|mewing|skibidi|cool|Petot|petot|Patriot|patriotCool|suki|Suki|Alpha|Sigma|sigma|ambatukam|Ambatukam|Amba|amba|Yanto_Cukurukuk|cold|mantap|Mantap|Samp|samp|penis|Penis|gta|Gta|Fivem|fivem|cleo|Cleo|cheat|Cheat|Monet|monet|gaming|Gaming|Geming|Titit|titit|Ucay|ucay|Ambatron|ambatron|Cold))(?=.*_)(?=(?:[a-z]*[A-Z]){0,2})[a-zA-Z0-9_]+$/;
  
            
            if (!regex.test(inputNama)) {
                document.getElementById('error').innerText = "⚠️Masukin Nama Yang Bener Kontol";
            } else {
                let uppercaseCount = inputNama.replace(/[^A-Z]/g, "").length;
                if (uppercaseCount < 2) {
                    document.getElementById('error').innerText = "⚠️Masukin Nama Yang Bener Kontol";
                } else if (uppercaseCount > 2) {
                    document.getElementById('error').innerText = "⚠️Masukin Nama Yang Bener Ngentot";
                } else {
                    let website = "mailto: aditgaming1945gg@gmail.com?subject=wl " + inputNama + "&body=wl201945pcsi20202420mcrp20akmal20ytta222220whitelist";
                    window.location.href = website;
                }
            }
        });
