using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CheckList.Models
{
    public class LTaskType
    {
        [Key]
        public int PkTaskTypeId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string TaskTypeName { get; set; }
    }
}
