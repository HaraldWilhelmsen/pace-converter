const NumberInput = ({ val, setVal, dv }: { val: number, setVal: (val: number) => void, dv: string }) => (
    <>
        <label htmlFor={"input" + dv}>{dv}</label> {" "}
        <input className="paceInputBox" id={"input" + dv} type="number" value={val} onChange={(e) => setVal(parseInt(e.target.value))} />
    </>
)

export { NumberInput };