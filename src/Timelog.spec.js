import Timelog from './Timelog.js'

describe('summaryData', () => {
  it('session with 1 cycle', () => {
    let summary = Timelog.summaryFromTimelog(
        [0, 3000, 6000, 9000])
    expect(summary.totalTime).toBe(9)
    expect(summary.noCycles).toBe(1)
    expect(summary.timeInBlue).toBe(3)
    expect(summary.timeInRed).toBe(3)
    expect(summary.timeInGreen).toBe(3)
    expect(summary.percentBlue).toBe(33)
    expect(summary.percentRed).toBe(33)
    expect(summary.percentGreen).toBe(33)
  })
  it('session with 2 cycles', () => {
    let summary = Timelog.summaryFromTimelog(
        [0, 3000, 6000, 9000, 12000, 15000, 18000])
    expect(summary.totalTime).toBe(18)
    expect(summary.noCycles).toBe(2)
    expect(summary.timeInBlue).toBe(6)
    expect(summary.timeInRed).toBe(6)
    expect(summary.timeInGreen).toBe(6)
    expect(summary.percentBlue).toBe(33)
    expect(summary.percentRed).toBe(33)
    expect(summary.percentGreen).toBe(33)
  })
})
