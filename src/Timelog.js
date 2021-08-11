function summaryFromTimelog(timestamps) {
    let seconds = timestamps.map(ms => ms / 1000)
    let total = seconds[seconds.length - 1] - seconds[0]
    let noCycles = (seconds.length - 1) / 3
    var inBlue = 0, inRed = 0, inGreen = 0
    for (var i = 0; i < noCycles; i++) {
        var offset = i * 3
        inBlue = inBlue + seconds[offset + 1] - seconds[offset]
        inRed = inRed + seconds[offset + 2] - seconds[offset + 1]
        inGreen = inGreen + seconds[offset + 3] - seconds[offset + 2]
    }
    console.log(seconds)
    return {
        totalTime: total,
        timeInBlue: inBlue,
        timeInRed: inRed,
        timeInGreen: inGreen,
        noCycles: noCycles,
        percentBlue: 33,
        percentRed: 33,
        percentGreen: 33
    }
}


export default {summaryFromTimelog};
