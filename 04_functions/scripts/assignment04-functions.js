// for part one
function listImages(array) {
    let html=``;
    
    // parameter validation 
    if (!Array.isArray(array)) {
        html = `<p> ❌Error: '${array}' is not an array. This function requires an array! </p>`

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

// for part two
function listURLs(array, listType = 'ul') {
    let html = ``
    if (!Array.isArray(array)) {
        html = `<p> ❌Error: '${array}' is not an array. This function requires an array! </p>`
        return html;
    }
    if (array.length <= 1) {
        html = `<p> ❌Error: This function requires an array with two items or more.</p>`;    
    } else if (listType != 'ul' && listType != 'ol') {
        html = `<p> ❌Error: In HTML only 'ul' or 'ol' lists can be made. There is no '${listType}' list element.</p>`;
    } else {
        html = `<${listType}>`;
        array.forEach(element => {
            if (isURL(element)) {
                html += `<li>${element}</li>`;
            } else {
                console.log(`Hey, '${element}' is not a URL`)
            }
        });
        html += `</${listType}>`;
    }
    return html;
}

function isURL(params) {
    try {
        new URL(params); // 'params' can be interpreted as a URL → true
        return true;
    } catch {
        return false; // URL parsing failed → error → false 
    }
}
