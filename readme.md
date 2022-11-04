# Собрать доке-образ
docker build -t warpion/itmo-counter:done .

# Запуск контейнера
docker run -d -p 80:3000 -v data:/app/data --rm --name counter warpion/itmo-counter:done