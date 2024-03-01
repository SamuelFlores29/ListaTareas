let texto = document.getElementById("inputTareas");
let boton = document.getElementById("botonAgregar");
let ul = document.querySelector("ul");
let borrarTodo = document.getElementById("borrarTodo");
let borrarLista = document.querySelector(".botonBorrar");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let li = document.createElement("li");
    li.setAttribute("class", "listaCreada")
    li.textContent = "- " + texto.value;
    li.appendChild(crearboton());
    ul.appendChild(li);
    texto.value = ""
})

borrarTodo.addEventListener("click", () =>{
    let li = document.querySelectorAll(".listaCreada");
    for(let i = 0; i < li.length; i++){
        li[i].remove();
    }
});



function crearboton(){
    let botonBorrar = document.createElement("button");
    botonBorrar.setAttribute("class","botonBorrar");
    botonBorrar.textContent="X";
    botonBorrar.addEventListener("click",() => {
       let li = botonBorrar.parentNode;
        li.remove();
    });
    return botonBorrar;
};
