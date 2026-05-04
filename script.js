const button = document.getElementById("toggle-theme");
const body = document.body;

const temaSalvo = localStorage.getItem('tema')

if(temaSalvo){ // forma simplificada de dizer que algo existe
    body.classList.add(temaSalvo)
} else {
    body.classList.add('light')
}

button.addEventListener("click", () => {
  const ehTemaClaro = body.classList.contains("light");

  if (ehTemaClaro) {
    // aplica o tema escuro
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem('tema', 'dark')
  } else {
    // o tema esta escuro, aplica o tema claro
    body.classList.remove("dark");
    body.classList.add("light");
     localStorage.setItem('tema', 'light')
  }
});
