const immagineLampadinaSpenta = document.querySelector("img.spenta");
const immagineLamadinaAccesa = document.querySelector("img.d-none");
const bottoneAccendiSpegni = document.querySelector("button.btn");
const immagineEasteregg =document.querySelector("img.easteregg");
let contatoreClick = 0;

bottoneAccendiSpegni.addEventListener("click", function interrutore() {

    const lampadinaSpenta = immagineLamadinaAccesa.classList.contains("d-none");
    if (lampadinaSpenta) {
        immagineLampadinaSpenta.classList.remove("spenta")
        immagineLampadinaSpenta.classList.add("d-none")
        immagineLamadinaAccesa.classList.remove("d-none")
        bottoneAccendiSpegni.innerText = "Spegni"
    } else {
        immagineLampadinaSpenta.classList.add("spenta")
        immagineLampadinaSpenta.classList.remove("d-none")
        immagineLamadinaAccesa.classList.add("d-none")
        bottoneAccendiSpegni.innerText = "Accendi"
    }   
});