<!-- S C R O L L       I N D I C A T O R -->

-components
    -ScrollIndicator.jsx

-CSS

<div className="scroll-progress-tracking-container">
- This is the wrapper for the progress bar.
- Its purpose is to provide a layout or structure for the actual progress bar that reflects how 
    far the user has scrolled.


- document.body.scrollTop:
This property returns the number of pixels that the document's body has been scrolled vertically.

- document.documentElement.scrollTop:
This property returns the number of pixels that the root element (typically the <html> element)
     has been scrolled vertically.

- document.documentElement.scrollHeight:
This property returns the total height of the document, including the portion that is not 
    visible within the viewport (the part that requires scrolling).

- document.documentElement.clientHeight:
This property returns the height of the viewport (the visible part of the webpage) in pixels.