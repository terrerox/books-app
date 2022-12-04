import { useState, useEffect } from 'react'
import { 
  Text,
  Flex,
  Button,
  Spinner,
  useToast,
  Container,
  useDisclosure
} from "@chakra-ui/react";
import bookService from './services/bookService';
import { BooksTable } from "./components/BooksTable"
import { BookModal } from "./components/BookModal"


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [books, setBooks] = useState([])
  const [book, setBook] = useState([])
  const toast = useToast()

  useEffect(() => {
    bookService.getAll()
      .then(setBooks)
  }, [])

  const deleteBook = (id) => {
    bookService.delete(id)
        .then(() => {
            setBooks(books => books.filter(book => book.id !== id))
            toast({
                title: "Deleted",
                description: "Book deleted successfully",
                status: "success",
                duration: 90000000,
                isClosable: true,
            })
        })
  }

  const updateBook = (body) => {
    bookService.update(book.id, body)
        .then(res => {
            if(res.status === 400) {
              return toast({
                title: 'Error',
                description: res.title,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            }
            setBooks(books => { 
              const allButUpdatedBook = books.filter(b => b.id !== book.id)
              return [res, ...allButUpdatedBook]
            })
            toast({
                title: "Updated",
                description: "Book updated successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        })
  }

  const createBook = (book) => {
    bookService.create(book)
        .then(res => {
            if(res.status === 400) {
              return toast({
                title: 'Error',
                description: res.title,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            }
            setBooks(books => [res, ...books])
            toast({
                title: "Added",
                description: "Added updated successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        })
  }

  const openModal = () => {
    setBook({})
    onOpen()
  }

  return (
    <Container maxW='90%'>
      <Flex alignItems="center" justifyContent="space-between">
          <Text my="2" fontSize="2xl" id="title" fontFamily="monospace" fontWeight="bold">
              Books
          </Text>
          <Button colorScheme='teal' id="newButton" variant='outline' onClick={openModal}>
              New
          </Button>
      </Flex>
      <BookModal
          book={book}
          createBook={createBook}
          updateBook={updateBook}
          isOpen={isOpen}
          onClose={onClose}
      />
      {
        !books && <Spinner /> 
      }
      {
        books && (
          <BooksTable 
            books={books}
            setBook={setBook}
            deleteBook={deleteBook}
            onOpen={onOpen}
          />
        )
      }
    </Container>
  )
}

export default App
