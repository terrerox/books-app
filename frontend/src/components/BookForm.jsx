import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Text,
    SimpleGrid,
    Textarea,
    useToast
} from '@chakra-ui/react'


export const BookForm = ({formValues, handleInputChange}) => {

    const { title, description, pageCount, excerpt, publishDate } = formValues

    return (
        <form>
        <FormControl>
          <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
              <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                      isRequired
                      type="text" 
                      name="title" 
                      placeholder="title" 
                      value={title}
                      onChange={handleInputChange}
                  />
              </FormControl>
              <FormControl>
                  <FormLabel>Page Count</FormLabel>
                  <Input
                      isRequired
                      type="number" 
                      name="pageCount" 
                      placeholder="pageCount" 
                      value={pageCount}
                      onChange={handleInputChange}
                  />
              </FormControl>
          </SimpleGrid>
          <FormLabel>Description</FormLabel>
          <Textarea
                value={description}
                name="description"
                onChange={handleInputChange}
                placeholder='Description'
                size='sm'
           />
          <FormLabel>Excerpt</FormLabel>
          <Textarea
                value={excerpt}
                name="excerpt"
                onChange={handleInputChange}
                placeholder='Excerpt'
                size='sm'
            />
           <FormLabel>Publish Date</FormLabel>
           <Input
                type="date"
                value={publishDate}
                name="publishDate"
                onChange={handleInputChange}
                placeholder='Publish Date'
            />
        </FormControl>
      </form>
    )
}
  