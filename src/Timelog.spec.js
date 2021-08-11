import Timelog from './Timelog.js'

describe('summaryData', () => {
  it('even session with 1 cycle', () => {
    let summary = Timelog.summaryFromTimelog(
        [0, 3000.3, 6000.1, 8999.9])
    expect(summary.totalTime).toBe(9)
    expect(summary.noCycles).toBe(1)
    expect(summary.timeInBlue).toBe(3)
    expect(summary.timeInRed).toBe(3)
    expect(summary.timeInGreen).toBe(3)
    expect(summary.percentBlue).toBe(33)
    expect(summary.percentRed).toBe(33)
    expect(summary.percentGreen).toBe(33)
  })
  it('even session with 2 cycles', () => {
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
  it('uneven session with 1 cycle', () => {
    // 2 seconds in blue, 1 seconds in red and green
    let summary = Timelog.summaryFromTimelog(
        [0, 2000, 3000, 4000])
    expect(summary.totalTime).toBe(4)
    expect(summary.noCycles).toBe(1)
    expect(summary.timeInBlue).toBe(2)
    expect(summary.timeInRed).toBe(1)
    expect(summary.timeInGreen).toBe(1)
    expect(summary.percentBlue).toBe(50)
    expect(summary.percentRed).toBe(25)
    expect(summary.percentGreen).toBe(25)
  })
  it("handles regression data well", () => {
    let summary = Timelog.summaryFromTimelog(
        [ 1628697931346, 1628697933186, 1628697934827, 1628697935658 ])
    expect(summary.totalTime).toBe(4)
    expect(summary.noCycles).toBe(1)
    expect(summary.timeInBlue).toBe(2)
    expect(summary.timeInRed).toBe(2)
    expect(summary.timeInGreen).toBe(1)
    expect(summary.percentBlue).toBe(43)
    expect(summary.percentRed).toBe(38)
    expect(summary.percentGreen).toBe(19)
  })
})
