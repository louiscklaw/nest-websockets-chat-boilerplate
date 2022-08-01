docker compose pull
docker compose build

timeout /T 1
docker compose up -d db
timeout /T 1
docker compose up -d pgweb api
timeout /T 1
docker compose up -d proxy

docker compose up -d

docker compose logs -f proxy
