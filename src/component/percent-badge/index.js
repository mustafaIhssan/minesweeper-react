import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'

export function PercentBadge({ percent }) {
	const isPercentPositive = Number(percent) >= 0

	return isPercentPositive ? (
		<div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-0">
			<ArrowSmUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" />
			{percent}%
		</div>
	) : (
		<div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
			<ArrowSmDownIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" />
			{percent}%
		</div>
	)
}
