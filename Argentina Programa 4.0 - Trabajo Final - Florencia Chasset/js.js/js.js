function enviar_formulario() {
    alert("Presione aceptar para enviar el formulario");
    let element= document.getElementById("form_cnt");
    element.submit();
}


const toTop = (() => {
  let button = document.getElementById("toTop");
  window.onscroll = () => {
    button.classList[
        (document.documentElement.scrollTop > 200) ? "add" : "remove"
      ]("is-visible")
  }
  button.onclick = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
})();