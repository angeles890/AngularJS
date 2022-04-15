using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { 
        
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
        public DbSet<LCardType> CardTypes { get; set; }
    }
}
