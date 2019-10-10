module.exports = function without(arr, ...values) {
    let arr1 = []
    for(const v of arr)
    {
        if(!values.includes(v))
        {
            arr1.push(v);
        }
    }
    return arr1
}