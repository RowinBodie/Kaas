alert("Beantwoord de volgende vragen met ja of nee.")

var kleur = prompt("Is de kaas geel?");

if(kleur == "ja"){
var gaten = prompt("zitten er gaten in?");
} else if(kleur == "nee"){
var schimmels = prompt("heeft de kaas blauwe schimmels?");
} else {
    document.write("ik zei beantwoord met ja of nee!")
    Exit;
}

if(schimmels == "ja"){
    var korst = prompt("heeft de kaas een korst?")
}else if(schimmels == "nee"){
    var korst1 = prompt("heeft de kaas een korst?")
}else if(gaten == "ja"){
var duur = prompt("is de kaas belachelijk duur?")
}else if(gaten == "nee"){
var steen = prompt("is de kaas zo hard als steen?")
} else{
    document.write("ik zei beantwoord met ja of nee!")
    Exit;
}

if(steen == "ja"){
    document.write("Je kaas is Panmigiano Reggiano")
    Exit;
}else if(steen == "nee"){
    document.write("Je kaas is Goudsekaas")
    Exit;
} else if(duur == "ja"){
    document.write("Je kaas is Emmenthaler Kaas")
    Exit;
} else if(duur == "nee"){
    document.write("Je kaas is leerdammer")
    Exit;
}else if(korst == "ja"){
    document.write("Je kaas is Blue de Rochbaron")
    Exit;
} else if(korst == "nee"){
    document.write("Je kaas is Founme d'Ambert")
    Exit;
}else if (korst1 == "ja"){
    document.write("je kaas is Camembert")
    Exit;
}else if(korst1 == "nee"){
    document.write("Je kaas is Mozzarella")
    Exit;
}else{
    document.write("ik zei ja of nee!")
    Exit;
}