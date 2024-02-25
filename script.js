let pocetpenez = 1000;
const typyvydaju = [zabava, skola];
function kolikmoney() {
    console.log(pocetpenez);
}

function vklad() {
    let vkladInput = document.getElementById("vklad");
    let vkklad = parseFloat(vkladInput.value);

    

    pocetpenez += vkklad;
    
    console.log(pocetpenez);
}
let vkladInput = document.getElementById("vklad");
let vkklad = parseFloat(vkladInput.value);
pocetpenez += vkklad;
console.log(pocetpenez);
function vydaj(){
    let vydajd = document.getElementById("vydaj");
    let vydaj = parseFloat(vydajd.value);
    
    const moznostikategorii= ["","Potraviny", "Oblečení", "Zábava", "Doprava", "Banka", "Jiné"];

    const kategorievybrat = prompt("Vyberte kategorii pro vklad (1 - 6)");

    const vybranaKategorie = moznostikategorii[kategorievybrat];
    console.log(vybranaKategorie);
    

    pocetpenez -= vydaj;
    
    console.log(pocetpenez);
}
function vypDPH(){
    let DPHcko = document.getElementById("DPH");
    let DPH = parseFloat(DPHcko.value);
    let DPHdel = DPH / 100;
    let fDPH = DPHdel * 124;
    console.log(fDPH)
}
function prevod(){
    const zadmena = prompt("vyberte kolik chcete směnint:");
    const moznostikategorii = ["","Euro", "Dolar", "Libra"];

    const kategorievybrat = prompt("Vyberte kategorii pro vklad (1 - 3)"  );

    const vybranaKategorie = moznostikategorii[kategorievybrat];
    console.log(vybranaKategorie);
    if (vybranaKategorie === "Euro"){
        let poceteur = zadmena / 25.39;
        console.log(poceteur);


    } else if (vybranaKategorie === "Dolar"){
        let pocetdolaru = zadmena / 24.43;
        console.log(pocetdolaru); 
    } else if (vybranaKategorie === "Libra"){
        let pocetliber = zadmena / 29.70;
        console.log(pocetliber);

        
    } else {
        console.log("cože?")
    }
function kap() {
    console.log("gshdfg")
}

}
function login() {
    const jmeno = prompt("prosím zadejte vaše jmeno ");
    
    const heslo1 = prompt("prosím zadejte vaše heslo");
    
    
    const heslo2 = prompt("heslo znova");
    
    
    console.log("vaše jméno je: ", jmeno);
    
    if (heslo1 === heslo2) {
        console.log("dekuji, vaše heslo je: " , heslo1);
        
    } else {
        console.log("Hesla nejsou stejná");
    }
}
function investice(){
    const puvodpoc = parseFloat(document.getElementById("prvnivklad").value);
    const mesicnipoc = parseFloat(document.getElementById("mesvklad").value);
    const rocnivyd = parseFloat(document.getElementById("kolikrocnevydela").value);
    const koliklet = parseFloat(document.getElementById('koliklet').value);

    const mesicnivyd = rocnivyd / 12 / 100;
    const celkemmes = koliklet * 12;

    let futureValue = puvodpoc;

    for (let i = 0; i < celkemmes; i++) {
        finalnicastka += mesicnipoc;
        finalnicastka *= 1 + mesicnivyd;
    }

    console.log(finalnicastka)
}

