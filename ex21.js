module.exports = function map(list, iterateCb)
{
    let arr = []

    for(const [key, value] of Object.entries(list))
    {
        let res = iterateCb(value)
        arr.push(res)
    }
    return arr;
}
