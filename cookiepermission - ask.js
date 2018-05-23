<script>
  function setCookie(value, box) {
    var d = new Date();
    d.setTime(d.getTime() + ({{cookiepermission - expiry}}*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var path = "path=/"
    document.cookie = '{{cookiepermission - cookiename}}' + "=" + value + "; " + expires + "; " + path;
    
    // remove box
    box.style.display = 'none';
    
    if (value == "yes")
       dataLayer.push( { event: 'cookiepermission first page yes' } );
    else
       dataLayer.push( { event: 'cookiepermission first page no' } );
    
  }
  
  var txt = "{{cookiepermission - Pregunta}}";
  var cookiepermissionDialogbox = document.createElement("div");
  cookiepermissionDialogbox.id = 'cp-overlay';
  cookiepermissionDialogbox.style.position = "fixed";
  cookiepermissionDialogbox.style.bottom = "0px";
//cookiepermissionDialogbox.style.top = "0px";
  cookiepermissionDialogbox.style.width = "100%";
//cookiepermissionDialogbox.style.height = "0%";
  cookiepermissionDialogbox.style.zIndex = "1000";
//cookiepermissionDialogbox.style.zIndex = "999999";
  cookiepermissionDialogbox.style.backgroundColor = "rgba(0, 0, 0, 0.5";
    
  cpdiv = document.createElement("div");
  cpdiv.id = 'cp-inner';
  cpdiv.style.textAlign = "center";
  cpdiv.style.backgroundColor = "white";
  cpdiv.style.margin = "auto";
  cpdiv.style.width = "100%"; // cubre todo el ancho de página - cover all the witdh
  cpdiv.style.padding = "10px"; // ajusta el padding - reduce box size
  cpdiv.style.opacity = "0.8";  // ajusta la opacidad del fondo de la caja - change box opacity
  
  cpQuestion = document.createElement("p"); // ajusta el tamaño del texto del mensaje
  cpQuestion.id = 'cp-question';
  cpQuestion.style.textAlign = "center";
  cpQuestion.innerHTML = txt;
  
  cpOptiondiv = document.createElement("div");
  cpOptiondiv.id = 'cp-options';
  cpOptiondiv.style.textAlign = "center";
  
  cpSep = document.createElement("span");
  cpSep.class = "cp-separator";
  cpSep.innerHTML = '&nbsp;-&nbsp;';

  cpSep2 = document.createElement("span");
  cpSep2.class = "cp-separator2";
  cpSep2.innerHTML = '&nbsp;-&nbsp;';
  
  cpYes = document.createElement("span");
  cpYes.id = "cp-yes";
  
  cpYesA = document.createElement("a");
  cpYesA.setAttribute("href", "#");
  cpYesA.setAttribute("onclick", "javascript:setCookie('yes', cookiepermissionDialogbox);");
  cpYesA.innerHTML = '{{cookiepermission - texto venga va enchufalas}}';
  
  cpNo = document.createElement("span");
  cpNo.id = "cp-no";
  
  cpNoA = document.createElement("a");
  cpNoA.setAttribute("href", "#");
  cpNoA.setAttribute("onclick", "javascript:setCookie('no', cookiepermissionDialogbox);");
  cpNoA.innerHTML = '{{cookiepermission - Texto va a ser que no}}';

  cpPolitica = document.createElement("spam");
  cpPolitica.id = "cp-politica";
  
  cpPoliticaA = document.createElement("a");
  cpPoliticaA.setAttribute("href", "https://carlosmdh.es/politica-de-cookies/");
  cpPoliticaA.innerHTML = '{{cookiepermission - Politica de Cookies}}';
  
  // insert into body 
  document.body.appendChild(cookiepermissionDialogbox);
  
  cookiepermissionDialogbox.appendChild(cpdiv);

  cpdiv.appendChild(cpQuestion);
  cpdiv.appendChild(cpOptiondiv);
  cpOptiondiv.appendChild(cpYes);
  cpOptiondiv.appendChild(cpSep);
  cpOptiondiv.appendChild(cpNo);
  cpOptiondiv.appendChild(cpSep2);
  cpOptiondiv.appendChild(cpPolitica);
  cpYes.appendChild(cpYesA);
  cpNo.appendChild(cpNoA);
  cpPolitica.appendChild(cpPoliticaA);
  
</script>
