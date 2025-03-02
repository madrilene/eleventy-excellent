/** 
export default function (content, markdownLibrary) {
**/
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
        // image
        var original='';
        // title for image
        var title='';


        /* Make sure there are valid lines in the text */
        var validLine = curr.includes(";");
        if (validLine == true) {
            /* make sure there are more than 0 values in the split */
            var currArray = curr.split(';');
            if (currArray.length > 0) {
                original = currArray[0];
                if (currArray.length >= 1) {
                    title=currArray[1];
                }
            }
                 

            result = result +
                `<li>` +
                `<a href="/assets/photos/${original}" ` +
                `class="glightbox" ` +
                `data-glightbox="description: ${title}"` +
                `data-gallery="gallery1">` +
                ` <img src="/assets/photos/thumb/${original}" alt="${title}" />` +
                `</a>` +
                `</li>`;
        }
    }
    
    result = result + `</ul>`;

    // Add in lightbox
    result = result + `<script>const lightbox = GLightbox({loop: true});</script>`

    return result;
}
