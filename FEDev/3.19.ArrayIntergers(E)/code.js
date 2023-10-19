function rearrangeArray(array) {
    const arrayCopy = array.slice();
    const positiveArray = arrayCopy.filter((x) => x >= 0).sort((a, b) => a - b);
    let positiveIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            array[i] = positiveArray[positiveIndex++];
        }
    }
    return array;
}
const array = [8, -2, 3, -4, 5];
document.querySelector('.array-old').innerText = JSON.stringify(array);
const rearrangedArray = rearrangeArray(array);
document.querySelector('.array-new').innerText = JSON.stringify(rearrangedArray);
