
<p align="center">
<img src="https://user-images.githubusercontent.com/60144554/153733357-c1c4ce5c-a7fa-4e92-a573-93855d443518.png" />
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/60144554/153733082-88037e8a-9ed6-4a79-9bf7-829e56a03b04.png" />
</p>

## Sobre

API desenvolvida durante o módulo introdutório de desenvolvimento de API's do curso [JStack](https://jstack.com.br/). O sistema consiste em um CRUD de contatos implementado com regra de negócio. 

## Tech's

- Docker
- Express.js
- Postgres

## O que eu aprendi

- SQL Queries
- SQL Injection (how it works and how to block it)
- Exception handling
- MVC architecture
- Implementação de regra de negócio 
- Conexão com Postgres por meio do client pg
- ESlint config
- ES Modules 
- Padronização de métodos
- Singleton pattern 
- DB schema 

## Quickstart
```sh
docker run --name pg -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=root -p 5432:5432 -d postgres:alpine 
yarn dev
docker exec -it pg bash
psql -U root
# Schema in src/database/schema.sql
# After the database is created switch to it witn "\c mycontacts" to create tables and add extensions  
```

## Entities

### Contact
```json
{
    name: "Mateus Satoh",
    email: "mateussatoh@gmail.com",
    phone: "+55 21 12345-6789",
    category_id: "create-the-category-first"
}
```

### Category
```json
{
    name: "Work"
}
```

## Routes

### Contacts

|`/contacts`||||
|-|-|-|-|
|**Method**|**Route**|**Description**|
|GET|`/contacts/:id`|get one contact|
|GET|`/contacts`|get all contacts|
|DELETE|`/contacts/:id`|delete one contact|
|POST|`/contacts`|create one contact|
|PUT|`/contacts/:id`|update one contact|

### Categories

|`/categories`||||
|-|-|-|-|
|**Method**|**Route**|**Description**|
|GET|`/categories`|get all categories|
|POST|`/categories`|create one category|
