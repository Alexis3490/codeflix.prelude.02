module.exports=function invert(obj)
{
    let newObj = {}
    let arr = Object.entries(obj)
    for (const [key, value] of arr)
    {
        newObj[value] = key
    }
    return newObj
}