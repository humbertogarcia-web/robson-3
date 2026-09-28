const btnCurtir = document.getElementById("btnCurtir");
const btnDeslike = document.getElementById("btnDeslike");
const btnFavoritar = document.getElementById("btnFavoritar");

btnCurtir.addEventListener("click", function () {
    this.classList.toggle("ativo");

    // Remove o deslike caso o usuário esteja curtindo
    if (this.classList.contains("ativo")) {
        btnDeslike.classList.remove("ativo");
        btnDeslike.innerHTML = "<span>−</span> Deslike";

        this.innerHTML = "<span>✓</span> Curtido";
    } else {
        this.innerHTML = "<span>+</span> Curtir";
    }
});

btnDeslike.addEventListener("click", function () {
    this.classList.toggle("ativo");

    // Remove o like caso o usuário esteja dando deslike
    if (this.classList.contains("ativo")) {
        btnCurtir.classList.remove("ativo");
        btnCurtir.innerHTML = "<span>+</span> Curtir";

        this.innerHTML = "<span>−</span> Desliked";
    } else {
        this.innerHTML = "<span>−</span> Deslike";
    }
});

btnFavoritar.addEventListener("click", function () {
    this.classList.toggle("ativo");

    if (this.classList.contains("ativo")) {
        this.innerHTML = "<span>★</span> Favoritado";
    } else {
        this.innerHTML = "<span>★</span> Favoritar";
    }
});
