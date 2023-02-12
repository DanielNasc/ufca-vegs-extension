# Extensão UFCA Vegs
Extensão que vai interceptar as requisições do site da catraca do refeitório, pegar o cartão e enviá-lo para o [servidor](https://github.com/DanielNasc/ufca-vegs) realizar seus devidos
procedimentos.

Por enquanto é apenas um "template" pois ainda não tive acesso ao PC com a catraca.

## Techs

<div align='center'>
  <img src='https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white'/>
  &nbsp;&nbsp;
  <img src='https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101'/>
</div>

## Contexto

Na UFCA, seja no almoço ou no jantar, existem três opções de prato principal, dois que incluem carne e um vegetariano, qualquer um pode escolher um dos três para comer.
Porém, algumas pessoas, por causa do estilo de vida que escolheram, comem apenas o prato que não envolve carne. Com isso, por causa que esses indivíduos têm menos opções que os demais, tem-se
que assegurar que sempre haverá uma porção para cada um deles.

Digamos que exista um número X de vegetarianos na universidade. Essas X pessoas vão até a administradora do refeitório e afirmam que refeições irão fazer (almoço ou janta) em
determinados dias (seg a sex), então são refeitas reservas para cada um.

Conforme os alunos e professores vão passando e pegando as suas porções, algum funcionário vai monitorando a quantidade de porções vegetarianas. Quando essa quantidade chega próximo à
quantidade de pessoas com reserva, o funcionário recolhe essa quantidade e guarda, para que assim os vegetarianos que faltam comer possam ir lá, pedirem as suas e garantidamente
receberem.

Mas existem um problema, esse funcionário não tem como saber quantos ainda faltam comer, visto que a passagem é livre e não tem ninguém monitorando em tempo real os vegetarianos 
que passam. Isso sempre gera desperdícios, pois se um vegetariano já tiver pegado sua porção antes ou simplesmente ter faltado, ele não irá pedir à pessoa que guardou para
lhe dar a comida.

É para resolver esse problema que estão sendo desenvolvidas aplicações. Como é necessário ter um cartão do refeitório e passá-lo em um leitor, que envia os dados para 
um servidor via um navegador web, para poder realizar uma determinada refeição, pode-se aproveitar esse momento de leitura e integrar um sistema que intercepta essa requisição
ao servidor e ler qual cartão está sendo enviado. Com isso, envia-se esse cartão para outro servidor feito à parte, exclusivamente para o fim de administrar um contador de
quantos vegetarianos faltam comer. Se for um cartão de um vegetariano, o servidor avisa para os dispositivos conectados via socket para que decremente o contador, se não,
não acontece nada.

### Em resumo...

- Digamos que um número Y de vegetarianos vão comer uma determinada refeição em um determinado dia;
- Digamos que já passaram Z desses vegetarianos;
- Sem essa aplicação, o funcionário não tem como saber quantos já comeram, então quando a quantidade de porções diminui para próximo de Y, ele guarda Y refeições que
estão reservadas;
- Com essa aplicação, ele olha quantos ainda faltam comer, que é Y - Z. Assim, ele guarda apenas esssa quantidade, evitando jogar Z porções fora, que até uma pessoa poderia
querer.

## Como executar

- Baixe o [script do Socket.io](https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.6.0/socket.io.min.js) e o coloque em `scripts/socket.io.js`
  - O script bash `getscripts` já faz isso para você
- Mude a url em `content_scripts.matches` no arquivo de manifesto de acordo com sua necessidade
- Go to the Extensions page by entering chrome://extensions in a new tab. (By design chrome:// URLs are not linkable.)
  - Alternatively, click on the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu.
Or, click the Chrome menu, hover over More Tools, then select Extensions.
Enable Developer Mode by clicking the toggle switch next to Developer mode.
- Click the Load unpacked button and select the extension directory.

Peguei essa última parte do [guia básico do google sobre desenvolvimento de extensões](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/).
