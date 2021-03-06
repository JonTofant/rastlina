/*------------
Deklaracija spremenljivk
-----------------*/

const slikaGumbBarva = document.querySelector('.slikaGumbBarva')
const gumbBarva = document.querySelector('.gumbBarva');
const body = document.querySelector('body');
let notranjiOkvirEna = document.querySelector('.ena');
let notranjiOkvirDva = document.querySelector('.dve');
let vlaga;
let clicked =true; //Tema je v osnovi svetla
//temaOzadja dobi vrednost shranjeno iz prejšnjega obiska strani
let temaOzadja=window.localStorage.getItem('tema');
//Preveri če tema ozadja obstaja
if(temaOzadja){
    //Če tema ozadja obstaja in je ta temna vklopi temen način
    if(temaOzadja=='temna'){
        temno()

    }
    //Drugače vklopi svetel način
    else{
        svetlo()
    }
}

/*------
Glavni program
----------*/

barvaOzadja();



/*------------
Funkcija za barvo ozadja
--------------*/

function barvaOzadja(){
  gumbBarva.addEventListener('click', function (e){
    //Posluša za klik na gumb
    if(!clicked){
        svetlo()
    }
    else{
        temno()
    } 
  });
}

/*------------
Svetli način
-----------------*/

function svetlo(){
    body.style.backgroundColor='#add9db'
    clicked= true
    notranjiOkvirEna.style.backgroundColor='white'
    notranjiOkvirDva.style.backgroundColor='white'
    //Shrani izbiro uporabnika v localstorage
    window.localStorage.setItem('tema', 'svetla');
    slikaGumbBarva.src='slike/lightMode.svg'
}

/*------------
Temni način
-----------------*/

function temno(){
    body.style.backgroundColor='#606060'
    clicked=false
    notranjiOkvirEna.style.backgroundColor='darkGrey'
    notranjiOkvirDva.style.backgroundColor='darkGrey'
    //Shrani izbiro uporabnika v localstorage
    window.localStorage.setItem('tema', 'temna');
    slikaGumbBarva.src='slike/darkoMode.svg'
}

/*-------
Graf
---------*/
/* Ostanek google grafa
google.load('visualization', '1', {
    packages: ['corechart', 'line']
  });
  google.setOnLoadCallback(drawBackgroundColor);
  
  function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'x');
    data.addColumn('number', 'Temperatura');
    data.addColumn('number', 'Vlaga');
    console.log("--");
    data.addRows([
      [0, 0, 0],
      [1, 10, 15],
      [2, 20, 65]
    ]);
    console.log(data);
     var options = {
      height: "",
      legend: {
        position: 'bottom'
      },
      hAxis: {
        title: 'Dan'
      },
      vAxis: {
        title: 'Temperatura [°C]'
      },
      backgroundColor: ''
    };
  
    function resize() {
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
  
  }
  */