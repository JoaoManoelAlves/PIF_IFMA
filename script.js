function ValorVoy(){
  const velocidade = document.getElementById("Velocidade").value;
  const seno = document.getElementById("seno").value;
  const senoNumber = parseInt(seno);
  const velocidadeNumber = parseInt(velocidade);
  const tempo = document.getElementById("Tempo").value;
  const pontoAlto = document.getElementById("posicaoInicial").value;
  const pontoAltoNumber = parseInt(pontoAlto);
  

  if (velocidadeNumber >= 0 && tempo >= 0) {
    if (senoNumber == 30) {
      const resultado = velocidadeNumber * 0.5;
      document.getElementById("valorVoy").innerHTML = resultado + " m/s";
    }

    if (senoNumber == 45) {
      const resultado = velocidadeNumber * 0.7;
      document.getElementById("valorVoy").innerHTML = resultado + " m/s";
    }

    if (senoNumber == 60) {
      const resultado = velocidadeNumber * 0.86;
      document.getElementById("valorVoy").innerHTML = resultado + " m/s";
    }

    const Vy = velocidadeNumber + 9.8 * tempo;
    if (Vy > 0) {
      document.getElementById("valorVy").innerHTML = Vy + " m/s";
    } else {
      alert("valor de vy negativo entre com outros valores!!");
    }

    
    const aceleracaoGravidade = Vy - velocidadeNumber / tempo;
    document.getElementById("acerelarao").innerHTML =
    aceleracaoGravidade + " m/s";
    
    

   
    const pontoalto = pontoAltoNumber + (velocidadeNumber * tempo) - (0.5 * 9.8) * (tempo ** 2);
    if (pontoalto > 0) {
      document.getElementById("pontoAlto").innerHTML = pontoalto + " m";
    }else{
      document.getElementById("pontoAlto").innerHTML = "O objeto atingiu o chão";
    } 
       
  }

  if (velocidadeNumber < 0 ) {
    alert('A velocidade tem que ser maior que 0!!')
  }
  
  if (tempo < 0) {
      alert("O tempo tem que ser maior que 0!!");
  }

}
  

  function ValorVox(){
    const velocidade = document.getElementById('VelocidadeVox').value;
    const cosseno = document.getElementById('Cosseno').value;
    const tempo = document.getElementById('tempo').value;
    const distancia = document.getElementById('distancia').value;
    const distanciaNUmber = parseInt(distancia)
    const cossenoNumber = parseInt(cosseno)


    if (velocidade >= 0 && tempo >= 0) {
      if (cossenoNumber == 30) {
        const vox = velocidade * 0.866
        document.getElementById('valorVox').innerHTML = vox + 'm/s';
        document.getElementById('valorDistancia').innerHTML = distanciaNUmber + (vox * tempo) +' m'
      }
   
      if (cossenoNumber == 45) {
        const vox = velocidade * 0.707;
        document.getElementById('valorVox').innerHTML = velocidade * 0.707 + ' m/s'
        document.getElementById("valorDistancia").innerHTML = distanciaNUmber + (vox * tempo) +' m';
      }
   
      if (cossenoNumber == 60) {
        const vox = velocidade * 0.5;
        document.getElementById('valorVox').innerHTML = velocidade * 0.5 + ' m/s'
        document.getElementById("valorDistancia").innerHTML = distanciaNUmber + (vox * tempo) +' m';
      }
    }
     
   if (velocidade < 0) {
      alert("A velocidade tem que ser maior que 0!!");
    }

   if (tempo < 0) {
      alert("O tempo tem que ser maior que 0!!");
    }

      
   }