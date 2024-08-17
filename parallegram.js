
function calculateParallelogramArea(){
    // get Parallelogram base value.
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    //console.log(base);


    // get Parallelogram  height value.
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height =  parseFloat(parallelogramHeightText);
    //console.log(height);


    // calculate Parallelogram  area
    const area = base * height;
    //console.log('area of triangle is:', area);


    // display Parallelogram  area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
    //console.log(area);  

}

