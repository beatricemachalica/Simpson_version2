// JS menu burger :

document.querySelector('.burger').addEventListener("click", function (){
    document.querySelector("nav").classList.toggle("visible");
});

// fonctionnement :

// dans le document, je recherche le selecteur avec la class burger ; puis écouter les événements clic
// lorsqu'il "entend" le clic, il execute une fonction
// dans le doc, on recherche le selecteur "nav", on regarde sa liste de classe, et on lui demande
// d'alterner entre ajouter/supprimer la classe "visible"
// toggle = alterner un état vers un autre

// ne pas oublier la balise script dans le html juste avant la fermeture du <body>