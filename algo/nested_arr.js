// use recursive to flatten a nested array

function steamrollArray(arr) {
    const result = []

    arr.forEach(ele => {
        if (Array.isArray(ele)) {
            result.push(...steamrollArray(ele))
        } else {
            result.push(ele)
        }
    })

    return result
}

steamrollArray([1, [2], [3, [[4]]]]);