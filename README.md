# Ambiente de estudo NodeJS
> Executando Hello World com o Docker utilizando NodeJS

### 🚀 Execução

1ª Dentro da pastas app-hello-js
    
    - hello: Namespace

    - app-hello: repositorio
    
    - v1: Tag da imagem

```console
docker build -t hello/app-hello:v1 . 
```

2ª Execute o container

```console
docker container run -d -p 8080:8080 hello/app-hello:v1 
```

3ª Verifique se o container está sendo executado

```console
docker container ls
```

4ª Acesse via web

localhost:8080


