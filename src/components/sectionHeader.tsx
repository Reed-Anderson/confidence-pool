interface SectionHeaderProps {
	title: string
}

const SectionHeader = (props: SectionHeaderProps) => {
	return <h2 className="py-1 font-semibold text-sm">{props.title}</h2>
}

export default SectionHeader
