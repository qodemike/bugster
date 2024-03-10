
const to = new Date('2024-02-26')
const from = new Date('2024-02-28')

const days = Math.abs(to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)

console.log(days)