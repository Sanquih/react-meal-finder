import { Button, Container, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoMdSearch } from 'react-icons/io'
import { darkPrimary, darkSecondary, secondary } from '../assets/colors'
import { useForm } from 'react-hook-form'
import { SearchForm } from '../types'
import { useEffect } from 'react'

type Props = {
  onSubmit: (data: SearchForm) => void;
  resetTrigger: boolean;
}

function Header({ onSubmit, resetTrigger }: Props) {
  const { register, formState, handleSubmit, reset } = useForm<SearchForm>();
  useEffect(() => {
    reset();
  }, [resetTrigger]);
  return (
    <Container mt="2.5" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'><IoMdSearch /></InputLeftElement>
          <Input
            borderRightRadius={0}
            isInvalid={!!formState.errors.search}
            focusBorderColor={!!formState.errors.search ? darkPrimary : darkSecondary}
            {...register('search', { required: true })}
            bg="white"
            type='text'
            placeholder='Try "chicken" or "pork"...' />
          <Button borderLeftRadius={0} type='submit' bgColor={secondary}>Search</Button>
        </InputGroup>
      </form>
    </Container>
  )
}

export default Header