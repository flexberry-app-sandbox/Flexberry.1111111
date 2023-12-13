docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 111111-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 111111-java/app ../../..
