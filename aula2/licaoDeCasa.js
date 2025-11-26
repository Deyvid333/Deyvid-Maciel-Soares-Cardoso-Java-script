
let nota = 1
if( nota < 2 ){
    console.log("voce foi muito mal na prova e tirou F", nota)
}else if(nota >= 2 && nota < 4){
    console.log("voce foi mal na prova e tirou D", nota)
}else if(nota <= 6 && nota > 4){
    console.log("voce foi mal na prova e tirou C", nota)
}else if(nota <= 8 && nota > 6){
    console.log("voce foi mal na prova e tirou B", nota)
}else if(nota > 8){
    console.log("voce foi mal na prova e tirou A", nota)
}