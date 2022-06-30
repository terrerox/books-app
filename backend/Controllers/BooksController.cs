using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BooksController(IBookService BookService)
        {
            _bookService = BookService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _bookService.GetAllBooks());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await _bookService.GetBookById(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddBook(AddBookDto newBook)
        {
            return Ok(await _bookService.AddBook(newBook));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(int id, UpdateBookDto updatedBook)
        {
            GetBookDto response = await _bookService.UpdateBook(id, updatedBook);
            if (response == null)         
                return NotFound(response);
            
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {   
            await _bookService.DeleteBook(id);
            return Ok();
        }
    }
}