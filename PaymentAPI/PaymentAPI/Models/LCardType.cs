using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Models
{
    public class LCardType
    {
        [Key]
        public int PkCardTypeId { get; set; }
        [Column(TypeName = "nvarchar(25)")]
        public string CardType { get; set; }
    }
}
