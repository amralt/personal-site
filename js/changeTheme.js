
  

  const body = document.querySelector('body');
  const btn = document.querySelector('.btn');
  const icon = document.querySelector('.btn__icon');
  const storageKey = "picoPreferredColorScheme"

  //to save the dark mode use the object "local storage".
  
  //function that stores the value true if the dark mode is activated or false if it's not.
  function setLocalStorageTheme(value){
    if (value == true){
        localStorage.setItem(storageKey, 'dark');
    } else {
        localStorage.setItem(storageKey, 'light')
    }
  }
  
  //function that indicates if the "darkmode" property exists. It loads the page as we had left it.
  function load(){
    const darkmode = localStorage.getItem(storageKey);
  
    //if the dark mode was never activated
    if(!darkmode | darkmode == "auto"){
      icon.classList.add('fa-sun');
      applyScheme('auto')
    } else if( darkmode == 'light'){ //if the dark mode is activated
      body.classList.add('darkmode');
      icon.classList.add('fa-sun');
      animationChange()
    } else if(darkmode == 'dark'){ //if the dark mode exists but is disabled
      icon.classList.add('fa-moon');
      applyScheme('light')
      animationChange()
    }
  }

  function applyScheme(newShame) {
    document.querySelector("html")?.setAttribute("data-theme", newShame);
  }
  
  
  load();
  
  btn.addEventListener('click', () => {
    animationChange()
  })

  function animationChange() {
    body.classList.toggle('darkmode');
    icon.classList.add('animated');
  
    //save true or false
    setLocalStorageTheme(body.classList.contains('darkmode'));
  
    if(body.classList.contains('darkmode')){
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      applyScheme('dark')
    }else{
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      applyScheme('light')
    }
  
    setTimeout( () => {
      icon.classList.remove('animated');
    }, 500)
  }