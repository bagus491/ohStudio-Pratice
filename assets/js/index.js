let boxExp =  document.querySelector('.box-exp')
let boxBrand = document.querySelector('.box-brand')
let boxProd = document.querySelector('.box-prod')
let boxSys = document.querySelector('.box-sys')

let btnExp = document.getElementById('button-exp')
let btnBran = document.getElementById('button-bran')
let btnProd = document.getElementById('button-prod')
let btnsys = document.getElementById('button-sys')

boxBrand.style.display = "none"
boxProd.style.display = "none"
boxSys.style.display = "none"

function exp()
{
    if(boxBrand.style.display === "none"){
        boxBrand.style.display = "none"
        boxExp.style.display = "flex"
        boxProd.style.display = "none"
        boxSys.style.display = "none"
    }else{
        boxExp.style.display = "flex"
        boxBrand.style.display = "none"
        boxProd.style.display = "none"
        boxSys.style.display = "none"
    }
}


function bran()
{
    if(boxBrand.style.display === "none"){
        boxBrand.style.display = "flex"
        boxExp.style.display = "none"
        boxProd.style.display = "none"
        boxSys.style.display = "none"
    }else{
        boxExp.style.display = "flex"
        boxBrand.style.display = "none"
        boxProd.style.display = "none"
        boxSys.style.display = "none"
    }
}

function prod()
{
    if(boxProd.style.display === "none"){
        boxBrand.style.display = "none"
        boxExp.style.display = "none"
        boxProd.style.display = "flex"
        boxSys.style.display = "none"
    }else{
        boxExp.style.display = "flex"
        boxBrand.style.display = "none"
        boxProd.style.display = "none"
        boxSys.style.display = "none"
    }
}


function sys()
{
    if(boxSys.style.display === "none"){
        boxBrand.style.display = "none"
        boxExp.style.display = "none"
        boxProd.style.display = "none"
        boxSys.style.display = "flex"
    }else{
        boxExp.style.display = "flex"
        boxBrand.style.display = "none"
        boxProd.style.display = "none"
        boxSys.style.display = "none"
    }
}



                            