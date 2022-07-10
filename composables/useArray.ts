export default () => {
    let arr = [];
    let arrLen = 40;

    // function to populate the array
    arr = Array.from({length: arrLen}, () => Math.floor(Math.random() * 40));

    // function to randomise the array

    return arr;
}