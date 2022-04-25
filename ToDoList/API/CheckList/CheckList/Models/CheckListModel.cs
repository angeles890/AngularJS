using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace CheckList.Models
{
    public class CheckListModel
    {
        [Key]
        public int PkTaskId { get; set; }
        [Column(TypeName = "nvarchar(500)")]
        public string Text { get; set; }
        [Column(TypeName = "DateTime")]
        public DateTime Day { get; set; }
        [Column(TypeName = "bit")]
        public bool Reminder { get; set; }
        [Column(TypeName = "int")]
        public int? FkTaskTypeId { get; set; }
    }
}
