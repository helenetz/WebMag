function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
          
       

        let navConteneur = document.getElementById("navConteneur")
       
        let nomJournal = document.getElementById("navConteneur");
        let mysteres = document.getElementById("mysteres")
        let occulte = document.getElementById("occulte")
        let arts = document.getElementById("arts")
        let fiction = document.getElementById("fiction")
        let texteAppelAction = document.getElementById("texteAppelAction")


      
        let imageLogo = document.createElement("img")
        imageLogo.className = ("logoimg")
        imageLogo.src = data.journal.imageLogo
        imageLogo.alt = data.journal.nomJournal
        console.log(imageLogo);
        navConteneur.appendChild(imageLogo)
        
        nomJournal = document.createElement("h3");
        nomJournal.textContent = data.journal.nomJournal;
        nomJournal.className = ("nomJournal")
        console.log(nomJournal);
        navConteneur.appendChild(nomJournal)

        data.journal.themes.forEach(theme => {
          
        });

        mysteres = document.createElement("a");
        mysteres.className = "mysteres"
        mysteres.textContent = data.journal.themes[0].nom;
        mysteres.href = "#"
        console.log(mysteres);
        navConteneur.appendChild(mysteres)

        
        occulte = document.createElement("a");
        occulte.className= "occulte"
        occulte.textContent = data.journal.themes[1].nom;
        //console.log(data.journal.themes[1]);
        occulte.href ="#"
        console.log(occulte);
        navConteneur.appendChild(occulte)

        arts = document.createElement("a");
        arts.className = "arts"
        arts.textContent = data.journal.themes[4].nom;
        //console.log(data.journal.themes[1]);
        arts.href ="#"
        console.log(arts);
        navConteneur.appendChild(arts)

        fiction = document.createElement("a");
        fiction.className = "fiction"
        fiction.textContent = data.journal.themes[5].nom;
        //console.log(data.journal.themes[1]);
        fiction.href ="#"
        console.log(fiction);
        navConteneur.appendChild(fiction)

        texteAppelAction = document.getElementById('texteAppelAction')
        texteAppelAction.classList = texteAppelAction
        texteAppelAction.textContent = data.journal.texteAppelAction
        texteAppelAction.href ="#"
        navConteneur.appendChild(texteAppelAction)

        let avatar = document.createElement("img")
        avatar.className="avatar"
        avatar.src = data.journal.avatar
        avatar.alt = "mon avatar"
        console.log(avatar);
        navConteneur.appendChild(avatar)

        afficherHeader(data);
        afficherArticlePrincipal(data);
        afficherAutresArticles(data);
        afficherAuteurs(data);

 
        divAuteurs = document.createElement("h2");
        divAuteurs.classList.add = "divAuteurs";

        let titreEquipe = document.getElementById("titreEquipe")
        titreEquipe.textContent = "Découvrez L'équipe D'Arcana Hebdo !"
        divAuteurs.appendChild(titreEquipe)

        console.log(titreEquipe);
        autresConteneurs.appendChild(divAuteurs)
        

        let footerConteneur = document.getElementById("footerConteneur")
        let footerDiv = document.createElement("p")
        footerDiv.className = "footerDiv"

        footerDiv.textContent = "Arcana Hebdo - 2025"
        footerConteneur.appendChild(footerDiv)

     




        
      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();


 ///ON écrit les fonctions ici

function afficherHeader(data) {
  let headerConteneur = document.getElementById("headerConteneur");

  let phraseAccroche = document.createElement("h3");
  phraseAccroche.textContent = data.journal.phraseAccroche;
  headerConteneur.appendChild(phraseAccroche);

  let divThemes = document.createElement("div");
  divThemes.className = "divThemes";

  data.journal.themes.forEach(theme => {
    let carteTheme = document.createElement("div");
    carteTheme.className = "carteTheme";

    let titreTheme = document.createElement("h2");
    titreTheme.className = "titreTheme";
    titreTheme.textContent = theme.nom;
    carteTheme.appendChild(titreTheme);

    let descriptionTheme = document.createElement("p");
    descriptionTheme.className = "descriptionTheme";
    descriptionTheme.textContent = theme.description;
    carteTheme.appendChild(descriptionTheme);

    divThemes.appendChild(carteTheme);
  });

  headerConteneur.appendChild(divThemes);
}

