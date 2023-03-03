const independence = document.querySelector('#independence')


function independent(){
function tenn(cb = () => {}) {
    independence.innerHTML="10"
     cb();
}

function one(cb = () => {}) {
   independence.innerHTML="9"
    cb();
}

function two(cb = () => {}) {
    independence.innerHTML="8"

    cb();
}

function three(cb = () => {}) {
    independence.innerHTML="7"

    cb();
}

function four(cb = () => {}) {
    independence.innerHTML="6"
    cb();
}

function five(cb = () => {}) {
    independence.innerHTML="5"
    cb()
} 
function six(cb = () => {}) {
    independence.innerHTML="4"
    cb()
}
function seven(cb = () => {}) {
    independence.innerHTML="3"
    cb()
}
function eight(cb = () => {}) {
    independence.innerHTML="2"
    cb()
}
function nine(cb = () => {}) {
    independence.innerHTML="1"
    cb()
}
function ten(cb = () => {}) {
    independence.innerHTML="Happy Independence day"
    cb
}
function eleven(cb = () => {}) {
    console.log('HAPPY INDEPENDENCE DAY')
    cb
}



function greet() {
tenn(() => setTimeout(() => {
  one(() => setTimeout(() => {
     two(() => setTimeout(() => {
       three(()=> setTimeout(()=>{
        four(()=>setTimeout(()=>{
            five(()=>setTimeout(()=>{
                six(()=>setTimeout(()=>{
                    seven(()=>setTimeout(()=>{
                        eight(()=>setTimeout(()=>{
                            nine(()=>setTimeout(()=>{
                                ten(()=>setInterval(()=>{
                                    eleven(()=>setInterval(()=>{
                                        
                                    },1000))
                                },1000))
                            },1000))
                        },1000))
                    },1000))
                },1000))
            },1000))
        },1000))
       },1000));
     }, 1000));
  }, 1000));
}, 3000));
}

greet(); 

}

independent()
