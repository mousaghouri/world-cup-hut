using Microsoft.EntityFrameworkCore;
using WorldCupHut.Domain.Entities;

namespace WorldCupHut.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Prediction> Predictions { get; set; }
    }
}