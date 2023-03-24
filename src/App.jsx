import { useState } from "react"
import { generateString } from "./lib/functions.js"
import IconCopy from "./components/IconCopy.jsx"
import IconArrowRight from "./components/IconArrowRight.jsx"

export default function App() {
	const everyValues =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const everyValuesArr = everyValues.split("")
	const [minLengthResult, setMinLengthResult] = useState(10)
	const [password, setPassword] = useState("")

	const handleChangeInputs = (e) => {
		setMinLengthResult(e.target.value)
	}

	const submitValues = (e) => {
		e.preventDefault()
		setPassword(generateString(everyValuesArr, minLengthResult))
	}

	return (
		<div className="flex justify-center items-center w-full h-screen bg-background">
			<div className="text-gains-boro w-[343px]">
				<h1 className="font-bold text-center text-light-slate-gray">
					Password Generator
				</h1>
				<div className="flex justify-between items-center p-4 mt-4 h-16 bg-dark-slate-gray">
					<span className="text-2xl font-bold">{password}</span>
					<button>
						<IconCopy />
					</button>
				</div>
				<div className="p-4 mt-4 bg-dark-slate-gray">
					<div className="flex justify-between items-center">
						<span className="font-bold">Character Length</span>
						<span className="text-2xl font-bold text-pale-green">
							{minLengthResult}
						</span>
					</div>
					<form onSubmit={submitValues}>
						<div>
							<input
								name="length"
								type="range"
								min="1"
								max="20"
								onChange={handleChangeInputs}
							/>
						</div>
						<div>
							<input name="uppercase" type="checkbox" />
							<span className="ml-5 font-bold">Include Uppercase Letters</span>
						</div>
						<div>
							<input name="lowercase" type="checkbox" />
							<span className="ml-5 font-bold">Include Lowercase Letters</span>
						</div>
						<div>
							<input name="numbers" type="checkbox" />
							<span className="ml-5 font-bold">Include Numbers</span>
						</div>
						<div className="mb-8">
							<input name="symbols" type="checkbox" />
							<span className="ml-5 font-bold">Include Symbols</span>
						</div>
						<div className="flex justify-between items-center px-4 mb-4 h-14 uppercase bg-deep-black">
							<h1 className="text-lg font-bold text-light-slate-gray">
								strength
							</h1>
							<div className="text-lg font-bold">medium</div>
						</div>
						<button className="flex justify-center items-center w-full h-14 font-bold uppercase bg-pale-green text-dark-slate-gray">
							<h1 className="mr-4">generate</h1>
							<IconArrowRight className="fill-dark-slate-gray" />
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
