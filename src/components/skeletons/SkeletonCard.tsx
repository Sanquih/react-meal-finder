import { Card, CardBody, SkeletonText } from "@chakra-ui/react"

const SkeletonCard = () => {
    return (
        <Card boxShadow="lg">
            <CardBody>
                <SkeletonText mt={1} noOfLines={1} skeletonHeight={220} />
                <SkeletonText mt={4} noOfLines={2} skeletonHeight={2} spacing={4} />
            </CardBody>
        </Card>
    )
}

export default SkeletonCard