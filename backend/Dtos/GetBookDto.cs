using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos
{
    public class GetBookDto
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int PageCount { get; set; }
        public string? Excerpt { get; set; }
        public DateTime PublishDate { get; set; }
    }
}