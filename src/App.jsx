import { useState, useEffect } from "react"
import { generateString } from "./lib/functions.js"

import IconCheck from "./components/IconCheck.jsx"
import IconArrowRight from "./components/IconArrowRight.jsx"
import RenderPassword from "./components/RenderPassword.jsx"
import RenderPasswordStrength from "./components/RenderPasswordStrength.jsx"

export default function App() {
	const [everyValues, setEveryValues] = useState("")
	const [everyValuesArr, setEveryValuesArr] = useState([])
	const [minLengthResult, setMinLengthResult] = useState(10)
	const [password, setPassword] = useState("")

	const handleCheckBoxChange = (e) => {
		const { value, checked } = e.target
		if (checked) {
			setEveryValues(everyValues + value)
		} else if (!checked && everyValues) {
			setEveryValues(everyValues.split(value).join(""))
		}
	}

	useEffect(() => {
		setEveryValuesArr(everyValues.split(""))
	}, [everyValues])

	const handleChangePasswordLength = (e) => {
		setMinLengthResult(e.target.value)
	}

	const submitValues = (e) => {
		e.preventDefault()
		if (everyValues) {
			setPassword(generateString(everyValuesArr, minLengthResult))
		}
	}

	return (
		<div className="flex justify-center items-center w-full h-screen bg-background">
			<div className="text-gains-boro w-[343px] sm:w-[540px]">
				<RenderPassword password={password} />
				<div className="p-4 mt-4 sm:py-8 sm:px-8 sm:mt-6 bg-dark-slate-gray">
					<div className="flex justify-between items-center">
						<span className="font-bold sm:text-lg">Character Length</span>
						<span className="text-2xl font-bold text-pale-green sm:text-[32px]">
							{minLengthResult}
						</span>
					</div>
					<form onSubmit={submitValues}>
						<div className="mt-2 mb-8 h-7 sm:mt-4">
							<input
								name="length"
								type="range"
								min="4"
								max="16"
								value={minLengthResult}
								className="input-range"
								onChange={handleChangePasswordLength}
							/>
						</div>
						<div className="flex flex-col gap-4 w-full sm:gap-5">
							<div className="flex relative items-center">
								<input
									onChange={handleCheckBoxChange}
									name="uppercaseLetters"
									type="checkbox"
									value="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
									className="border-white appearance-none cursor-pointer outline-none checked:text-white peer w-[18px] h-[18px] border-[2px] checked:bg-pale-green checked:border-pale-green"
								/>
								<IconCheck className="absolute font-black pointer-events-none left-[3px] fill-dark-slate-gray peer-checked:fill-deep-black" />
								<span className="ml-5 font-bold sm:ml-6 sm:text-lg">
									Include Uppercase Letters
								</span>
							</div>
							<div className="flex relative items-center">
								<input
									onChange={handleCheckBoxChange}
									name="lowercaseLetters"
									type="checkbox"
									value="abcdefghijklmnopqrstuvwxyz"
									className="border-white appearance-none cursor-pointer outline-none checked:text-white peer w-[18px] h-[18px] border-[2px] checked:bg-pale-green checked:border-pale-green"
								/>
								<IconCheck className="absolute font-black pointer-events-none left-[3px] fill-dark-slate-gray peer-checked:fill-deep-black" />
								<span className="ml-5 font-bold sm:ml-6 sm:text-lg">
									Include Lowercase Letters
								</span>
							</div>
							<div className="flex relative items-center">
								<input
									onChange={handleCheckBoxChange}
									name="numbers"
									type="checkbox"
									value="0123456789"
									className="border-white appearance-none cursor-pointer outline-none checked:text-white peer w-[18px] h-[18px] border-[2px] checked:bg-pale-green checked:border-pale-green"
								/>
								<IconCheck className="absolute font-black pointer-events-none left-[3px] fill-dark-slate-gray peer-checked:fill-deep-black" />
								<span className="ml-5 font-bold sm:ml-6 sm:text-lg">
									Include Numbers
								</span>
							</div>
							<div className="flex relative items-center mb-8">
								<input
									onChange={handleCheckBoxChange}
									name="symbols"
									type="checkbox"
									value="@$!%*?&"
									className="border-white appearance-none cursor-pointer outline-none checked:text-white peer w-[18px] h-[18px] border-[2px] checked:bg-pale-green checked:border-pale-green"
								/>
								<IconCheck className="absolute font-black pointer-events-none left-[3px] fill-dark-slate-gray peer-checked:fill-deep-black" />
								<span className="ml-5 font-bold sm:ml-6 sm:text-lg">
									Include Symbols
								</span>
							</div>
						</div>
						<RenderPasswordStrength password={password} />
						<button className="flex justify-center items-center w-full h-14 font-bold uppercase border-2 transition-colors sm:h-16 border-pale-green bg-pale-green text-dark-slate-gray hover:fill-pale-green hover:bg-dark-slate-gray hover:text-pale-green">
							<h1 className="mr-4 sm:text-lg">generate</h1>
							<IconArrowRight className="fill-inherit" />
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
