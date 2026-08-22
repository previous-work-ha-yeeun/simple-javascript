// for part one
function listImages(array) {
    let html=``;
    
    // parameter validation 
    if (!Array.isArray(array)) {
        html = `<p> ❌Error: You must provide an array! '${array}' is not an array. </p>`

    } else {
        html +=`<ul>`
        array.forEach(element => {
            if (typeof element === "string") {
                html += `<li><img src="./${pathToImages}${element}" class="listOfImages"></li>`;
            } else{
                console.log(`Oops, '${element}' is not a string!`)
            }
        });
        html += `</ul>`;  
    }
    
    return html;
};
