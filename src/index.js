//Classificador de nível de herói.
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 6.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

let nomeHeroi = "Daniel"
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let expHeroi = getRandomInt(11000);
let nivelHeroi;

switch (true) {
    case expHeroi < 1000:
        nivelHeroi = "Ferro";
        break;

    case expHeroi >= 1001 && expHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;

    case expHeroi >= 2001 && expHeroi <= 6000:
        nivelHeroi = "Prata";
        break;

    case expHeroi >= 6001 && expHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;

    case expHeroi >= 7001 && expHeroi <= 8000:
        nivelHeroi = "Platina";
        break;

    case expHeroi >= 8001 && expHeroi <= 9000:
        nivelHeroi = "Ascendente";
        break;

    case expHeroi >= 9001 && expHeroi <= 10000:
        nivelHeroi = "Imortal";
        break;

    case expHeroi >= 10001:
        nivelHeroi = "Radiante";
        break;
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`)

//if(nivelHeroi < 1000){
//    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
//}
//"O Herói de nome **{nome}** está no nível de **{nivel}**"