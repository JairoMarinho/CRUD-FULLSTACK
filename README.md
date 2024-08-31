Cadastro de Alunos

Este é um projeto Fullstack para o cadastro de alunos, desenvolvido com Node.js no backend e um frontend simples em HTML, CSS e JavaScript. Ele permite cadastrar, listar, atualizar e deletar informações de alunos em um banco de dados MongoDB.

. Índice
. Instalação
. Configuração
. Uso
. API Endpoints
. Contribuição
. Licença

--> Instalação

1. Clone este repositório para sua máquina local:
   git clone https://github.com/username/cadastro-alunos.git
   cd cadastro-alunos

2. Instale as dependências do backend:
   cd backend
   npm install

3. Instale as dependências do frontend:
  cd ../frontend
  npm install

--> Configuração

Este projeto utiliza o MongoDB para armazenar os dados dos alunos. Certifique-se de que o MongoDB está instalado e em execução na sua máquina. A conexão é feita através do Mongoose.

1. Configuração do Backend:
   mongoose.connect('mongodb://127.0.0.1:27017/alunos')

2. Para rodar o backend:
  cd backend
  npm start

3. Configuração do Frontend:
   O frontend está localizado na pasta frontend. Para iniciar o frontend, abra o arquivo index.html no seu navegador.

---> Uso
  No frontend, utilize o formulário para cadastrar novos alunos. O backend irá gerenciar as operações de criação, listagem, atualização e exclusão de registros.

  As ações de CRUD são manipuladas através de uma API RESTful, conforme descrito na seção abaixo.

  --> API Endpoints

  1. POST /api/alunos
     Descrição: Cadastra um novo aluno.
      {
        "name": "Nome do Aluno",
        "cpf": "12345678901"
      }

  2. GET /api/alunos
     Descrição: Lista todos os alunos cadastrados.
      {
        "_id": "id_do_aluno",
        "name": "Nome do Aluno",
        "cpf": "12345678901"
      }

   3. PUT /api/alunos
     Descrição: Atualiza os dados de um aluno pelo ID.
     {
      "name": "Novo Nome",
      "cpf": "98765432100"
    }

  4. DELETE /api/alunos
      Descrição: Deleta um aluno pelo ID.

--> Contribuição

  1. Faça um fork deste repositório.
  2. Crie uma nova branch (git checkout -b feature/nova-feature).
  3. Faça suas alterações e commit (git commit -am 'Adiciona nova feature').
  4. Envie para o repositório remoto (git push origin feature/nova-feature).
  5. Abra um Pull Request.

--> Licença
  Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.


     
