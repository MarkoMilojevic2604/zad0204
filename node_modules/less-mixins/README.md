bower-less-mixins
=================

Less mixins for bower. 

    This is pulled from http://lesselements.com for use with bower.


`.gradient(#F5F5F5, #EEE, #FFF);` Gradient background. First color is the background color to use for browsers that don't support gradients. The second two colors are the start and stop colors, going from bottom to top.


`.bw-gradient(#EEE, 230, 255);` Greyscale gradient background. Three values to set here. First one provides a color to use as a background for older browsers that don't support gradient backgrounds. Second and third values are the start and end brightness which goes from 0 to 255.


`.bordered(#EEE, #E5E5E5, #DDD, #E5E5E5);` Quick way to set a 1 pixel thick border that varies its color on each side. The color values go in a clockwise order: top, right, bottom, left.


`.drop-shadow(0, 1px, 2px, 0.2);` Adds a box-shadow that is a semi-transparent black. The first two values control the x and y axis position, the third controls blur (how big the shadow is), and the final value is the opacity (0 is fully transparent, 1 is opaque).


`.rounded(5px);` Sets a border-radius for all 4 corners. If you want to set border-radius for individual corners use: .border-radius


`.border-radius(5px, 0, 0, 5px);` Sets a border-radius for each of the 4 corners individually. The values go in a clockwise rotation: top right, bottom right, bottom left, top left.


`.opacity(0.8);` Sets the opacity. 0 is fully transparent, 1 is opaque.


`.transition-duration(0.2s);` Sets a transition-duration (time it takes to do things like hover effects). The value provides a time in seconds.


`.rotation(15deg);` Rotates the item by a number of degrees clockwise.


`.scale(2);` Scales the item by the ratio provided. The example makes the item 2 times larger.


`.transition(2s, ease-out);` Sets the transition duration and effect to use for any transitions (e.g. hover effects), unlike transition-duration which only sets the duration.


`.inner-shadow(0, 1px, 2px, 0.4);` Sets the inner shadow. The first two numbers are the x and y coordinates, the third is the blur and the last one is the strength of the shadow.


`.box-shadow(0 1px 2px #999);` Sets the box-shadow. The first two numbers are the x and y coordinates, then the blur, and the color. This is different from drop-shadow in that it takes on a color instead of setting a transparent black shadow. Additionally, this mixin takes on the whole set of arguments in one go, so no need for commas between each number, and you can also add "inset" before the first number for inset shadow.


`.columns(250px, 0, 50px, #EEE, solid, 1px);` Divides the content into columns. The variables are: column width, column count, column gap, column border color, column border style, column border width.


`.translate(10px, 20px);` Translates an element using the given coordinates. The values are x and y offset coordinates, so the above example moves the element right 10 pixels and up 20 pixels.


`.box-sizing(content-box);` Allows you to alter the CSS box model. For example, by setting this to 'border-box' the width and height properties will include the padding and border values. More info at MDN.


`.user-select(none);` Allows you to disable text highlighting, which can be useful on interface elements.

