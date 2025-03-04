function basename(path) {
   return path.split('/').reverse()[0];
}

export const galleryShortcode = async(content) => {
    let contentArray = content.trim().split('\n');
    let numItems = (contentArray.length);

    // Create div 

    var result = `<ul class="gallery">`;

    // loop over each set of pics and thumb pics
    for (const lines of contentArray) {
        /* 
           Each line will be of format:
           pics/jpg  pics/thumb/jpg [text]
        */
        var curr = lines.trim();

        // image location
        var photoLocation='';
        // thumb image location
        var thumbLocation='';
        // title for image
        var title='';


        /* Make sure there are valid lines in the text */
        var validLine = curr.includes(";");
        if (validLine == true) {
            /* make sure there are more than 0 values in the split */
            var currArray = curr.split(';');
            if (currArray.length > 0) {
                // get photo slug
                photoLocation = currArray[0];

                // split up photo slug to get the bits after the last slash
                // e.g. /2024/some_dir/foo.jpg should return foo.jpg
                var base = basename(photoLocation);
                thumbLocation = photoLocation.replace(base, `thumb/${base}`);

                // Get title/description for photo if it's there
                if (currArray.length >= 1) {
                    title=currArray[1];
                }
            }
            
            result = result +
                `<li>` +
                `<a href="/assets/photos/${photoLocation}" ` +
                `class="glightbox" ` +
                `data-glightbox="description: ${title}"` +
                `data-gallery="gallery1">` +
                ` <img src="/assets/photos/${thumbLocation}" alt="${title}" />` +
                `</a>` +
                `</li>`;
        }
    }
    
    result = result + `</ul>`;

    // Add in lightbox
    result = result + `<script>const lightbox = GLightbox({loop: true});</script>`

    return result;
}
