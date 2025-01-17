import { Skeleton, Text } from "@chakra-ui/react"
import DataBlock from "components/common/DataBlock"
import useKycDAOContracts from "components/create-guild/Requirements/components/KycDAOFormCard/hooks/useKycDAOContracts"
import { Requirement } from "types"
import BlockExplorerUrl from "./common/BlockExplorerUrl"
import RequirementCard from "./common/RequirementCard"

type Props = {
  requirement: Requirement
}

const KycDAORequirementCard = ({ requirement }: Props): JSX.Element => {
  const { isLoading, kycDAOContracts } = useKycDAOContracts()

  const contractData = kycDAOContracts?.find(
    (c) => c.value?.toLowerCase() === requirement.address.toLowerCase()
  )

  return (
    <RequirementCard
      requirement={requirement}
      image={
        <Text as="span" fontWeight="bold" fontSize="xx-small">
          KYC
        </Text>
      }
      footer={<BlockExplorerUrl requirement={requirement} />}
    >
      <Text as="span">{`Get verified as `}</Text>
      <Skeleton as="span" isLoaded={!isLoading}>
        {isLoading ? (
          "Loading..."
        ) : (
          <DataBlock>{contractData?.label || requirement.address}</DataBlock>
        )}
      </Skeleton>
    </RequirementCard>
  )
}

export default KycDAORequirementCard
