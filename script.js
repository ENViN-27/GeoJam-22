let right_car = document.querySelector('.right_car');
let left_car = document.querySelector('.left_car');
let movebytop=10;
let movebyside=20;

let right_car_side_left=1;
let right_car_side_right=0;

let left_car_side_left=0;
let left_car_side_right=1;

window.addEventListener('load',()=>{
    right_car.style.position ='absolute';
    right_car.style.left = 107+'vh' ;
    right_car.style.top =80+'vh'; 

    left_car.style.position='absolute';
    left_car.style.left = 87 +'vh' ;
    left_car.style.top =  80 +'vh';
});



while(left_car.style.top > (80 + 'vh' ))
{
    left_car.style.top = parseInt(left_car.style.top) + 10 +'vh'; 
    
}


window.addEventListener('keyup',(e) => {
    switch(e.key){
        // case 'n':
        //     if(side_right){
        //     right_car.style.left =parseInt(right_car.style.left) + movebyside +'vh';
        //     side_right=0;
        //     side_left=1;
        // }
        //     break;
        case 'v' :
            if(right_car_side_left){
            right_car.style.left =parseInt(right_car.style.left) - movebyside +'vh';
            right_car_side_left = 0;
            right_car_side_right = 1;
            }
            else if(right_car_side_right){
                right_car.style.left =parseInt(right_car.style.left) + movebyside +'vh';
                right_car_side_right=0;
                right_car_side_left=1;
        }
            break;    
        case 'ArrowUp':
            right_car.style.top =parseInt(right_car.style.top) - movebytop +'vh';
            break;    
        case 'ArrowDown':
            right_car.style.top =parseInt(right_car.style.top) + movebytop +'vh';
            break;     

    }
});

window.addEventListener('keyup',(e) => {
    switch(e.key){
        // case 'n':
        //     if(side_right){
        //     right_car.style.left =parseInt(right_car.style.left) + movebyside +'vh';
        //     side_right=0;
        //     side_left=1;
        // }
        //     break;
        case 'v' :
            if(left_car_side_left){
            left_car.style.left =parseInt(left_car.style.left) - movebyside +'vh';
            left_car_side_left = 0;
            left_car_side_right = 1;
            }
            else if(left_car_side_right){
                left_car.style.left =parseInt(left_car.style.left) + movebyside +'vh';
                left_car_side_right=0;
                left_car_side_left=1;
        }
            break;    
        case 'w':
            left_car.style.top =parseInt(left_car.style.top) - movebytop +'vh';
            break;    
        case 's':
            left_car.style.top =parseInt(left_car.style.top) + movebytop +'vh';
            break;     

    }
});

