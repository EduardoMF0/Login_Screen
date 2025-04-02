#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

# Usa a imagem do .NET Runtime para rodar a API
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Usa a imagem do .NET SDK para compilar a aplicação
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copia o arquivo do projeto e restaura as dependências
COPY ["APICrud/APICrud.csproj", "APICrud/"]
WORKDIR "/src/APICrud"
RUN dotnet restore

# Copia o código-fonte e compila o projeto
COPY . .
RUN dotnet build -c $BUILD_CONFIGURATION -o /app/build

# Publica os arquivos compilados
FROM build AS publish
RUN dotnet publish -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Usa a imagem do runtime para rodar a API
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "APICrud.dll"]

