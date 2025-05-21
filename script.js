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
        let nomJournal = document.getElementById("nomJournal")
        let mysteres = document.getElementById("mysteres")
        let occulte = document.getElementById("occulte")
        let arts = document.getElementById("arts")
        let fiction = document.getElementById("fiction")
        let texteAppelAction = document.getElementById("texteAppelAction")
        let divNav = document.createElement("div");
      
        let imageLogo = document.createElement("img")
        imageLogo.src = data.journal.imageLogo
        imageLogo.alt = data.journal.nomJournal
        console.log(imageLogo);
        navConteneur.appendChild(imageLogo)
        
        
        nomJournal = document.createElement("h2");
        //nomJournal.classList = nomJournal
        nomJournal.textContent = data.journal.nomJournal;
        divNav.classList.add("nomJournal");
        console.log(nomJournal);
        navConteneur.appendChild(nomJournal)

        mysteres = document.createElement("a");
        //mysteres.classList = mysteres
        divNav.classList.add("mysteres");
        mysteres.textContent = data.journal.themes[0].nom;
        mysteres.href = 
        console.log(mysteres);
        navConteneur.appendChild(mysteres)

        
        occulte = document.createElement("a");
        // occulte.classList = occulte
        // divNav.classList.add("occulte");
        occulte.textContent = data.journal.themes[1].nom;
        //console.log(data.journal.themes[1]);
        occulte.href =
        console.log(occulte);
        navConteneur.appendChild(occulte)

        arts = document.createElement("a");
        // arts.classList = arts
        // divNav.classList.add("arts");
        arts.textContent = data.journal.themes[4].nom;
        //console.log(data.journal.themes[1]);
        arts.href =
        console.log(arts);
        navConteneur.appendChild(arts)

        fiction = document.createElement("a");
        // fiction.classList = fiction
        // divNav.classList.add("fiction");
        fiction.textContent = data.journal.themes[1].nom;
        //console.log(data.journal.themes[1]);
        fiction.href =
        console.log(fiction);
        navConteneur.appendChild(fiction)

        texteAppelAction = document.getElementById('texteAppelAction')
        texteAppelAction.classList = texteAppelAction
        texteAppelAction.textContent = data.journal.texteAppelAction
        texteAppelAction.href =
        navConteneur.appendChild(texteAppelAction)

         let avatar = document.createElement("img")
        avatar.src = data.journal.avatar
        avatar.alt = "mon avatar"
        console.log(avatar);
        navConteneur.appendChild(avatar)

        let headerConteneur = document.getElementById("headerConteneur")
        let phraseAccroche = document.getElementById("phraseAccroche")
        let theme1Header = document.getElementById("theme1Header")

        phraseAccroche = document.createElement("h3");

        phraseAccroche.textContent = data.journal.phraseAccroche;
        console.log(phraseAccroche);
        headerConteneur.appendChild(phraseAccroche)
        






        

        


        
        

        
      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

/* function AfficherData(contenu, Conteneur) {        
    let navConteneur = document.createElement('div');
    navConteneur.className = 'navConteneur';
    
    let imgNav = document.getElementById("imgNav")
    imgNav = document.createElement('img');
    imgNav.className = "imgNav"
    imgNav.src = contenu.image;
    imgNav.alt = contenu.nomJournal;
    navConteneur.appendChild(imgNav);

    let filtres = document.getElementById("filtres")
    filtres = document.createElement('h3');
    filtres.className = "filtres"
    filtres.textContent = contenu.theme;
    navConteneur.appendChild(filtres);
    
    let texteAppelAction = document.getElementById("texteAppelAction")
    texteAppelAction.className = "texteAppelAction"
    texteAppelAction.textContent = contenu.texteAppelAction;
    navConteneur.appendChild(texteAppelAction);
    let theme = document.createElement('h3');
    theme.textContent = contenu.texteAppelAction;
    navConteneur.appendChild(texteAppelAction);

    let maPhoto = document.getElementById("maPhoto")
    maPhoto = document.createElement('img');
    maPhoto.className = "maPhoto"
    maPhoto.src = contenu.image;
    maPhoto.alt = contenu.nomJournal;
    navConteneur.appendChild(maPhoto);

    console.log(contenuDiv);


    navConteneur.appendChild(contenuDiv);
  }
*/

