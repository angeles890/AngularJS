using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CheckList.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CheckListModel",
                columns: table => new
                {
                    PkTaskId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(type: "nvarchar(500)", nullable: true),
                    Day = table.Column<DateTime>(type: "DateTime", nullable: false),
                    Reminder = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CheckListModel", x => x.PkTaskId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CheckListModel");
        }
    }
}
