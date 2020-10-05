// Add anchors on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(event) {
    /**
     * Set anchor options
     */
    anchors.options = {
        //there's nothing here...
    };
    /**
     * Add anchors to all article headers
     */
    anchors.add('article h3, article h4, article h5, article h6');
  });
