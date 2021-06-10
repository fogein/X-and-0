for (let i = 0; i<9; i++){
  document.querySelector('.game').innerHTML+='<div class="block"></div>';
}

let step = 0;

document.querySelector('.game').addEventListener('click', function (event){
    if (event.target.className == 'block'){
      if (step%2==0) {
        event.target.innerHTML = 'x';
      }
      else {
        event.target.innerHTML = '0';
      }
      step++;
      checkWinner();
    }
      function checkWinner() {
        let allBlock = document.querySelectorAll('.block');
        //Крестики 
        if (allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x' && allBlock[2].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[5].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x' && allBlock[8].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x' && allBlock[6].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[7].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x' && allBlock[8].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[8].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[6].innerHTML == 'x'){
          setTimeout(() => {
            alert('Победили крестики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
         //Крестики конец
        //Нолики начало
        if (allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        if (allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0'){
          setTimeout(() => {
            alert('Победили нолики');
            }, 200);
            setTimeout(() => {
              location.reload();
            }, 300);
        }
        //Нолики конец
        //ничья
        
        //ничья конец
      }
});