function ucfirst(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst('bonjour la France'));

function capitalize(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    chaine = chaine.split(" ");
    for(var i = 0; i < chaine.length; i++){
        chaine[i] = chaine[i].charAt(0).toUpperCase() + chaine[i].slice(1);
    }
    return chaine.join(" ");
}

console.log(capitalize("bonjour la france"));

function camelCase(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    chaine = chaine.split(" ");
    for(var i = 0; i < chaine.length; i++){
        chaine[i] = chaine[i].charAt(0).toUpperCase() + chaine[i].slice(1);
    }
    return chaine.join("");
}

console.log(camelCase("bonjour la france"));

function snake_case(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    chaine = chaine.toLowerCase();
    chaine = chaine.split(" ");
    return chaine.join("-");
}

console.log(snake_case("BoNjOuR La FrAnCe"));


