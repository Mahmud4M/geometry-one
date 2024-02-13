function rectangleAreaInput() {
    // Rectangle Width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    // Rectangle Length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // const area
    const areaRectangle = width * length;
    
    //Result Rectangle
    const result = document.getElementById('result-rectangle');
    result.innerText = areaRectangle;
}