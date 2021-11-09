
//wähle aus dem html-Dokument das Element mit der id="modal-button" aus und speichere es in der Konstanten button
const button = document.querySelector("#modal-button");
const modal = document.querySelector(".modal-bg");

//gibt die Konstante button in der Browser-Konsole aus:
console.log(button);

//verändere den im button angezeigten Text:
button.innerText = "Zeige Modal!";

//führe die anonyme Funktion (=Funktion ohne Namen) aus, wenn auf den Button geklickt wird:
button.addEventListener("click",
    function () {
        modal.style.display = "flex";
    }
);

modal.addEventListener("click",
    function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
);