function afficherArticlePrincipal(data) {
  let articleRecentConteneur = document.getElementById("articleRecentConteneur");
  let article = data.journal.articlePrincipal;

  let titre = document.createElement("h2");
  titre.className = "TitreArticleP";
  titre.textContent = article.titre;
  articleRecentConteneur.appendChild(titre);

  let img = document.createElement("img");
  img.className = "imgArticleP";
  img.src = article.image;
  img.alt = article.titre;
  articleRecentConteneur.appendChild(img);

  let date = document.createElement("p");
  date.className = "dateArticleP";
  date.textContent = `${article.date} - ${article.theme}`;
  articleRecentConteneur.appendChild(date);

  let description = document.createElement("p");
  description.className = "descriptionArticle";
  description.textContent = article.description;
  articleRecentConteneur.appendChild(description);

  let btn = document.createElement("button");
  btn.className = "btn-lire-article";
  btn.textContent = "Lire l'article";
  articleRecentConteneur.appendChild(btn);
}

function afficherAutresArticles(data) {
  let autresConteneurs = document.getElementById("autresConteneurs");
  let divArticles = document.createElement("div");
  divArticles.className = "divArticles";

  data.journal.articles.forEach(article => {
    let carte = document.createElement("div");
    carte.className = "carteArticles";

    let titre = document.createElement("h3");
    titre.className = "titreArticlesAutre";
    titre.textContent = article.titre;
    carte.appendChild(titre);

    let img = document.createElement("img");
    img.className = "imgArticlesAutre";
    img.src = article.image;
    img.alt = article.titre;
    carte.appendChild(img);

    let date = document.createElement("p");
    date.className = "dateArticlesAutre";
    date.textContent = `${article.date} - ${article.theme}`;
    carte.appendChild(date);

    let btn = document.createElement("button");
    btn.className = "btn-lire-article";
    btn.textContent = "Lire l'article";
    carte.appendChild(btn);

    divArticles.appendChild(carte);
  });

  autresConteneurs.appendChild(divArticles);
}


function afficherAuteurs(data) {
  let autresConteneurs = document.getElementById("autresConteneurs");
  let divAuteurs = document.createElement("div");
  divAuteurs.className = "divAuteurs";
  let indexAuteurs = data.journal.auteurs

  indexAuteurs.forEach(auteur => {
    let carte = document.createElement("div");
    carte.className = "carteAuteur";

    let avatar = document.createElement("img");
    avatar.className = "avatarAuteurs";
    avatar.src = auteur.avatar;
    avatar.alt = "avatar de l'auteur";
    carte.appendChild(avatar);

    let prenom = document.createElement("p");
    prenom.className = "prenomAuteurs";
    prenom.textContent = auteur.prenom;
    carte.appendChild(prenom);

    let presentation = document.createElement("p");
    presentation.className = "presentationAuteurs";
    presentation.textContent = auteur.presentation;
    carte.appendChild(presentation);

    let typeExp = document.createElement("p");
    typeExp.className = "typeExperienceAuteurs";
    typeExp.textContent = auteur.typeExperience;
    carte.appendChild(typeExp);

    divAuteurs.appendChild(carte);
  });

  autresConteneurs.appendChild(divAuteurs);
}



/*
let tarot = ["Le Bateleur ",
 "Le Pendu",
 "La Lune ",
 ]; 
let tarotTiré = Math.floor(Math.random() * tarot.length);

let articleHasard = "";
let articleChoisi = Math.floor(Math.random() * articleHasard.length);*/
