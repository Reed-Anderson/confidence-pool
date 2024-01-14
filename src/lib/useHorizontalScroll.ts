"use client"
import { useCallback, useEffect, useRef } from "react"

/**
 * @description
 * Hook to enable horizontal scrolling via mouse wheel on a container.
 * @example
 * const containerRef = useHorizontalScroll()
 * return <div ref={containerRef}>...</div>
 */
export const useHorizontalScroll = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	const handleWheelScroll = useCallback((e: WheelEvent) => {
		if (e.deltaY !== 0) {
			e.preventDefault()
			e.stopPropagation()
			if (containerRef?.current) {
				containerRef.current.scrollLeft += e.deltaY / 2
			}
		}
	}, [])

	useEffect(() => {
		const container = containerRef.current
		if (container) {
			container.addEventListener("wheel", handleWheelScroll, {
				passive: false
			})
		}
		return () => {
			if (container) {
				container.removeEventListener("wheel", handleWheelScroll)
			}
		}
	}, [handleWheelScroll])

	return containerRef
}
