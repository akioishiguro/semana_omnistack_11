//Iniciar o Sistema
npm init -y
npm install express
npm install nodemon -D
    adicionar no arquivo package.json na parte script
        "start": "nodemon index.js"
    Para rodar o programa, usar npm start
npm install knex
npm install sqlite3
npx knex init
npx knex migrate:make creat_ongs
npx knex migrate:latest

Métodos HTTP:
    GET: Buscar/Listar uma informação no back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

Tipos de Parâmetros:
            Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
            Routes Params: Parâmetros utilizados para identificar recursos
            Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos