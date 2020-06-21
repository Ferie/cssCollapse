# cssCollapse is a jQuery plugin that collapses elements using CSS3 transitions

[![Netlify Status](https://api.netlify.com/api/v1/badges/68db4347-bc46-4c24-813f-6e33d3888f6a/deploy-status)](https://app.netlify.com/sites/css-collapse/deploys)
[![Build Status](https://travis-ci.org/Ferie/cssCollapse.svg?branch=master)](https://travis-ci.org/Ferie/cssCollapse)
[![github tag](https://img.shields.io/github/tag/Ferie/cssCollapse.svg)](https://github.com/Ferie/cssCollapse/tags)

Are you still using jQuery? Would you like a nice CSS transition managed with jQuery? If the answer is "Yes" this is the right place for you.

This plugin was developed to slide the content of a hidden box using the CSS3 transitions rules.


## Examples

See the [cssCollapse jQuery plugin](https://jquery-css-collapse.netlify.com/) in action!


## Options and parameters

It works with the following parameters that can be overwritten if needed.

* `accordion`: this variable set if the collapse has to behave like an accordion or not (the default is 'false', this means that if you want the accordion behavior, you have to call the plugin with the variable inside it set to 'true')
* `accordionContainer`: this variable is the class that tells the plugin the container class for the accordion (the default is 'accordionContainer')
* `prefix`: this is the prefix that you can use for all the classes of this plugin to distinguish the instances or the libraries or other plugins that you are using that in some cases can use the same class names (the default is 'cssCollapse-')
* `targetClass`: this is the target class where the click perform the action. The target can be a link or a button or a box (the default is 'target')
* `targetSelected`: this is the class that is put to the open accordion target (the default is 'selected')
* `hiddenContentClass`: this is the class that contain the hidden content that has to be shown when the target class has been clicked (the default is 'hiddenContent')
* `collapseClass`: this is the class that is put to show the hidden stuff. NOTE: if you change this class you have to modify also the CSS (the default is 'is-open')
* `iconClass`: this is the general class that you have to add if you are using icon-fonts to indicate the opening and closing of the box (the default is 'collapseIcons')
* `iconOpen`: this is the class for the icon-font when the hidden content is shown (the default is 'diff-added')
* `iconClose`: this is the class for the icon-font when the hidden content is hidden (the default is 'diff-removed')
* `behavior`: this is the CSS3 transitions name that you want to use examples are `ease`, `linear`, etc (the default is `false` to let the css rules works itself)
* `duration`: this is the transitions speed that you want to use (the default is `false` to let the css rules works itself)
* `delay`: this is the CSS3 transitions delay that you want to use (the default is `false` to let the css rules works itself)
* `accordionCloseLinkClass`: this is the the class for the closing link inside the accordion, if needed (the default is 'closeAccordion')
* `noScrollClass`: this is the the class that you have to use in your HTML near the target class, if you don't want to scroll the page when the target is clicked (the default class name is 'noScroll')

## Usage

Get a copy of the plugin from the `dist` folder and add it to your project.

Apply the plugin to a DOM element that have to contain the target (the element that if it is clicked, collapse another element) and the hidden content (the element that is shown/hidden when the target is clicked) to make it work independently one to the other in the same page.

It can be applied also to the entire document if the same behavior is required for all the components inside the page.

Use the plugin as shown in the examples below and/or in the [`example.js`](https://github.com/Ferie/cssCollapse/blob/master/src/js/examples.js) file.

```javascript
$('.box').cssCollapse({
    accordion: true,
    targetClass: 'accordion-target',
    hiddenContentClass: 'accordion-hiddenContent',
    iconClose: 'chevron-down',
    iconOpen: 'chevron-up'
});
```

In the page you can use the following classes: 
- `.hiddenContent` (if you want your content to be hidden when the page loads)

and/or
- `.hiddenContent.is-open` (if you want your content to be shown when the page loads).


### Styles

Use the CSS provided in the `dist` folder or structure it as shown below.

In the following example the CSS3 transitions will be then overwritten from the ones in the plugin, if specified.

```css
.hiddenContent {
    overflow-y: hidden;
    padding: 0 20px;
    max-height: 0px;
    -webkit-transition: ease-in-out 600ms max-height;
    -moz-transition: ease-in-out 600ms max-height;
    -o-transition: ease-in-out 600ms max-height;
    transition: ease-in-out 600ms max-height;
}

.hiddenContent.is-open {
    -webkit-transition: ease-in-out 600ms max-height;
    -moz-transition: ease-in-out 600ms max-height;
    -o-transition: ease-in-out 600ms max-height;
    transition: ease-in-out 600ms max-height;
}
```

---

#### Known issue

This plugin, obviously, does not show the transitions on older browsers like Internet Explorer 9 and below, because they do not support CSS3 transitions.

The behavior on these browsers will be a simple hide/show of the hidden content.
