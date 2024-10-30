import { Container, SkeletonText } from "@chakra-ui/react"

type Props = {}

function RecipeModalSkeleton({ }: Props) {
    return (
        <Container>
            <SkeletonText mb={4} mt={4} noOfLines={1} skeletonHeight={8} />
            <SkeletonText mb={4} noOfLines={1} skeletonHeight={220} />
            <SkeletonText mb={4} noOfLines={5} spacing={4} />
        </Container>
    )
}

export default RecipeModalSkeleton