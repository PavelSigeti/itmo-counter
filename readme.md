# Собрать докер-образ
docker build -t warpion/itmo-counter:done .

# Запуск докер-контейнера
docker run -d -p 80:3000 -v data:/app/data --rm --name counter warpion/itmo-counter:done

# Pull докер-образа
docker pull warpion/itmo-counter:done
