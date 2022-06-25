
const roadarea = document.querySelector('.road');


function init(){

  // let vehicles=document.createElement('div');
  // vehicles.setAttribute('class','vehicle');
  // roadarea.appendChild(vehicles);
  //roadlines repeated
  for(var x=0;x<7;x++)
  {
  let roadlines=document.createElement('div');
  roadlines.setAttribute('class','line');
  roadlines.y=x*150;
  roadlines.style.top=roadlines.y+'px';
  roadarea.appendChild(roadlines);
  }

  /*let line= document.createElement('div');
  line.setAttribute('class','line');
  roadarea.appendChild(line);*/


}
init();