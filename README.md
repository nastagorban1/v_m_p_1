

## Student
- Name: Горбань Анастасія Сергіївна
- 232.1

## Практичне заняття №5 — JWT Authentication + Guards + RBAC

├── src/
│ ├── auth/
│ │ ├── dto/
│ │ │ ├── register.dto.ts
│ │ │ └── login.dto.ts
│ │ ├── auth.module.ts
│ │ ├── auth.service.ts
│ │ └── auth.controller.ts
│ ├── users/
│ │ ├── user.entity.ts
│ │ ├── users.module.ts
│ │ └── users.service.ts
│ ├── common/
│ │ ├── enums/
│ │ │ └── role.enum.ts
│ │ ├── guards/
│ │ │ ├── jwt-auth.guard.ts
│ │ │ └── roles.guard.ts
│ │ ├── decorators/
│ │ │ ├── current-user.decorator.ts
│ │ │ └── roles.decorator.ts
│ │ └── pipes/
│ │ └── trim.pipe.ts
│ ├── categories/
│ ├── products/
│ ├── migrations/
│ ├── data-source.ts
│ ├── main.ts
│ └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md



docker compose up --build -d
time="2026-05-12T21:03:04+03:00" level=warning msg="project has been loaded without an explicit name from a symlink. Using name \"v_M_P_1\""
#1 [internal] load local bake definitions
#1 reading from stdin 543B 0.0s done
#1 DONE 0.0s

#2 [internal] load build definition from Dockerfile
#2 transferring dockerfile: 253B 0.0s done
#2 DONE 0.1s

#3 [internal] load metadata for docker.io/library/node:20-alpine
#3 ...

#4 [auth] library/node:pull token for registry-1.docker.io
#4 DONE 0.0s

#3 [internal] load metadata for docker.io/library/node:20-alpine
#3 DONE 1.3s

#5 [internal] load .dockerignore
#5 transferring context: 2B done
#5 DONE 0.0s

#6 [1/6] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293
#6 resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293 0.0s done
#6 DONE 0.1s

#7 [internal] load build context
#7 transferring context: 3.39MB 2.9s done
#7 DONE 3.1s

#8 [2/6] RUN npm install -g @nestjs/cli
#8 CACHED

#9 [3/6] WORKDIR /app
#9 CACHED

#10 [4/6] COPY package*.json ./
#10 CACHED

#11 [5/6] RUN npm install --ignore-scripts 2>/dev/null || true
#11 CACHED

#12 [6/6] COPY . .
#12 DONE 42.7s

#13 exporting to image
#13 exporting layers
#13 exporting layers 16.8s done
#13 exporting manifest sha256:7f3bde402ffbf3fc3c50193141ed037f58fa8c52e8a093450ca2c564ec4609f9 0.0s done
#13 exporting config sha256:803b6bd59eeba5c714befdc6a658e33a6a8b1194a22721c440f2920733e5e721 0.0s done
#13 exporting attestation manifest sha256:012fc59f94112e9a46c788dff02524a94f188222da98ddfe9a10e75aa244f54a 0.1s done
#13 exporting manifest list sha256:3fce80266e50f6e544cbf1c218ff998de18130ba816e2804926875e1e5a36143
#13 exporting manifest list sha256:3fce80266e50f6e544cbf1c218ff998de18130ba816e2804926875e1e5a36143 0.0s done
#13 naming to docker.io/library/v_m_p_1-app:latest done
#13 unpacking to docker.io/library/v_m_p_1-app:latest
#13 unpacking to docker.io/library/v_m_p_1-app:latest 14.6s done
#13 DONE 31.7s

#14 resolving provenance for metadata file
#14 DONE 0.1s
time="2026-05-12T21:04:25+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+] up 4/4
 ✔ Image v_m_p_1-app            Built                                              80.5s
 ✔ Container v_m_p_1-redis-1    Healthy                                            7.2s
 ✔ Container v_m_p_1-postgres-1 Healthy                                            7.2s
 ✔ Container v_m_p_1-app-1      Recreated      


##  API Endpoints

| Method | URL | Auth | Role |
|--------|-----|------|------|
| POST | /auth/register | - | - |
| POST | /auth/login | - | - |
| GET | /api/categories | - | - |
| POST | /api/categories | JWT | admin |
| GET | /api/products | - | - |
| POST | /api/products | JWT | admin |
| PATCH | /api/products/:id | JWT | admin |
| DELETE | /api/products/:id | JWT | admin |


PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> docker compose exec postgres psql -U nestuser -d nestdb -c "\d users"
time="2026-05-12T18:37:22+03:00" level=warning msg="project has been loaded without an explicit name from a symlink. Using name \"v_M_P_1\""
                                         Table "public.users"
    Column    |            Type             | Collation | Nullable |              Default              
--------------+-----------------------------+-----------+----------+-----------------------------------
 id           | integer                     |           | not null | nextval('users_id_seq'::regclass)
 email        | character varying           |           | not null | 
 passwordHash | character varying           |           | not null | 
 name         | character varying           |           |          | 
 role         | users_role_enum             |           | not null | 'user'::users_role_enum
 createdAt    | timestamp without time zone |           | not null | now()
Indexes:
--More-- 

## 1. Реєстрація нового користувача:


PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> Invoke-RestMethod -Uri "http://localhost:3000/auth/register" -Method POST -ContentType "application/json" -Body '{"email":"user@test.com","password":"12345678","name":"Test"}'


id        : 1
email     : user@test.com
name      : Test
role      : user
createdAt : 2026-05-12T16:34:22.716Z


## 2. Повторна реєстрація (дубль email):

PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> Invoke-RestMethod -Uri "http://localhost:3000/auth/register" -Method POST -ContentType "application/json" -Body '{"email":"user@test.com","password":"12345678","name":"Test"}'
Invoke-RestMethod : {"message":"User already exists","error":
"Conflict","statusCode":409}
At line:1 char:1
+ Invoke-RestMethod -Uri "http://localhost:3000/auth/register
" -Method  ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net. 
   HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebE  
  xception
    + FullyQualifiedErrorId : WebCmdletWebResponseException, 
   Microsoft.PowerShell.Commands.InvokeRestMethodCommand


## 3. Логін і збереження токену : 
 
PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> $response = Invoke-RestMethod -Uri "http://localhost:3000/auth/login" -Method POST -ContentType "application/json" -Body '{"email":"user@test.com","password":"12345678"}'
PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> $userToken = $response.accessToken
PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> $userToken
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidXNlckB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc4NjA3MDY4LCJleHAiOjE3Nzg2MTA2Njh9.82pYppS0DBkATtA76-WWfSnFgzmabSAxGRlxkSqCDao
PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> 


## 4. Невірний пароль:

PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> Invoke-RestMethod -Uri "http://localhost:3000/auth/login" -Method POST -ContentType "application/json" -Body '{"email":"user@test.com","password":"securepass123"}'
Invoke-RestMethod : {"message":"Invalid credentials","error":
"Unauthorized","statusCode":401}
At line:1 char:1
+ Invoke-RestMethod -Uri "http://localhost:3000/auth/login" -
Method POS ...


GET без токена (публічний)

S C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> curl http://localhost:3000/api/products



StatusCode        : 200
StatusDescription : OK
Content           : []
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 2
                    Content-Type: application/json; charset=u
                    tf-8
                    Date: Tue, 12 May 2026 17:41:29 GMT
                    ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMC...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, t
                    imeout=5], [Content-Length, 2], [Content-
                    Type, application/json; charset=utf-8]...
                    }
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 2


## POST без токена

PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_P_1> Invoke-RestMethod -Uri "http://localhost:3000/api/products" `
>> -Method POST `
>> -ContentType "application/json" `
>> -Body '{"name":"Test","price":10}'
Invoke-RestMethod : {"message":"No token","error":"Unauthorized","statusCode":401}
At line:1 char:1
+ Invoke-RestMethod -Uri "http://localhost:3000/api/products" `
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequ 
   est) [Invoke-RestMethod], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Comma 
   nds.InvokeRestMethodCommand

POST з токеном USER 

PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_P_1> Invoke-RestMethod -Uri "http://localhost:3000/api/products" `
>> -Method POST `
>> -Headers @{Authorization="Bearer $userToken"} `
>> -ContentType "application/json" `
>> -Body '{"name":"Blocked Product","price":99}'
Invoke-RestMethod : {"message":"Insufficient permissions","error":"Forbidden","statusCo
de":403}
At line:1 char:1
+ Invoke-RestMethod -Uri "http://localhost:3000/api/products" `
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOp

 POST з токеном ADMIN:


PS C:\Users\admin\Desktop\v_m_p_practice1\v_M_P_1> Invoke-RestMethod -Uri "http://localhost:3000/api/products" -Method POST -ContentType "application/json" -Headers @{Authorization="Bearer $adminToken"} -Body '{"name":"MacBook Pro","price":2499.99,"stock":10}'


id          : 4
isActive    : True
name        : MacBook Pro
description : 
price       : 2499,99
stock       : 10
createdAt   : 2026-05-12T17:55:20.495Z
updatedAt   : 2026-05-12T17:55:20.495Z









## Student
- Name: Горбань Анастасія Сергіївна
- 232.1

## Практичне заняття №4 — DTO + class-validator + Pipes

### Структура репозиторію
```
.
├── src/
│   ├── categories/
│   │   ├── dto/
│   │   │   ├── create-category.dto.ts
│   │   │   └── update-category.dto.ts
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── common/
│   │   └── pipes/
│   │   	└── trim.pipe.ts
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```
 
### Запуск проекту
```bash
cp .env.example .env
docker compose up --build

### тести валідації


curl.exe -X POST "http://localhost:3000/api/categories" `
>> -H "Content-Type: application/json" `
>> -d "{\"name\":\"\"}"
{"message":"Expected property name or '}' in JSON at position 1","error":"Bad Request","statusCode":400}curl: (3) URL rejected: Port number was not a decimal number between 0 and 65535
PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> 


 curl.exe -X POST "http://localhost:3000/api/categories" `
>> -H "Content-Type: application/json" `
>> -d "{\"name\":\"Test\",\"isAdmin\":true}"
{"message":"Expected property name or '}' in JSON at position 1","error":"Bad Request","statusCode":400curl: (3) unmatched close brace/bracket in URL position 28:
name\:\Test\,\isAdmin\:true
                      


curl.exe -X POST http://localhost:3000/api/products ^-H "Content-Type: application/json" ^-d "{\"name\":\"iPhone 16\",\"price\":999.99,\"stock\":10,\"categoryId\":1}"
{"message":["name must be shorter than or equal to 255 characters","name must be longer than or equal to 2 characters","name must be a string","price must not be less than 0.01","price must be a number conforming to the specified constraints"],"error":"Bad Request","statusCode":400}curl: (3) URL rejected: Bad hostname



curl.exe -X POST "http://localhost:3000/api/products" `
>> -H "Content-Type: application/json" `
>> -d "{\"name\":\"Bad\",\"price\":-5}"
{"message":"Expected property name or '}' in JSON at position 1","error":"Bad Request","statusCode":400curl: (3) unmatched close brace/bracket in URL position 23:
name\:\Bad\,\price\:-5


curl.exe -X POST "http://localhost:3000/api/categories" `
>> -H "Content-Type: application/json" `
>> -d "{\"name\":\"   Accessories   \"}"
{"message":"Expected property name or '}' in JSON at position 1","error":"Bad Request","statusCode":400}curl: (3) URL rejected: Port number was not a decimal number between 0 and 65535
curl: (6) Could not resolve host: Accessories
curl: (3) URL rejected: Bad hostname








## Student
- Name: Горбань Анастасія Сергіївна
- Group: 232.1

## Практичне заняття №3 — CRUD REST API для MiniShop

### Структура репозиторію
.
├── src/
│ ├── categories/
│ │ ├── category.entity.ts
│ │ ├── categories.module.ts
│ │ ├── categories.service.ts
│ │ └── categories.controller.ts
│ ├── products/
│ │ ├── product.entity.ts
│ │ ├── products.module.ts
│ │ ├── products.service.ts
│ │ └── products.controller.ts
│ ├── migrations/
│ │ ├── 1700000001-CreateTables.ts
│ │ └── <timestamp>-AddIsActiveToProducts.ts
│ ├── data-source.ts
│ └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md


### Запуск проекту

cp .env.example .env
docker compose up --build


### API Endpoints
| Method | URL | Опис |
|--------|-----|------|
| GET | /api/categories | Список категорій |
| GET | /api/categories/:id | Одна категорія |
| POST | /api/categories | Створити категорію |
| PATCH | /api/categories/:id | Оновити категорію |
| DELETE | /api/categories/:id | Видалити категорію |
| GET | /api/products | Список продуктів |
| GET | /api/products/:id | Один продукт |
| POST | /api/products | Створити продукт |
| PATCH | /api/products/:id | Оновити продукт |
| DELETE | /api/products/:id | Видалити продукт |

### Тест створення категорії

PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose exec postgres psql -U nestuser -d nestdb -c "\dt"
           List of relations
 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | categories | table | nestuser
 public | migrations | table | nestuser
 public | products   | table | nestuser


"

### Тест створення продукту


StatusCode        : 200
StatusDescription : OK
Content           : [{"id":1,"isActive":true,"name":"iPhone","de
                    scription":null,"price":"999.00","stock":0,"
                    category":{"id":1,"name":"Electronics","desc
                    ription":null,"createdAt":"2026-04-08T21:50:
                    32.186Z"},"createdAt":"2..}]

### Тест 404

 C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> curl http://localhost:3000/api/products/999
curl : {"message":"Product #999 not found","error":"Not Found","
statusCode":404}












ВПРАВА 1
Горбань Анастасія Сергіївна 232.1
Практична 2


PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose run --rm app npm -v
time="2026-04-04T20:07:25+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+]  2/2t 2/22
 ✔ Container v_m_p_1-postgres-1 Running                                             0.0s
 ✔ Container v_m_p_1-redis-1    Running                                             0.0s
Container v_m_p_1-redis-1 Waiting 
Container v_m_p_1-postgres-1 Waiting 
Container v_m_p_1-postgres-1 Healthy 
Container v_m_p_1-redis-1 Healthy 
Container v_m_p_1-app-run-968991f7f071 Creating
Container v_m_p_1-app-run-968991f7f071 Created 
10.8.2




docker compose run --rm app node --version
time="2026-04-04T20:08:43+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+]  2/2t 2/22
 ✔ Container v_m_p_1-postgres-1 Running                                             0.0s
 ✔ Container v_m_p_1-redis-1    Running                                             0.0s
Container v_m_p_1-postgres-1 Waiting 
Container v_m_p_1-redis-1 Waiting 
Container v_m_p_1-redis-1 Healthy 
Container v_m_p_1-postgres-1 Healthy 
Container v_m_p_1-app-run-f51813d398ef Creating
Container v_m_p_1-app-run-f51813d398ef Created 
v20.20.2



PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose run --rm app nest --version
time="2026-04-04T20:09:04+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+]  2/2t 2/22
 ✔ Container v_m_p_1-postgres-1 Running                                             0.0s
 ✔ Container v_m_p_1-redis-1    Running                                             0.0s
Container v_m_p_1-postgres-1 Waiting 
Container v_m_p_1-redis-1 Waiting 
Container v_m_p_1-redis-1 Healthy 
Container v_m_p_1-postgres-1 Healthy 
Container v_m_p_1-app-run-24f9fbb97a14 Creating
Container v_m_p_1-app-run-24f9fbb97a14 Created 
11.0.17

-------------------------------------------------

ВПРАВА 2 



PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose up -d
time="2026-04-04T20:10:05+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+] up 3/3
 ✔ Container v_m_p_1-postgres-1 Healthy                                             0.6s
 ✔ Container v_m_p_1-redis-1    Healthy                                             0.6s
 ✔ Container v_m_p_1-app-1      Running                                             0.0s
PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose ps
NAME                 IMAGE                COMMAND                  SERVICE    CREATED          STATUS                    PORTS
v_m_p_1-app-1        v_m_p_1-app          "docker-entrypoint.s…"   app        44 minutes ago   Up 44 minutes             0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp
v_m_p_1-postgres-1   postgres:16-alpine   "docker-entrypoint.s…"   postgres   54 minutes ago   Up 54 minutes (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp
v_m_p_1-redis-1      redis:7-alpine       "docker-entrypoint.s…"   redis      54 minutes ago   Up 54 minutes (healthy)   0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp


ВПРАВА 3 

PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> curl http://localhost:3000 -UseBasicParsing


StatusCode        : 200
StatusDescription : OK
Content           : Hello World!
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 12
                    Content-Type: text/html; charset=utf-8
                    Date: Sat, 04 Apr 2026 17:14:21 GMT
                    ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"...



ВПРАВА 4 

PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose logs -f app
app-1  | 
app-1  | > temp@0.0.1 start:dev
app-1  | > ts-node -r tsconfig-paths/register src/main.ts
app-1  |
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +149ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [InstanceLoader] CacheModule dependencies initialized +14ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +91ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [RoutesResolver] AppController {/}: +3ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [RouterExplorer] Mapped {/, GET} route +3ms
app-1  | [Nest] 18  - 04/04/2026, 4:25:24 PM     LOG [NestApplication] Nest application successfully started +4ms


ВПРАВА 5 
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        store: redisStore,
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      }),
    }),
  ],
})

ВПРАВА 6



PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose exec postgres psql -U nestuser -d nestdb -c "\l"
                                                      List of databases
   Name    |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
 nestdb    | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |          
  |           |
 postgres  | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |          
  |           |
 template0 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |          
  |           | =c/nestuser          +
           |          |          |                 |            |            |          
  |           | nestuser=CTc/nestuser
 template1 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |          
  |           | =c/nestuser          +
           |          |          |                 |            |            |          
  |           | nestuser=CTc/nestuser
(4 rows)
--More--






PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose exec redis redis-cli ping
PONG