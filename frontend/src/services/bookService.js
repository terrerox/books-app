import { httpClient, FETCH_OPTIONS } from "../helpers"

const bookService = {}

bookService.getAll = () => {
    return httpClient('/books')
        .then(res => res.json())
}

bookService.getById = (id) => {
    return httpClient(`/books/${id}`)
        .then(res => res.json())
}

bookService.create = (body) => {
    return httpClient('/books', FETCH_OPTIONS.POST(body))
        .then(res => res.json())

}

bookService.update = (id, body) => {
    return httpClient(`/books/${id}`, FETCH_OPTIONS.PUT(body))
        .then(res => res.json())
}

bookService.delete = (id) => {
    return httpClient(`/books/${id}`, FETCH_OPTIONS.DELETE())
    .catch(error => error)
}

export default bookService 