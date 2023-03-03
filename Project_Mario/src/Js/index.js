   /* 1) quando o usuario clicar no botão ver trailer,devemos abrir a modal com o video do trailer.
   2) quando o usuario clicar no X fechar modal
   passo 1- dar um jeito de pegar o elemento que representa o botão na tela usando o js.
   passo 2- identificar quando o usuario clicar no botão.
   passo 3- dar um jeito de pegar o elemento da modal no js.
   passo 4- abrir a modal na tela */

   

   const botaoTrailer = document.querySelector (".botao-trailer");
   const botaoFecharModal = document.querySelector(".fechar-modal");
   const video = document.getElementById("video");
   const modal = document.querySelector(".modal");
   const linkDoVideo = video.src;
   
   // passo 1- dau um jeito de pegar o elemento que representa o botão na tela usando o js
   function alternarModal(){
   modal.classList.toggle("aberto");
 }
   botaoTrailer.addEventListener ("click",() => {
      // passo 4- abrir a modal na tela.
      alternarModal();
      video.setAttribute("src", linkDoVideo);
   });

   // passo 2- dar um jeito de identificar quando o usuarop clicar no botão.
   // passo 3- dau um jeito de pegar o elemento modal no js.
   // toggle poder subistituir o add e o remove pq ele vê se ja existe essa funçao, assim não deixa redundante
  
  
  //2) quando o usuario clicar no X fechar modal
  botaoFecharModal.addEventListener ("click", () => {
     //fechar modal
    alternarModal();
    video.setAttribute("src", "");
  });
   
 