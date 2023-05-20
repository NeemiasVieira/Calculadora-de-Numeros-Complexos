//Variáveis Constantes Globais

const radioPolar = document.getElementById("polar");
const radioRetangular = document.getElementById("retangular");
const labelRetangular = document.getElementById("FormaRetangular");
const labelPolar = document.getElementById("FormaPolar");
 
//Eventos de radioButton alternados

radioPolar.addEventListener("click", () => {
    radioPolar.checked = true;
    radioRetangular.checked = false;
})

radioRetangular.addEventListener("click", () => {
    radioRetangular.checked = true;
    radioPolar.checked = false;
})

//Função de conversão para retangular.

const ConverteParaRetangular = (mod, ang1) => {    
      
    let ang2 = (ang1*(Math.PI/180));
    let a = (mod*(Math.cos(ang2)));
    let b = (mod*(Math.sin(ang2)));

    return {a, b};
}

//Função de conversão para Polar

const ConverteParaPolar = (r, i) => {
    let pol = Math.sqrt((Math.pow(r,2))+(Math.pow(i,2)));
    let arc = Math.atan(i/r);
    let ang = (arc*(180/Math.PI));
    labelPolar.innerHTML = "Forma Polar: "+pol.toFixed(2)+" | "+ang.toFixed(2)+"º";
}

//Função acionada quando o botão converter é clicado
function Converte(){
    let mod = parseFloat(document.querySelector("#realMod").value);
    let ang1 = parseFloat(document.querySelector("#imagAng").value);
    let r = parseFloat(document.getElementById("realMod").value);
    let i = parseFloat(document.getElementById("imagAng").value);

    //Valida as informações.
    if((!mod && ang1) || (mod && !ang1) || (mod && ang1) || (mod == 0 || ang1 == 0)){}

    else{
        if(radioPolar.checked == true){
            Limpar()
            radioPolar.checked = true;
            labelRetangular.innerHTML = "Por favor digite os valores nos campos.";
            return;
        }
        if(radioRetangular.checked == true){
            Limpar()
            radioRetangular.checked = true;
            labelRetangular.innerHTML = "Por favor digite os valores nos campos.";
            return;
        }
        else{     
            labelRetangular.innerHTML = "Por favor digite os valores nos campos.";
            return;        
        }
    }
    if(!radioPolar.checked && !radioRetangular.checked){
        labelRetangular.innerHTML = "Por favor marque uma opção de conversão.";
    }   
    

    //Checa qual conversão será feita.

    if(radioPolar.checked){
        if(!i) i = 0;
        if(!r) r = 0;
        labelRetangular.innerHTML = "";        
        ConverteParaPolar(r, i);
    }
    else if(radioRetangular.checked){
        let mod = parseFloat(document.querySelector("#realMod").value);
        let ang1 = parseFloat(document.querySelector("#imagAng").value);
        if(!mod) mod = 0;
        if(!ang1) ang1 = 0;
        labelPolar.innerHTML = "";
        let {a , b} = (ConverteParaRetangular(mod, ang1));                    
        if(b < 0){
            let positivo = (-1*b);
            labelRetangular.innerHTML = "Forma Retangular: "+a.toFixed(2)+" - j"+positivo.toFixed(2);
        }
        else{
            labelRetangular.innerHTML = "Forma Retangular: "+a.toFixed(2)+" + j"+b.toFixed(2);
        }
    }
}

//Limpa o conteúdo.
function Limpar(){
    radioRetangular.disabled = false;
    radioPolar.disabled = false;

    radioRetangular.checked = false;
    radioPolar.checked = false;

    document.getElementById("realMod").value = "";
    document.getElementById("realMod").focus();
    document.getElementById("imagAng").value = "";

    document.getElementById("FormaRetangular").textContent = "";
    document.getElementById("FormaPolar").textContent = ""; 
}
//Valida entradas no input.
function SomenteNumero(evt) {     
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && ASCIICode != 46 && ASCIICode != 45 && (ASCIICode < 48 || ASCIICode > 57)){
        return false;
    }
    else{
        return true;
    } 
} 