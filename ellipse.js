function calculateEllipseArea(){
    const ellipseBaseInpute = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInpute.value
    const base = parseFloat(ellipseBaseText);


    const ellipseHeightInput = document.getElementById('ellipse-height');
    const ellipseHeightText = ellipseHeightInput.value;
    const height = parseFloat(ellipseHeightText);

    const area = 3.14 * base * height

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}
 

