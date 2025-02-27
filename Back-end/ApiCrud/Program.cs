using ApiCrud.Data;
using ApiCrud.Models;
using Microsoft.EntityFrameworkCore;
/*using Npgsql;
*/
/*    string connectionString = "Host=culturally-evolving-bengal.data-1.use1.tembo.io;Database=postgres;Username=postgres;Password=FEbCIaNqN1jz9Czc";

    using (var connection = new NpgsqlConnection(connectionString))
    {
        try
        {
            connection.Open();
            Console.WriteLine("Conexão com PostgreSQL bem-sucedida!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Erro ao conectar: {ex.Message}");
        }
}*/



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connectionString = builder.Configuration.GetConnectionString("DataBase");

Console.WriteLine($"Usando a conexão: {connectionString}");

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DataBase")));



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IUserRepository, UserRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
