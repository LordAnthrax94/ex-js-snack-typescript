// Snack 1

let dato: unknown;

if(typeof dato === "string"){
  console.log(dato.toUpperCase());   
}else if (typeof dato === "number"){
  console.log(dato * 2);  
}else if (typeof dato === "boolean"){
  console.log(dato ? "Si" : "No");  
}else{
  console.log("Tipo non supportato");
}

//Snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "M" | "F", // solo M o F
  anniDiServizio: number[]
}

// Snack 3

type Developer = Dipendente &{
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[], // opzionale
  certificazioni: string[] // può essere vuoto
}

type ProjectManager = Dipendente & {
  teamSize: number | null, // può essere null se non ha ancora un team assegnato
  budgetGestito?: number, // opzionale
  stakeholderPrincipali: string[] // può essere vuoto
}







  
  

