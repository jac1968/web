(function(){
    // variable
    var lista=document.getElementById("lista"),
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
                nuevoInput = document.createElement("input");
                nuevoInput.setAttribute("type", "button");
                nuevoInput.setAttribute("value", "Eliminar");
                nuevoInput.className = "btn-del";
                nuevoLi.appendChild(nuevoInput);
// gg
                nuevoInput = document.createElement("input");
                nuevoInput.setAttribute("type", "button");
                nuevoInput.setAttribute("value", " OK ");
                nuevoInput.className = "btn-del";
                nuevoLi.appendChild(nuevoInput);
// gg
                let i=lista.children.length-1;
                let btndel = document.getElementsByClassName("btn-del");
                btndel[i].addEventListener("click", eliminar);
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
    
    // eventos
    
    boton.addEventListener("click", incluir);
    
}());