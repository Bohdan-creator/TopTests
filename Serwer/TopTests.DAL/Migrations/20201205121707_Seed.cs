﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TopTests.DAL.Migrations
{
    public partial class Seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Files",
                columns: new[] { "Id", "FileContent", "FileName" },
                values: new object[] { 1, new byte[] { 78, 117, 109, 98, 101, 114, 79, 102, 81, 117, 101, 115, 116, 105, 111, 110, 44, 81, 117, 101, 115, 116, 105, 111, 110, 44, 79, 112, 116, 105, 111, 110, 65, 44, 79, 112, 116, 105, 111, 110, 66, 44, 79, 112, 116, 105, 111, 110, 67, 44, 65, 110, 115, 119, 101, 114, 44, 67, 111, 109, 112, 108, 101, 120, 105, 116, 121, 13, 10, 49, 44, 87, 104, 97, 116, 32, 97, 109, 32, 73, 32, 108, 105, 107, 101, 44, 116, 101, 110, 110, 105, 115, 44, 98, 97, 115, 107, 101, 116, 98, 97, 108, 108, 44, 102, 111, 111, 116, 98, 97, 108, 108, 44, 98, 97, 115, 107, 101, 116, 98, 97, 108, 108, 44, 48, 13, 10, 50, 44, 73, 32, 97, 109, 32, 97, 102, 114, 97, 105, 100, 44, 109, 111, 116, 104, 101, 114, 44, 102, 97, 116, 104, 101, 114, 44, 103, 105, 114, 108, 102, 114, 105, 101, 110, 100, 44, 109, 111, 116, 104, 101, 114, 44, 48, 13, 10, 51, 44, 87, 104, 97, 116, 32, 73, 32, 108, 105, 107, 101, 32, 116, 111, 32, 100, 111, 32, 44, 119, 97, 116, 104, 32, 84, 86, 44, 100, 114, 105, 110, 107, 32, 99, 111, 102, 102, 101, 44, 110, 111, 116, 104, 105, 110, 103, 44, 100, 114, 105, 110, 107, 32, 99, 111, 102, 102, 101, 44, 49, 13, 10 }, "Test" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Files",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
