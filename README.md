**DesafioEgadnetNodeJS**

**Desafio**: Consumindo uma api de CEP (https://viacep.com.br/) utilizando NodeJS

Execute no diretorio do projeto - **npm install**
para instalar todas as dependências

Foi implementado o sistema de cache na requisição utilizando Redis
**Redis:** https://redis.io/

Recomendo que utilize o docker para utilziar o redis:
Instale o redis a partir do docker: **docker pull redis**

Inicialize um container **docker run -d -p 6379:6379 -i -t redis**

**Utilização da API**
O servidor esta rodando na porta 8001

Execute o comando **npm run dev** assim irá iniciar o servidor das api's

**OBS: Caso no console aparecer [*] Redis connected. quer dizer que seu redis está configurado certo!**

Existe um **arquivo para importar no INSOMNIA** dentro do projeto

**Requisões**

**Auth - GET **: **/auth**       -> Apenas envie a requisição, não é necessário passar parametros, apenas para demonstrar o funcionamento do JWT (autenticação)

**BUSCAR CEP - POST**: **/:cep** -> digite o cep http://localhost:8081/89140000
