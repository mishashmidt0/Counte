type CounterPropsType = {
    startValue: number
    maxValue: number
    value: number
    addValue: () => void
    resetValue: () => void
    instDataValue: (startValue: number, maxValue: number) => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div>

        </div>
    )
}
