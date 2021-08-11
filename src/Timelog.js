function summaryFromTimelog(timestamps) {
    let seconds = timestamps.map(ms => ms / 1000)
    let total = seconds[seconds.length - 1] - seconds[0]
    let noCycles = (seconds.length - 1) / 3
    let inBlue = 0, inRed = 0, inGreen = 0;
    for (let i = 0; i < noCycles; i++) {
        const offset = i * 3;
        let delta = add => seconds[offset + add + 1] - seconds[offset + add]
        inBlue = inBlue + delta(0)
        inRed = inRed + delta(1)
        inGreen = inGreen + delta(2)
    }
    let r = Math.round
    let oneDecimal = v => r(v*10) / 10
    let percent = s => r(s * 100 / total)
    return {
        totalTime: oneDecimal(total),
        timeInBlue: oneDecimal(inBlue),
        timeInRed: oneDecimal(inRed),
        timeInGreen: oneDecimal(inGreen),
        noCycles: noCycles,
        percentBlue: percent(inBlue),
        percentRed: percent(inRed),
        percentGreen: percent(inGreen)
    }
}

export default {summaryFromTimelog}
