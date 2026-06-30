// ===================== USUÁRIOS =====================

const usuarios = [
    {
        matricula: "2025116ISINF0035",
        senha: "ifpi123",
        nome: "Victor"
    }
];

// ===================== LOGIN =====================

const form = document.getElementById("formLogin");
const erro = document.getElementById("erro");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const matricula = document.getElementById("matricula").value.trim().toUpperCase();
        const senha = document.getElementById("senha").value;

        const usuario = usuarios.find(function (u) {
            return u.matricula === matricula && u.senha === senha;
        });

        if (usuario) {

            erro.style.color = "#00ff66";
            erro.textContent = "Login realizado com sucesso!";

            localStorage.setItem("usuario", usuario.nome);

            setTimeout(function () {
                window.location.href = "index.html";
            }, 1000);

        } else {

            erro.style.color = "red";
            erro.textContent = "Senha ou matrícula incorreta!";

            document.getElementById("senha").value = "";
            document.getElementById("senha").focus();

        }

    });

}

// ===================== MOSTRAR SENHA =====================

const mostrarSenha = document.getElementById("mostrarSenha");
const campoSenha = document.getElementById("senha");

if (mostrarSenha && campoSenha) {

    mostrarSenha.addEventListener("change", function () {

        if (this.checked) {
            campoSenha.type = "text";
        } else {
            campoSenha.type = "password";
        }

    });

}

// ===================== INDEX =====================

const usuarioElemento = document.getElementById("usuario");
const loginElemento = document.getElementById("login");

if (usuarioElemento && loginElemento) {

    const usuarioLogado = localStorage.getItem("usuario");

    if (usuarioLogado) {

        usuarioElemento.innerHTML = `
            <span>Olá, ${usuarioLogado}</span>
            <a href="#" id="sair" style="margin-left:10px;">Sair</a>
        `;

        loginElemento.style.display = "none";

        const sair = document.getElementById("sair");

        sair.addEventListener("click", function (event) {

            event.preventDefault();

            localStorage.removeItem("usuario");

            window.location.reload();

        });

    } else {

        usuarioElemento.innerHTML = "";
        loginElemento.style.display = "block";

    }

}
