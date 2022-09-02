//DESATIVA RADIO BUTTON
function DesativaRadio(){
    if(document.getElementById("polar").checked){
        document.getElementById("retangular").disabled = true;
    }
    else if(document.getElementById("retangular").checked){
        document.getElementById("polar").disabled = true;
    }
}
//REALIZA AS CONVERSÕES
function Converte(){
    //CONVERTE PARA POLAR
    if(document.getElementById("polar").checked){
        var r = parseFloat(document.getElementById("realMod").value);
        var i = parseFloat(document.getElementById("imagAng").value);
        var pol = Math.sqrt((Math.pow(r,2))+(Math.pow(i,2)));
        var arc = Math.atan(i/r);
        var ang = (arc*(180/Math.PI));
        document.getElementById("FormaPolar").innerHTML = "Forma Polar: "+pol.toFixed(2)+" | "+ang.toFixed(2)+"º";
    }
    //CONVERTE PARA RETANGULAR
    else if(document.getElementById("retangular").checked){
        var mod = parseFloat(document.getElementById("realMod").value);
        var ang1 = parseFloat(document.getElementById("imagAng").value);
        var ang2 = (ang1*(Math.PI/180));
        var a = (mod*(Math.cos(ang2)));
        var b = (mod*(Math.sin(ang2)));
        if(b < 0){
            var positivo = (-1*b);
            document.getElementById("FormaRetangular").innerHTML = "Forma Retangular: "+a.toFixed(2)+" - j"+positivo.toFixed(2);
        }
        else{
            document.getElementById("FormaRetangular").innerHTML = "Forma Retangular: "+a.toFixed(2)+" + j"+b.toFixed(2);
        } 
    }
}
//LIMPAR CONTEÚDO
function Limpar(){
    document.getElementById("retangular").disabled = false;
    document.getElementById("polar").disabled = false;

    document.getElementById("retangular").checked = false;
    document.getElementById("polar").checked = false;

    document.getElementById("realMod").value = "";
    document.getElementById("imagAng").value = "";

    document.getElementById("FormaRetangular").textContent = "";
    document.getElementById("FormaPolar").textContent = ""; 
}
//VALIDAR NÚMEROS
function SomenteNumero(evt) {     
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && ASCIICode != 46 && ASCIICode != 45 && (ASCIICode < 48 || ASCIICode > 57)){
        return false;
    }
    else{
        return true;
    } 
} 