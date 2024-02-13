
function calculateInputValue() {
    // Trangle Base
    const trangleBase = document.getElementById('trangle-base');
    const trangleBaseText = trangleBase.value;
    const base = parseFloat(trangleBaseText);
    console.log(base);

    // Trangle Height
    const trangleHeight = document.getElementById('trangle-height');
    const trangleHeightText = trangleHeight.value;
    const height = parseFloat(trangleHeightText);
    console.log(height);

//     // Area
    const area = 0.5 * base * height;
    // console.log(area);

    // // Result Trangle
    const resultTrangle = document.getElementById('result-trangle');
    resultTrangle.innerText = area;
}

