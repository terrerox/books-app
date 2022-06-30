using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos;

namespace backend.Services
{
    public interface IBookService
    {
        Task<List<GetBookDto>> GetAllBooks();
        Task<GetBookDto> GetBookById(int id);
        Task<GetBookDto> AddBook(AddBookDto newBook);
        Task<GetBookDto> UpdateBook(int id, UpdateBookDto updatedBook);
        Task DeleteBook(int id); 
    }
}