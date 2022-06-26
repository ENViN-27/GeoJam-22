
const roadarea = document.querySelector('.road');
let player={step:5}
function movevehicles(){
    let vehicles=document.querySelectorAll('.vehicle');
    vehicles.forEach(function(item){
        if(item.y>750){
            item.y=-300;
            item.style.left=Math.floor(Math.random()*350)+'px';
        }
        item.y=item.y+player.step;
        item.style.top=item.y+'px';

        
    })
}
function movelines(){
    let roadlines=document.querySelectorAll('.line');
    roadlines.forEach(function(item){
        if(item.y>=700){
            item.y=item.y-750;
        }
        item.y=item.y+player.step;
        item.style.top=item.y+'px';
        
    })
    //item.y;
}
function playarea(){
    if(player.start){
        movevehicles();
        movelines();
        window.requestAnimationFrame(playarea);

    }
}

function init(){
    player.start=true;
    window.requestAnimationFrame(playarea);

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
  //vehicles on road generate randomly 
  for(var x=0;x<4;x++){
    let vehicles=document.createElement('div');
    vehicles.setAttribute('class','vehicle');
    vehicles.y=((x+1)*300)*-1;
    vehicles.style.top=vehicles.top+'px';

    vehicles.style.left=Math.floor(Math.random()*350)+'px';
    roadarea.appendChild(vehicles);
  }

  /*let line= document.createElement('div');
  line.setAttribute('class','line');
  roadarea.appendChild(line);*/


}
init();