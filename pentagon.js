function calculatePentagonArea(){
    // pentagon Perimeter
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value
    const perimeter = parseFloat(pentagonPerimeterText)

    // pentagon Apothem
    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const apothem = parseFloat(pentagonApothemText);


    // pentagon area calculate
    const area = 0.5 * perimeter * apothem;



    // display pentagon area
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;




}