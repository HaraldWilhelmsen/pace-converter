import { useState } from "react";
import { NumberInput } from "../common";

const Targets = () => {
    return (
        <>
            <h1>Targets</h1>
            <section>
                <h1>Fixed</h1>
                <p>Half marathon:</p>
                <MinAndSec time={2} />
            </section>
            <br />
            <InputTime />
        </>

    )
}

export default Targets;

const InputTime = () => {
    const [time, setTime] = useState<{ hour: number, min: number }>({
        hour: 0, min: 0
    })

    return (
        <>
            <NumberInput val={time.hour} setVal={(val: number) => setTime(p => ({ ...p, hour: val }))} dv="hours" />
            <NumberInput val={time.min} setVal={(val: number) => setTime(p => ({ ...p, min: val }))} dv="min" />
            <br />
            <MinAndSec time={(time.hour + time.min / 60)} />
        </>

    )
}


const MinAndSec = ({ time }: { time: number }) => {
    const kmph = 21.0975 / time
    const pace_all = 60 / kmph
    const pace_min = Math.floor(pace_all)
    const pace_sec = Math.round((pace_all - pace_min) * 60)
    return (<>{pace_min}: {pace_sec}</>)
}