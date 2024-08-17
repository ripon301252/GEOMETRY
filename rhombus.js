function calculateRhombusArea(){
    // get Rhombus base value.
    const rhombusBaseInput = document.getElementById('rhombus-base');
    const rhombusBaseText = rhombusBaseInput.value;
    const base = parseFloat(rhombusBaseText);
    //console.log(base);


    // get Rhombus height value.
    const rhombusHeightInput = document.getElementById('rhombus-height');
    const rhombusHeightText = rhombusHeightInput.value;
    const height =  parseFloat(rhombusHeightText);
    //console.log(height);


    // calculate Rhombus  area
    const area = 0.5 * base * height;
    //console.log('area of triangle is:', area);


    // display Rhombus  area
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
    //console.log(area);  

}

