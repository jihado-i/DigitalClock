// Selectiong Elements

let hours       = document.querySelector("#hours")
let minitues    = document.querySelector("#minitues")
let seconds     = document.querySelector("#seconds")
let timing      = document.querySelector("#timing")



function updateFunc(){
    // Define Time
    var time = new Date()
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    // Hour chacking
    (()=>{

        if(h > 12 && m<59 && s<59){
            timing.innerHTML = "PM";
        }

        else{
            timing.innerHTML = "AM";
        }

    })();

    hours.innerText = h 
    minitues.innerText = m
    seconds.innerText = s


    if(h<10){

        hours.innerText = `0${h}`;

    }

    if(m<10){

        minitues.innerText = `0${m}`;

    }

    if(s<10 ){

        seconds.innerText = `0${s}`;

    }

    // Setting Time 
    setTimeout(function(){
        
        updateFunc()

    },1000)

}

updateFunc();