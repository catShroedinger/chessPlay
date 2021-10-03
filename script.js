let checkbox = document.getElementById('checkbox')
let cont = document.getElementById('container')

checkbox.onclick = function() {
        for(let i = 0; i < 8; i ++) {
          for(let j = 0; j < 8; j++) {
            let nElem = document.createElement('div')
            nElem.classList.add('sqr')
              if(checkbox.checked == false){
                  break
              }
              if ((i + j) % 2 == 0) {
                  nElem.style.backgroundColor = 'white';
                  
              }
              else {
                  nElem.style.backgroundColor = 'grey';
              }

              if(i == 1) {
                nElem.style.backgroundImage = "url('wpawn2.png')";
              }
              if(i == 6) {
                nElem.style.backgroundImage = "url('bpawn.png')";
              }
              if(i == 0 && (j == 0 || j == 7)) {
                nElem.style.backgroundImage = "url('wlad2.png')";
              }
              if(i == 7 && (j == 0 || j == 7)) {
                nElem.style.backgroundImage = "url('blad.png')";
              }
              if(i == 0 && (j == 2 || j == 5)) {
                nElem.style.backgroundImage = "url('wsl.png')";
              }
              if(i == 7 && (j == 2 || j == 5)) {
                nElem.style.backgroundImage = "url('bsl.png')";
              }
              if(i == 0 && j == 4) {
                nElem.style.backgroundImage = "url('wq.png')";
              }
              if(i == 7 && j == 4) {
                nElem.style.backgroundImage = "url('bq.png')";
              }
              if(i == 0 && j == 3) {
                nElem.style.backgroundImage = "url('wk.png')";
              }
              if(i == 7 && j == 3) {
                nElem.style.backgroundImage = "url('bk.png')";
              }
              if(i == 0 && (j == 1 || j == 6)) {
                nElem.style.backgroundImage = "url('wh.png')";
              }
              if(i == 7 && (j == 1 || j == 6)) {
                nElem.style.backgroundImage = "url('bh.png')";
              }
            cont.append(nElem)
          }
     }  
}

