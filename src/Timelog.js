function summaryFromTimelog(timestamps) {
    let seconds = timestamps.map(ms => ms / 1000)
    let total = seconds[seconds.length - 1] - seconds[0]
    let noCycles = (seconds.length - 1) / 3
    let inBlue = 0, inRed = 0, inGreen = 0;
    for (let i = 0; i < noCycles; i++) {
        const offset = i * 3;
        inBlue = inBlue + seconds[offset + 1] - seconds[offset]
        inRed = inRed + seconds[offset + 2] - seconds[offset + 1]
        inGreen = inGreen + seconds[offset + 3] - seconds[offset + 2]
    }
    let bluePercent = inBlue * 100 / total
    let redPercent = inRed * 100 / total
    let greenPercent = inGreen * 100 / total
    return {
        totalTime: total,
        timeInBlue: inBlue,
        timeInRed: inRed,
        timeInGreen: inGreen,
        noCycles: noCycles,
        percentBlue: Math.round(bluePercent),
        percentRed: Math.round(redPercent),
        percentGreen: Math.round(greenPercent)
    }
}


export default {summaryFromTimelog};
