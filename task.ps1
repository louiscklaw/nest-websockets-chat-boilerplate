docker compose pull
docker compose build

timeout /T 1
docker compose up -d db
timeout /T 1
docker compose up -d pgweb api
timeout /T 1
docker compose up -d proxy
timeout /T 1
docker compose up -d test_frontend nextjs_frontend

docker compose up -d

docker compose logs -f api
