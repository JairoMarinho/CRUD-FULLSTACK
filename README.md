
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