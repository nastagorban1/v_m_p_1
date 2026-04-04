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