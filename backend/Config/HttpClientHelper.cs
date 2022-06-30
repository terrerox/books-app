using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend.Config
{
    public class HttpClientHelper : IHttpClientHelper
    {

        public HttpClient getInstance()
        {
            HttpClient client = new HttpClient();  
            return client;
        }
    }
}