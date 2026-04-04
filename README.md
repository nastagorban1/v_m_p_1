PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose up -d
time="2026-04-04T19:55:18+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+] up 3/3
 ✔ Container v_m_p_1-redis-1    Healthy                      0.6s
 ✔ Container v_m_p_1-postgres-1 Healthy                      0.6s
 ✔ Container v_m_p_1-app-1      Running                      0.0s
PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1>


PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose ps
NAME                 IMAGE                COMMAND                  SERVICE    CREATED          STATUS                    PORTS
v_m_p_1-app-1        v_m_p_1-app          "docker-entrypoint.s…"   app        31 minutes ago   Up 31 minutes             0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp
v_m_p_1-postgres-1   postgres:16-alpine   "docker-entrypoint.s…"   postgres   40 minutes ago   Up 40 minutes (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp
v_m_p_1-redis-1      redis:7-alpine       "docker-entrypoint.s…"   redis      40 minutes ago   Up 40 minutes (healthy)   0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp



PS C:\Users\admin\Desktop\v_m_p_practice1\v_m_p_1> docker compose run --rm app npm -v
time="2026-04-04T19:56:38+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+]  2/2t 2/22
 ✔ Container v_m_p_1-redis-1    Running                                             0.0s
 ✔ Container v_m_p_1-postgres-1 Running                                             0.0s
Container v_m_p_1-redis-1 Waiting 
Container v_m_p_1-postgres-1 Waiting 
Container v_m_p_1-redis-1 Healthy 
Container v_m_p_1-postgres-1 Healthy 
Container v_m_p_1-app-run-5b2c2466f75f Creating
Container v_m_p_1-app-run-5b2c2466f75f Created 
10.8.2

docker compose run --rm app node --version
time="2026-04-04T19:57:05+03:00" level=warning msg="Found orphan containers ([v_m_p_1-npm-1]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up."
[+]  2/2t 2/22
 ✔ Container v_m_p_1-postgres-1 Running                                             0.0s
 ✔ Container v_m_p_1-redis-1    Running                                             0.0s
Container v_m_p_1-redis-1 Waiting 
Container v_m_p_1-postgres-1 Waiting 
Container v_m_p_1-postgres-1 Healthy 
Container v_m_p_1-redis-1 Healthy 
Container v_m_p_1-app-run-a7cdfbe0c8a7 Creating
Container v_m_p_1-app-run-a7cdfbe0c8a7 Created 
v20.20.2
failed to resize tty, using default size