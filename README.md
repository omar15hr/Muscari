# Descripción



## Correr en dev


1. Clonar el repositorio.
## En el nombre_rama colocar nombre y apellido ##
2. Usar```git clone -b nombre_rama https://github.com/omar15hr/Muscari.git```
3. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
4. Instalar dependencias ```npm install```
5. Levantar la base de datos ```docker compose up -d```
6. Correr las migraciones de Primsa ```npx prisma migrate dev```
7. Ejecutar seed ```npm run seed```
8. Correr el proyecto ```npm run dev```
9. Limpiar el localStorage del navegador.




## Correr en prod