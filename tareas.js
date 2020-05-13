(function(){

    // variable
    
    var lista=document.getElementById("lista"),
        listaok=document.getElementById("tarealista"),
        agregar=document.getElementById("agregar"), 
        boton=document.getElementById("btn-tarea");

    // funciones

    var incluir = function(){

        if (agregar.value != "") {
            var tarea = agregar.value,
                nuevoLi = document.createElement("li"),
                nuevoA = document.createElement("a"),
                contenido = document.createTextNode(tarea);
                nuevoA.appendChild(contenido);
                nuevoA.setAttribute("href" , "#");
                nuevoLi.appendChild(nuevoA);
                nuevoLi.setAttribute("id", tarea);
                document.getElementById("lista").appendChild(nuevoLi);
                
                // gg
                
                nuevoInput = document.createElement("input");
                nuevoInput.setAttribute("type", "button");
                nuevoInput.setAttribute("value", "Eliminar");
                nuevoInput.className = "btn-del";
                nuevoLi.appendChild(nuevoInput);

                // gg

                nuevoInput = document.createElement("input");
                nuevoInput.setAttribute("type", "button");
                nuevoInput.setAttribute("value", " OK ");
                nuevoInput.className = "btn-ok";
                nuevoLi.appendChild(nuevoInput);

                // gg

                let i=lista.children.length-1;

                // gg

                let btndel = document.getElementsByClassName("btn-del");
                btndel[i].addEventListener("click", eliminar);

                // gg

                let btnok = document.getElementsByClassName("btn-ok");
                btnok[i].addEventListener("click", ok);

                // gg

                agregar.value = "";
        } else {
            alert("Por favor ingrese tarea a agregar.");
        }        
    };

    var eliminar = function(){
        let idpadre = this.parentNode.getAttribute("id");
        let padre = document.getElementById(idpadre);
        padre.parentNode.removeChild(padre);
    };

    var ok = function(){
        let idpadre = this.parentNode.getAttribute("id");
        let padre = document.getElementById(idpadre);
        padre.parentNode.removeChild(padre);
        document.getElementById("tarealista").appendChild(padre);

        padre = document.getElementById(idpadre);
        padre.removeChild(padre.lastElementChild);
    };
    
    // eventos
    
    boton.addEventListener("click", incluir);
    
}());