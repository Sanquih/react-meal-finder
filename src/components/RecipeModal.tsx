import { Button, Modal, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import RecipeModalSkeleton from './skeletons/RecipeModalSkeleton';
import { MealDetails } from '../types';
import RecipeModalContent from './RecipeModalContent';
import { lightSecondary, primary } from '../assets/colors';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  data: MealDetails | undefined;
}


function RecipeModal({ isOpen, onClose, loading, data }: Props) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={lightSecondary}>
        {loading
          ? <RecipeModalSkeleton />
          : data && <RecipeModalContent data={data} />
        }
        <ModalFooter>
          <Button color="white" bg={primary} mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RecipeModal