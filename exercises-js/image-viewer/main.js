
const files = document.querySelector('input[type=file]').files;
const tBody = document.querySelector('.table_body'); 

function previewFiles() {

    const files = document.querySelector('input[type=file]').files;
  
    function readAndPreview(file) {
  
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        const reader = new FileReader();
  
        reader.addEventListener("load", function () {
            const image = new Image();
          image.height = 60;
          image.title = file.name;
          image.src = this.result;
          // Al elemento tBody le agrego la imagen
          tBody.appendChild(image);
          // Coloco una condicion que determinara si al elemento td le agrego un hijo
          if (tBody.appendChild(image)) { 
            // Como condicion creo 3 elementos que ire agregando por cada condicion
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const p = document.createElement('p');
            p.innerHTML = 'Archivo subido con exito';
            tr.appendChild(td);
            tr.classList.add('tr_table');
            tBody.appendChild(tr);
            td.appendChild(image);
            td.appendChild(p);
            }   
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
  }
