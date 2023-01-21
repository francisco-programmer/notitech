//!saltos de nube
let c = [0, 0, 1, 0, 0, 1, 1, 0]
let k = 2 

function nubes(c, k) {
    let e = 100
    let n = c.length
    
    
    for(let i = 0; i < c.length; i++ ){
        if(c[i] == 0){
            e -= 1            
        }
        if(c[i]  == 1 ){
            e-= k
        }

        
    }

    return e
}
console.log(nubes(c, k));



//! convertir hora en formato 24 horas
let hora ='09:01:00am'
function conversionhora(hora){
     let ff = hora[8] + hora[9]
     let hh = Number(hora[0]+ hora[1])
     let mm = (hora[3]+ hora[4])
     let ss = (hora[6]+ hora[7])   

        if(hh == 12 && ff == 'am'){
            hh = '0' + (hh - 12) 
            ff = "am"  + ''
        }
        if(hh < 10 && ff== 'am'){
            hh = '0' + hh
        }
        if(hh < 12 && ff == 'pm'){
            hh = hh + 12
        }
        let result = `${hh +":" + mm +":"+ ss+ ":"+ff}`
     return result  
     
}

