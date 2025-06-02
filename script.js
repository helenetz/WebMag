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
        boutonAleatoire(data);
 
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

if (data.journal.carrousel && Array.isArray(data.journal.carrousel)) {
  let carrouselImages = document.getElementById("carrouselImages");
  let index = 0;

  data.journal.carrousel.forEach(item => {
    let slide = document.createElement("div");
    slide.className = "carrousel-slide";

    let img = document.createElement("img");
    img.src = item.image;
    img.alt = item.titre;
    slide.appendChild(img);

    let titre = document.createElement("h3");
    titre.textContent = item.titre;
    slide.appendChild(titre);

    let theme = document.createElement("p");
    theme.textContent = item.theme;
    slide.appendChild(theme);

    let btn = document.createElement("button");
    btn.className = "btn-lire-article";
    btn.textContent = "Lire l'article";
    slide.appendChild(btn);

    carrouselImages.appendChild(slide);
  });

  let slides = document.querySelectorAll(".carrousel-slide");

  document.querySelector(".carrousel-btn.left").addEventListener("click", () => {
    index = (index <= 0) ? slides.length - 1 : index - 1;
    carrouselImages.style.transform = `translateX(-${index * 100}%)`;
  });

  document.querySelector(".carrousel-btn.right").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    carrouselImages.style.transform = `translateX(-${index * 100}%)`;
  });
}
        

  autresConteneurs.appendChild(divArticles);
}



function boutonAleatoire(data) {
  const articles = data.journal.articles;
  const autresConteneurs = document.getElementById("autresConteneurs");

  const bouton = document.createElement("button");
  bouton.className = "boutonAleatoire";
  bouton.textContent = "Arcana, choisis pour moi !";
  autresConteneurs.appendChild(bouton);

  
  const articleAffichage = document.createElement("div");
  articleAffichage.id = "articleAleatoire";
  articleAffichage.className = "article-fullscreen"; 
  articleAffichage.style.display = "none"; 
  document.body.appendChild(articleAffichage);

  bouton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * articles.length);
    const article = articles[index];

    articleAffichage.innerHTML = `
      <div class="carte-article-large">
        <span class="close-button">&times;</span>
        <img src="${article.image}" alt="${article.titre}">
        <h2>${article.titre}</h2>
        <h4><strong> ${article.date}</strong></h4>
        <p><strong> ${article.theme}</strong></p>
       
        <button class="read-button">Lire l'article</button>
      </div>
    `;

    articleAffichage.style.display = "flex";

   
    const closeBtn = articleAffichage.querySelector(".close-button");
    closeBtn.addEventListener("click", () => {
      articleAffichage.style.display = "none";
    });
  });
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
