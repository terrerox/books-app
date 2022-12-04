import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Flex
} from '@chakra-ui/react'
import {
    FiPenTool,
    FiDelete
} from "react-icons/fi";
import { truncateText } from '../helpers';


export const BooksTable = ({ books, setBook, deleteBook, onOpen }) => {

    const updateAccount = (book) => {
        onOpen()
        setBook(book)
    }


    return (
        <Table variant='striped' colorScheme='teal'>
            <TableCaption id="logger"> 
                Updated 2 minutes ago
            </TableCaption>
            <Thead>
                <Tr>
                    <Th>Title</Th>
                    <Th>Description</Th>
                    <Th>Page count</Th>
                    <Th>Excerpt</Th>
                    <Th>Publish Date</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    books.slice(0, 5).map(book => (
                        <Tr key={book.id}>
                            <Td className='bookTitle'>{book.title}</Td>
                            <Td>{truncateText(book.description)}</Td>
                            <Td>{book.pageCount}</Td>
                            <Td>{truncateText(book.excerpt)}</Td>
                            <Td>{book.publishDate}</Td>
                            <Td>
                                <Flex alignItems="center" justifyContent="space-around">
                                    <Button
                                        id={'botonEditar-' + book.id}
                                        leftIcon={<FiPenTool />}
                                        colorScheme='blue'
                                        variant='solid'
                                        onClick={() => updateAccount(book)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        id={'botonEliminar-' + book.id}
                                        className='deleteButton'
                                        leftIcon={<FiDelete />}
                                        colorScheme='red'
                                        variant='solid'
                                        onClick={() => deleteBook(book.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Flex>
                            </Td>
                        </Tr>
                    ))
                }
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>Title</Th>
                    <Th>Description</Th>
                    <Th>Page count</Th>
                    <Th>Excerpt</Th>
                    <Th>Publish Date</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}