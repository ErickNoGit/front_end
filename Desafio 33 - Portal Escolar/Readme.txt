# Projeto Escolar

Esse é um projeto para uma escola EAD
NÃO É OFICIAL!

Aqui será registrado a lógica da arquitetura das árvores e organização das definições padrões!

# - Serão os Tópicos principais!

## --CORES
## --PASTAS
## --FONTES
## --IMAGENS
## --ARQUIVOS
## --OBSERVAÇÃO
___________________________________________________________________________

### --CORES:

As cores usadas de forma padrão como root, juntamente com os motivos do css serão essas:

"Cores e seus Tons em variaveis"

--red: #B91C1C;
--red-200: #AA1818;
--white: #FFFFFF;
--white-200: #F3F4F6;
--dark: #000000;
--dark-200: #111827;
--gray: #353436;
--gray-200: #1C1C1C;
--purple: #481A8F;
--purple-200: #39156e;
--blue: #00A0D0;
--blue-200: #3B5999;
--pink: #EE3A5D;
--pink-200: #ae223e;

OBS.: As cores que tem o mesmo nome com traço 200 representa um tom mais escuro! todas as vezes que estiver usando 'cor'-200 representa, ESCURO/DARK. Quando você ver 'cor'-100 é para CLARO/LIGHT. Essas cores serão utilizadas em containers e fontes.

___________________________________________________________________________

### --PASTAS:

- Serão criadas de forma excessiva várias pastas para organizar o controle do css e demais arquivos, todas linkadas e recebendo um 'home/' com nome assets.

- As pastas de CSS terá apenas outras pastas de referência ao arquivo css contido nela. Assim um código será mais sensível a manutenção devido a pouca quantidade por aquivo. CSS padrão, como; header e footer das páginas, serão colocadas na mesma pasta, e linkadas por todos HTML. Facilita manutenção em todas igualmente e diminui CSS.

- As pastas de imagens serão separadas por definições de controle de cada arquivo html. Ou seja: para cada html haverá uma pasta img correspondetes aquela página. OBS.: mesmo que tenha imgs repetidas!

- A pasta 'html' terá os arquivos em .html disponíveis pelo próprio site. ex.: Se um botão 'a' tiver levando o nome notícias, esse html também será chamado assim, para facilitar o controle em manutenção por links.

___________________________________________________________________________

### --FONTES:

- Não há muito a se dizer sobre as fontes, serão colocadas nos HTMLs com googleFonts padrão.
Serão : 

-Mukta #Para titulos e textos especificos
-Inter #Como padrão do HTML

___________________________________________________________________________

### --IMAGENS:

- Todas as imagens serão organizadas nas respectivas pastas, como citado acima! Os nomes das imagens, darão mais alusão ao que ela representa visualmente. Ex.: logo do site, será chamada de logo, se houver mais de uma logo, será chamada na forma númerica, começando pelo 0. (logo-0, logo-1, logo-2...).

___________________________________________________________________________

### --ARQUIVOS:

- Os arquivos serão classificados nas suas respectivas pastas, assests representando a '/HOME/' do sistema operacional, CSS para todos os .css, HTML para todos .html e assim por diante.
- O arquivo style terá apenas os links em @import organizados para futura limpeza no terminal em clen-css.OBS.: no fim, todos os HTMLs deverão ser linkados no novo arquivo style.min.css.
- O arquivo index.html será a página principal do site.

___________________________________________________________________________

### --OBSERVAÇÃO:

'Tecnologias usadas:'

HTML
CSS
JAVASCRIPT
ARQUIVO.TXT
FIGMA
LIVE-SERVER
VSCODE
NPM
CLEAN-CSS
GITHUB
GIT
GOOGLE-FONTES

'Padronização do @media:'

1250px

950px

800px

600px

500px

450px

- O media query definido no Figma, leva em consideração uma tela de 1920px, a minha está em 1320px, portanto usarei margin 0 auto e max-width para centralizar toda página nas respectivas caixas 'Pai'.

Declarações finais: Alguns comentários serão colocados no meio dos códigos fazendo referência a esse documento.

___________________________________________________________________________ 