export let getRandomPosition = () => {
    let arr = []
    let row = Math.round(Math.random() * 7)
    let col = Math.round(Math.random() * 7)
    arr.push(row)
    arr.push(col)
    return arr
}