import { useState, useEffect } from "react"
import DisplayGraph from "./DisplayGraph.jsx"

export default function RenderPasswordStrength({ password }) {
	const [strengthValue, setStrengthValue] = useState("")
	let strongPassword = new RegExp(
		"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])(?=.*[^A-Za-z0-9])(?=.{8,})"
	)
	let mediumPassword = new RegExp(
		"((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
	)
	let weakPassword = new RegExp("((?=.*[a-z])(?=.{4,}))")

	useEffect(() => {
		if (!password) {
			setStrengthValue("")
		} else if (strongPassword.test(password)) {
			setStrengthValue("strong")
		} else if (mediumPassword.test(password)) {
			setStrengthValue("medium")
		} else if (weakPassword.test(password)) {
			setStrengthValue("weak")
		} else {
			setStrengthValue("too weak!")
		}
	}, [password])

	return (
		<>
			<div className="flex justify-between items-center px-4 mb-4 h-14 uppercase sm:mb-8 sm:h-16 bg-deep-black">
				<h1 className="font-bold sm:text-lg text-light-slate-gray">strength</h1>
				<div className="flex gap-3 items-center">
					<h1 className="text-lg font-bold sm:text-2xl">{strengthValue}</h1>
					<DisplayGraph strengthValue={strengthValue} />
				</div>
			</div>
		</>
	)
}
