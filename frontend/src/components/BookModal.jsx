import React, { useState, useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast
} from '@chakra-ui/react'
import { BookForm } from './BookForm'
import { useForm } from '../hooks/useForm'

export const BookModal = ({ book, createBook, updateBook, isOpen, onClose }) => {
    const toast = useToast()
    
    const [formValues, handleInputChange, setValues] = useForm({
        title: "",
        description: "",
        pageCount: 0,
        excerpt: "",
        publishDate: ""
    })

    useEffect(() => {
        setValues({
            title: book.title || "",
            description: book.description || "",
            pageCount: book.pageCount || 0,
            excerpt: book.excerpt || "",
            publishDate: book.publishDate || ""
        })
    }, [book])

    const { title, description, pageCount, excerpt, publishDate } = formValues


    const handleSubmit = async e => {
        e.preventDefault()
        if (title === "" || description === "" || excerpt === "" || publishDate === "" || pageCount === 0) {
            return toast({
                title: "Error",
                description: "Please, complete all the inputs",
                status: "error",
                duration: 90000000,
                isClosable: true,
            })
        }

        if (book.id) {
            return updateBook(formValues)
        } 

        createBook(formValues)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    { book.id ? 'Update book' : 'Create book' }
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <BookForm
                        formValues={formValues}
                        handleInputChange={handleInputChange}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cerrar
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        id="enviarForm"
                        colorScheme='teal'
                    >
                        { book.id ? 'Update book' : 'Create book' }
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}