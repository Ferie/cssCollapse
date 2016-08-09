# cssCollapse a simple jQuery plugin that collapses elements of content using CSS3 transitions

See the [cssCollapse jQuery plugin](http://riccardoandreatta.com/web-app/cssCollapse/example.html) in actions!!!

This plugin was developed to slide the content of a hidden box using the CSS3 transitions rules.
It works with the following parameters that can be overwritten if needed.

* ```accordion```: this variable set if the collapse has to behave like an accordion or not (the default is 'no', this means that if you want the accordion behaviour, you have to call the plugin with the varible inside it set to 'yes')
* ```accordionContainer```: this variable is the class that tells the plugin the container class for the accordion (the default is 'accordionContainer')
* ```prefix```: this is the prefix that you can use for all the classes of this plugin to distinguish the istances or the libraries or other plugins that you are using that in some cases can use the same class names (the default is 'cssCollapse-')
* ```targetClass```: this is the target class where the click perform the action. The target can be a link or a button or a box (the default is 'target')
* ```targetSelected```: this is the class that is put to the open accordion target (the default is 'selected')
* ```hiddenContentClass```: this is the class that contain the hidden content that has to be shown when the target class has been clicked (the default is 'hiddenContent')
* ```collapseClass```: this is the class that is put to show the hidden stuff. NOTE: if you change this class you have to modify also the CSS (the default is 'is-open')
* ```iconClass```: this is the general class that you have to add if you are using icon-fonts to indicate the opening and closing of the box (the default is 'collapseIcons')
* ```iconOpen```: this is the class for the icon-font when the hidden content is shown (the default is 'icon-add')
* ```iconClose```: this is the class for the icon-font when the hidden content is hidden (the default is 'icon-minus-fill')
* ```behaviour```: this is the CSS3 transitions name that you want to use (the default is empty to let the css rules works itself)
* ```speed```: this is the transitions speed that you want to use (the default is empty to let the css rules works itself)
* ```delay```: this is the CSS3 transitions delay that you want to use (the default is empty to let the css rules works itself)
* ```accordionCloseLinkClass```: this is the the class for the closing link inside the accordion, if needed (the default is 'closeAccordion')
* ```noScrollClass```: this is the the class that you have to use in your html near the target class, if you don't want to scroll the page when the target is clicked (the default class name is 'noScroll')

#### IMPORTANT NOTES

This plugin, obviously, does not show the transition animations for the hidden boxes on older browsers like Internet Explorer 7/8/9 because they do not support the CSS 3 transitions rules.
The behaviour on these browsers will be a simple hide/show of the hidden content.


