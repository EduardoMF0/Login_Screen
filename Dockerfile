#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

# Usa a imagem base do .NET para rodar a aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Usa o SDK do .NET para compilar a aplicação
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copia o arquivo de projeto e executa restore
COPY ["ApiCrud/ApiCrud.csproj", "./ApiCrud/"]
WORKDIR "/src/ApiCrud"
RUN dotnet restore

# Copia todo o código-fonte e compila o projeto
COPY . .
RUN dotnet build -c $BUILD_CONFIGURATION --no-self-contained -o /app/build /p:UseAppHost=false

# Publica os arquivos compilados (corrigindo erro de diretório)
FROM build AS publish
RUN dotnet publish -c $BUILD_CONFIGURATION --no-self-contained -o /app/publish /p:UseAppHost=false

# Usa o runtime do .NET para rodar a API
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ApiCrud.dll"]
