import { useState } from "react";
import { NumberInput } from "../common";


const Converter = () => {
    const [time, setTime] = useState<TimeType>({
        min: 0, sec: 0
    })
    return (
        <>
            <div id="paceConvBox">
                <NumberInput val={time.min} setVal={(val: number) => setTime(p => ({ ...p, min: val }))} dv="min" />
                <NumberInput val={time.sec} setVal={(val: number) => setTime(p => ({ ...p, sec: val }))} dv="sec" />

            </div>
            <br />
            <Converted time={time} />
        </>)
}

export default Converter;

const Converted = ({ time }: { time: TimeType }) => {
    let kmph_inf = 60 / (time.min + time.sec / 60);
    let kmph = kmph_inf === Infinity ? 0 : kmph_inf;

    const CalcTimes = ({ distance, dv }: { distance: number, dv: string }) => (
        <tr>
            <td>{dv}</td>
            <td>{Math.floor(distance / kmph)}</td>
            <td>{Math.floor((distance / kmph - Math.floor(distance / kmph)) * 60)}</td>
        </tr>
    )
    let temp = 10 / kmph - Math.floor(10 / kmph)
    return (
        <>
            <p>km/h = {kmph}</p>
            <p>Predictions:</p>
            <table>
                <tr>
                    <th>Distance</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                </tr>
                <CalcTimes distance={10} dv="10 km" />
                <CalcTimes distance={21.0975} dv="halvmaraton" />
                <CalcTimes distance={42.195} dv="maraton" />
            </table>
        </>
    )
}

interface TimeType {
    min: number;
    sec: number;
}