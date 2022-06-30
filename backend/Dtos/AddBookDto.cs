using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos
{
    public class AddBookDto
    {
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
        [Required]
        public int PageCount { get; set; }
        [Required]
        public string? Excerpt { get; set; }
        [Required]
        public DateTime PublishDate { get; set; }

    }
}