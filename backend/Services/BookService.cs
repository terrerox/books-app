using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using backend.Config;
using backend.Dtos;

namespace backend.Services
{
    public class BookService : IBookService
    {
        private readonly IHttpClientHelper _httpClientHelper;
        public BookService(IHttpClientHelper httpClientHelper)
        {
            _httpClientHelper = httpClientHelper;
        }
        public async Task<GetBookDto> AddBook(AddBookDto newBook)
        {
            GetBookDto getBookDto = new GetBookDto();
            try  
            {  
                HttpClient client = _httpClientHelper.getInstance();
                HttpResponseMessage response = await client.PostAsJsonAsync("https://fakerestapi.azurewebsites.net/api/v1/Books", newBook);
                Console.WriteLine(response);

                if (response.IsSuccessStatusCode)
                {
                    getBookDto = await response.Content.ReadAsAsync<GetBookDto>();
                    Console.WriteLine(getBookDto);
                }
            }
            catch(Exception error) {
                Console.WriteLine(error);
            }        

            return getBookDto;    
        }

        public async Task DeleteBook(int id)
        {
            try  
            {   
                HttpClient client = _httpClientHelper.getInstance();
                HttpResponseMessage response = await client.DeleteAsync("https://fakerestapi.azurewebsites.net/api/v1/Books/" + id);
                Console.WriteLine(response);
            }
            catch(Exception error) {
                Console.WriteLine(error);
            }         
        }

        public async Task<List<GetBookDto>> GetAllBooks()
        {
            List<GetBookDto> bookList = new List<GetBookDto>();
            try  
            {  
                HttpClient client = _httpClientHelper.getInstance();
                HttpResponseMessage response = await client.GetAsync("https://fakerestapi.azurewebsites.net/api/v1/Books");
                Console.WriteLine(response);

                if (response.IsSuccessStatusCode)
                {
                    bookList = await response.Content.ReadAsAsync<List<GetBookDto>>();
                    Console.WriteLine(bookList);
                }
            }
            catch(Exception error) {
                Console.WriteLine(error);
            }        

            return bookList;                
        }

        public async Task<GetBookDto> GetBookById(int id)
        {
            GetBookDto bookList = new GetBookDto();
            try  
            {  
                HttpClient client = _httpClientHelper.getInstance();
                HttpResponseMessage response = await client.GetAsync("https://fakerestapi.azurewebsites.net/api/v1/Books/" + id);
                Console.WriteLine(response);

                if (response.IsSuccessStatusCode)
                {
                    bookList = await response.Content.ReadAsAsync<GetBookDto>();
                }
            }
            catch(Exception error) {
                Console.WriteLine(error);
            }        

            return bookList;  
        }

        public async Task<GetBookDto> UpdateBook(int id, UpdateBookDto updatedBook)
        {
            GetBookDto getBookDto = new GetBookDto();
            try  
            {  
                HttpClient client = _httpClientHelper.getInstance();
                HttpResponseMessage response = await client.PutAsJsonAsync("https://fakerestapi.azurewebsites.net/api/v1/Books/" + id, updatedBook);
                Console.WriteLine(response);

                if (response.IsSuccessStatusCode)
                {
                    getBookDto = await response.Content.ReadAsAsync<GetBookDto>();
                    Console.WriteLine(getBookDto);
                }
            }
            catch(Exception error) {
                Console.WriteLine(error);
            }        

            return getBookDto;  
        }
    }
}