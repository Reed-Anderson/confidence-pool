import { ImageCard } from "@components/imageCard"
import { FaPlus } from "react-icons/fa"

export const AddPoolButton = () => {
  return (
    <ImageCard
      faIcon={<FaPlus />}
      tabIndex={-1}
      title="Add Pool"
    />
  )
}
