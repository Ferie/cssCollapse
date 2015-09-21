# cssCollapse a simple jQuery plugin that collapse elements of content using CSS3 transitions

See the [cssCollapse jQuery plugin](http://riccardoandreatta.com/web-app/cssCollapse/example.html) in actions!!!

This plugin was developed to slide the content of a hidden box using the CSS3 transitions rules.
It works with the following parameters that can be overwritten if needed.

* ```prefix```: this is the prefix that you can use for the classes to distinguish the istances or the libraries or some other plugin that use the same classes names (the default is 'cssCollapse-', you can just leave it empty)
* ```targetClass```: this is the class where the element perform the action, for example a link or a button (the default is 'target')
* ```hiddenContentClass```: this is the class that contain the hidden content that has to be shown when the target class has been clicked (the default is 'hiddenContent')
* ```collapseClass```: this is the class that is put to show the hidden stuff. NOTE: if you change this class you have to modify also the CSS (the default is 'is-open')
* ```iconClass```: this is the general class that you have to add if you are using icon-fonts to indicate the opening and closing of the box (the default is 'collapseIcons')
* ```iconOpen```: this is the class for the icon-font when the hidden content is shown (the default is 'icon-add')
* ```iconClose```: this is the class for the icon-font when the hidden content is hidden (the default is 'icon-minus-fill')
* ```behaviour```: this is the CSS3 transitions name that you want to use (the default is empty to let the css rules works itself)
* ```speed```: this is the transitions speed that you want to use (the default is empty to let the css rules works itself)
* ```delay```: this is the CSS3 transitions delay that you want to use (the default is empty to let the css rules works itself)

#### VERY IMPORTANT NOTES

This plugin, obviously, does not show the slide of the hidden boxes on older browsers like Internet Explorer 7/8/9 because they do not support the CSS 3 transitions rules.
The behaviour on these browsers will be a simple hide/show of the hidden content.


TO DO:
- accordion to finish

