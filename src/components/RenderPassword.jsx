import { useState } from "react"
import IconCopy from "./IconCopy.jsx"

export default function RenderPassword({ password }) {
	const [isItCopied, setIsItCopied] = useState("")
	const copyContent = async () => {
		if (password) {
			await navigator.clipboard.writeText(password)
			setIsItCopied("copied")
			setTimeout(() => {
				setIsItCopied("")
			}, 2000)
		}
	}
	return (
		<>
			<h1 className="font-bold text-center text-light-slate-gray">
				Password Generator
			</h1>
			<div className="flex justify-between items-center px-4 mt-4 h-16 sm:px-8 sm:h-20 bg-dark-slate-gray">
				{password ? (
					<span className="text-2xl font-bold">{password}</span>
				) : (
					<span className="text-2xl font-bold opacity-25 sm:text-[32px]">
						P4$5W0rD!
					</span>
				)}
				<div className="flex gap-4 justify-center items-center">
					<span className="hidden text-lg font-bold uppercase sm:block text-pale-green">
						{isItCopied}
					</span>
					<button onClick={copyContent}>
						<IconCopy className="fill-pale-green hover:fill-[#ffffff] transition-colors" />
					</button>
				</div>
			</div>
		</>
	)
}
