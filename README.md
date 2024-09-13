<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=00bfbf&height=120&section=header"/>
  
[![Typing SVG](https://readme-typing-svg.herokuapp.com/?color=00bfbf&size=35&center=true&vCenter=true&width=1000&lines=Hello,+My+Name+is+Jairo+Marinho+;I'm+34+years+old;I+am+from+Recife,+PE;I+study+analysis+and+systems+development+at+Senac;Be+Welcome!+:%29)](https://git.io/typing-svg) 

<div align="center">  
  <img width="49%" height="195px" src="https://github-readme-stats.vercel.app/api?username=JairoMarinho&show_icons=true&count_private=true&hide_border=true&title_color=00bfbf&icon_color=00bfbf&text_color=c9d1d9&bg_color=0d1117" alt="Jairo Marinho github stats" /> 
  <img width="41%" height="195px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=JairoMarinho&layout=compact&hide_border=true&title_color=00bfbf&text_color=00bfbf&bg_color=0d1117" />
</div>

[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=JairoMarinho&bg_color=000000&color=15e5a6&line=07e9a5&point=0a855c&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=JairoMarinho&theme=dracula&row=2&no-bg=true&column=3&margin-w=15&margin-h=15" />
</p>

<div align="center">  
<a href="https://www.instagram.com/marinho_ia.solutions/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"</a>
</div> 
 
### Main skills:
![Node.JS](https://img.shields.io/badge/-Node.JS-0D1117?style=for-the-badge&logo=node.js&labelColor=0D1117&textColor=0D1117)&nbsp;
![React.js](https://img.shields.io/badge/-React.js-0D1117?style=for-the-badge&logo=react&labelColor=0D1117)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117&textColor=0D1117)&nbsp;
 

 
### Tools:
![Visual Studio](https://img.shields.io/badge/-Visual%20Studio-0D1117?style=for-the-badge&logo=visual-studio&logoColor=C8A2C8&labelColor=0D1117)&nbsp;
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-0D1117?style=for-the-badge&logo=visual-studio-code&logoColor=0D1117&labelColor=0D1117)&nbsp;
![Git](https://img.shields.io/badge/-Git-0D1117?style=for-the-badge&logo=git&labelColor=0D1117)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-0D1117?style=for-the-badge&logo=github&labelColor=0D1117)&nbsp;
![Windows](https://img.shields.io/badge/-Windows-0D1117?style=for-the-badge&logo=windows&labelColor=0D1117)&nbsp;
![microsoft-office](https://img.shields.io/badge/-microsoft_office-0D1117?style=for-the-badge&logo=microsoft-office&labelColor=0D1117)&nbsp;
 
### Other Knowledge:
![HTML](https://img.shields.io/badge/-HTML-0D1117?style=for-the-badge&logo=html5&labelColor=0D1117)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-0D1117?style=for-the-badge&logo=CSS3&logoColor=1572B6&labelColor=0D1117)&nbsp; 
![Python](https://img.shields.io/badge/-python-0D1117?style=for-the-badge&logo=python&logoColor=1572B6&labelColor=0D1117)&nbsp;
![MySQL](https://img.shields.io/badge/-mysql-0D1117?style=for-the-badge&logo=mysql&labelColor=0D1117)&nbsp;


  
### Studying in this moment:
![Node.JS](https://img.shields.io/badge/-Node.JS-0D1117?style=for-the-badge&logo=node.js&labelColor=0D1117&textColor=0D1117)&nbsp;
![React.js](https://img.shields.io/badge/-React.js-0D1117?style=for-the-badge&logo=react&labelColor=0D1117)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117&textColor=0D1117)&nbsp;

<div align="center">
<br><p align="centre"><b>Visitors Count</b></p>  
<p align="center"><img align="center" src="https://profile-counter.glitch.me/{JairoMarinho}/count.svg" /></p> 
<br></div>


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=00bfbf&height=120&section=footer"/>








Cadastro de Estudantes

Este é um projeto Fullstack para o cadastro de estudantes, desenvolvido com Node.js no backend e um frontend simples em HTML, CSS e JavaScript. A aplicação permite cadastrar, listar, atualizar e deletar informações dos estudantes em um banco de dados MongoDB.

Índice

Instalação
Configuração
Uso
API Endpoints
Contribuição
Licença
Instalação

Clone este repositório para sua máquina local:

git clone https://github.com/username/cadastro-estudantes.git
cd cadastro-estudantes
Instale as dependências do backend:

cd backend
npm install
Instale as dependências do frontend:

cd ../frontend
npm install
Configuração

Este projeto utiliza o MongoDB para armazenar os dados dos estudantes. Certifique-se de que o MongoDB está instalado e em execução na sua máquina. A conexão é feita através do Mongoose.

Configuração do Backend:

mongoose.connect('mongodb://127.0.0.1:27017/estudantes')
Para rodar o backend:

cd backend
npm start
Configuração do Frontend: O frontend está localizado na pasta frontend. Para iniciar o frontend, abra o arquivo index.html no seu navegador.

Uso

No frontend, utilize o formulário para cadastrar novos estudantes. O backend irá gerenciar as operações de criação, listagem, atualização e exclusão de registros.

As ações de CRUD são manipuladas através de uma API RESTful, conforme descrito na seção abaixo.

API Endpoints

POST /api/estudantes

Descrição: Cadastra um novo estudante.
Exemplo de corpo da requisição:
{ "name": "Nome do Estudante", "matricula": "123456" }
GET /api/estudantes

Descrição: Lista todos os estudantes cadastrados.
Exemplo de resposta:
{ "_id": "id_do_estudante", "name": "Nome do Estudante", "matricula": "123456" }
PUT /api/estudantes/:id

Descrição: Atualiza os dados de um estudante pelo ID.
Exemplo de corpo da requisição:
{ "name": "Novo Nome", "matricula": "654321" }
DELETE /api/estudantes/:id

Descrição: Deleta um estudante pelo ID.
Contribuição

Faça um fork deste repositório.

Crie uma nova branch:

git checkout -b feature/nova-feature
Faça suas alterações e commit:

git commit -am 'Adiciona nova feature'
Envie para o repositório remoto:

git push origin feature/nova-feature
Abra um Pull Request.

Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
