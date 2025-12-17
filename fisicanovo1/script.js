const gravityInput = document.getElementById('gravity');
        const angleInput = document.getElementById('angle');
        const velocityInput = document.getElementById('velocity');
        const resultado = document.getElementById('resultado');
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        let animationId = null;

        function startSimulation() {
            // Captura os valores do input
            const gravity = parseFloat(gravityInput.value);
            const angle = parseFloat(angleInput.value);
            const velocity = parseFloat(velocityInput.value);

            // Converte o ângulo para radianos
            const angleRad = angle * Math.PI / 180;

            // Calcula o resultado
            const maxHeight = (Math.pow(velocity, 2) * Math.pow(Math.sin(angleRad), 2)) / (2 * gravity);
            const range = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / gravity;
            const time = parseFloat((Math.sin(angleRad)*velocity/gravity)*2)


            // Exibe o resultado
            resultado.innerHTML = `Aceleração da Gravidade: ${gravity} m/s²<br>Altura Máxima: ${maxHeight.toFixed(2)} m<br>Alcance: ${range.toFixed(2)}m <br>Tempo: ${time.toFixed(2)}s`;

            // Inicia a animação
            animateProjectile(angleRad, velocity, gravity);
        }

        function animateProjectile(angleRad, velocity, gravity) {
            const startX = 50;
            const startY = canvas.height - 50;
            const timeInterval = 0.05; // Intervalo de tempo para atualização da animação (segundos)
            let t = 0;
            let x = 0;
            let y = 0;

            // Armazena as posições anteriores para o rastro
            let trajectory = [];

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calcula a posição do projétil
                x = startX + velocity * Math.cos(angleRad) * t;
                y = startY - (velocity * Math.sin(angleRad) * t - 0.5 * gravity * t * t);

                // Desenha o rastro pontilhado
                ctx.setLineDash([5, 10]); // Define a linha pontilhada
                if (trajectory.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(trajectory[0].x, trajectory[0].y);
                    for (let i = 1; i < trajectory.length; i++) {
                        ctx.lineTo(trajectory[i].x, trajectory[i].y);
                    }
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }

                // Adiciona a posição atual à trajetória
                trajectory.push({x: x, y: y});

                // Desenha o projétil
                ctx.beginPath();
                ctx.arc(x, y, 8 , 0, Math.PI * 2);
                ctx.fillStyle = 'blue';
                ctx.fill();

                // Atualiza o tempo
                t += timeInterval;

                // Verifica se o projétil atingiu o solo
                if (y <= canvas.height - 50) {
                    animationId = requestAnimationFrame(draw);
                }
            }

            // Inicia o loop de animação
            draw();
        }



/*const gravityInput = document.getElementById('gravity');
        const angleInput = document.getElementById('angle');
        const velocityInput = document.getElementById('velocity');
        const resultado = document.getElementById('resultado');
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        let animationId = null;

        function startSimulation() {
            // Captura os valores do input
            const gravity = parseFloat(gravityInput.value);
            const angle = parseFloat(angleInput.value);
            const velocity = parseFloat(velocityInput.value);

            // Converte o ângulo para radianos
            const angleRad = angle * Math.PI / 180;

            // Calcula o resultado
            const maxHeight = (Math.pow(velocity, 2) * Math.pow(Math.sin(angleRad), 2)) / (2 * gravity);
            const range = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / gravity;

            // Exibe o resultado
            resultado.innerHTML = `Aceleração da Gravidade: ${gravity} m/s²<br>Altura Máxima: ${maxHeight.toFixed(2)} m<br>Alcance: ${range.toFixed(2)} m`;

            // Inicia a animação
            animateProjectile(angleRad, velocity, gravity);
        }

        function animateProjectile(angleRad, velocity, gravity) {
            const startX = 30;
            const startY = canvas.height - 30;
            const timeInterval = 0.05; // Intervalo de tempo para atualização da animação (segundos)
            let t = 0;
            let x = 0;
            let y = 0;

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calcula a posição do projétil
                x = startX + velocity * Math.cos(angleRad) * t;
                y = startY - (velocity * Math.sin(angleRad) * t - gravity /0.5 * t * t); //Gravidade original era 2 antes da alteração.

                // Desenha o projétil
                ctx.beginPath();
                ctx.arc(x, y, 7 , 0, Math.PI * 2);
                ctx.fillStyle = 'blue';
                ctx.fill();

                const img = new Image();
  img.src = 'https://zonaroblox.com/wp-content/uploads/cara-de-hombre-roblox.png'; // Substitua este URL pela URL da sua imagem
  let imgWidth = 50; // Largura da imagem
  let imgHeight = 50; // Altura da imagem


    
                // Atualiza o tempo
                t += timeInterval;

                // Verifica se o projétil atingiu o solo
                if (y <= canvas.height - 30) {
                    animationId = requestAnimationFrame(draw);
                }
            }

            // Inicia o loop de animação
            draw();
        }

*/
