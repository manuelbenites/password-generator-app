import TooWeakGraphDiv from "./TooWeakGraphDiv.jsx"
import WeakGraphDiv from "./WeakGraphDiv.jsx"
import MediumGraphDiv from "./MediumGraphDiv.jsx"
import StrongGraphDiv from "./StrongGraphDiv.jsx"
import NonGraphDiv from "./NonGraphDiv.jsx"

export default function DisplayGraph({ strengthValue }) {
	if (strengthValue === "strong") {
		return <StrongGraphDiv />
	}
	if (strengthValue === "medium") {
		return <MediumGraphDiv />
	}
	if (strengthValue === "weak") {
		return <WeakGraphDiv />
	}
	if (strengthValue === "too weak!") {
		return <TooWeakGraphDiv />
	}
	if (strengthValue === "") {
		return <NonGraphDiv />
	}
}
