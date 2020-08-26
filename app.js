// var time= 0
// var intervalTimeout;
// function timer(){
//     time++
//     console.log(time)
// }

// intervalTimeout = setInterval(timer,1000)

// function timeOut(){
//     clearInterval(intervalTimeout)
// }

// setTimeout(timeOut,5000)

//StopWatch

var msec = 0
var sec = 0
var min  = 0

var miliSecond  = document.getElementById("msec")
var seconds  = document.getElementById("sec")
var minutes = document.getElementById("min")

function timer(){
    msec++
    miliSecond.innerHTML = msec
    if ( msec>=100){
        sec++
        seconds.innerHTML = sec
        msec = 0
    }
    else if( sec >=10){
        min ++
        minutes.innerHTML = min
        sec = 0

    }

}



function start(){
    interval  =  setInterval(timer,10)
    
    
}
function stop(){
    clearInterval(interval)
    
}
function reset(){
    var msec = 0
    var sec = 0
    var min  = 0
    miliSecond.innerHTML = msec
    seconds.innerHTML= sec
    minutes.innerHTML=min
    stop()

}

function trigger(){
    if (start.disabled){
        start.disabled.innerHTML = false
        stop.disabled.innerHTML = true

    } else{
        start.disabled.innerHTML = true
        stop.disabled.innerHTML  = false
    }
}