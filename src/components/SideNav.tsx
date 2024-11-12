import { VStack, Link, SkeletonText } from '@chakra-ui/react';
import { Category } from '../types';
import { Heading } from '@chakra-ui/react';
import { primary } from "../assets/colors";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  onReset: () => void;
}

const selectedProps = {
  bgColor: primary,
  color: "white",
  fontWeight: "bold",
}

function SideNav({ loading, categories, selectedCategory, setSelectedCategory, onReset }: Props) {
  return (
    loading
      ? <SkeletonText mt='1' noOfLines={10} spacing='6' skeletonHeight='2' />
      : <>
        <Heading color={primary} fontSize={12} fontWeight="bold" mb={4}>CATEGORIES</Heading>
        <VStack align='stretch'>
          {categories.map((c) =>
            <Link
              key={c.strCategory}
              borderRadius="md"
              px={[1, 2]}
              py={1}
              _hover={{ textDecoration: "none" }}
              onClick={() => {
                onReset()
                setSelectedCategory(c)
              }}
              {...(selectedCategory.strCategory == c.strCategory) && selectedProps}
            >
              {c.strCategory}
            </Link>
          )}
        </VStack>
      </>
  )
}

export default SideNav