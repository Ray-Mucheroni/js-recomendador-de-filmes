
// idade: livre
// Ação "Homem-Aranha: Através do Aranhaverso"// idade: 14 anos
// Comédia: As Branquelas
// Ação: Vingadores
// Animação: Desencanto

// idade : 10 anos
// Comédia: Icarly
// Ação: Jovens Titãs
// Animação: Hora de Aventura

// idade: 18 anos
// Comédia: American Pie
// Ação: Deadpool
// Animação: Rick end Morty

// Animação: Peppa Pig
// Comédia: Scooby-Dool

let campoIdade;
let campoComedia;
let campoAcao;
let campoAnimacao;

function setup() {
  createCanvas(800, 400);
  createElement('h1', 'Recomendador de Filmes e Séries');
  createSpan('Informe sua Idade: ')
  campoIdade = createInput();
  campoComedia = createCheckbox('Comédia');
  campoAcao = createCheckbox('Ação');
  campoAnimacao = createCheckbox('Animação');
}

function draw() {
  background('rgb(153,218,153)');
  textAlign(CENTER, CENTER)
  textSize(40);
  fill('white');
  
  let idade = campoIdade.value();
  let comedia = campoComedia.checked();
  let acao = campoAcao.checked();
  let animacao = campoAnimacao.checked();
  
  let filme = geraRecomendacao(idade, comedia, acao, animacao);
  
  text(filme, width/2, height/2); 
}

function geraRecomendacao(idade, comedia, acao, animacao){
  if(idade >= 18){
    if(comedia){
      return  ' American Pie'
    }else if(acao){
      return 'Dedpool'
    }else if(animacao){
      return 'Rick end Morty'
    }else {
      return 'Dedpool'
    }
  return 'Deadpool'
  } else if(idade >= 14){
     if(comedia){
      return  ' As Branquelas'
    }else if(acao){
      return 'Vingadores'
    }else if(animacao){
      return 'Desencanto'
    }else {
      return 'Vingadores'
    }
  }else if(idade>= 10){
     if(comedia){
      return 'Icarly'
    }else if(acao){
      return 'Jovens Titãs'
    }else if(animacao){
      return 'Hora de Aventura'
    }else {
      return 'Jovens Titãs'
    }
  } else{
     if(comedia){
      return  'Scooby-Dool'
    }else if(acao){
      return 'Homem-Aranha:Através do Aranhaverso'
    }else if(animacao){
      return 'Peppa Pig'
    }else {
      return 'Homem-Aranha:Através do Aranhaverso'
    }
  }
}
