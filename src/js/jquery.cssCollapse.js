;
(function ($, window, document, undefined) {
    "use strict";

    var pluginName = 'cssCollapse',
        defaults = {
            accordion: false,
            accordionContainer: 'accordionContainer',
            prefix: 'cssCollapse-',
            targetClass: 'target',
            targetSelected: 'selected',
            hiddenContentClass: 'hiddenContent',
            collapseClass: 'is-open',
            iconClass: 'collapseIcons',
            iconOpen: 'diff-added',
            iconClose: 'diff-removed',
            transition: {
                behavior: false,
                duration: false,
                delay: false,
            },
            accordionCloseLinkClass: 'closeAccordion',
            noScrollClass: 'noScroll',
            changeText: {
                changeTextClass: false,
                open: '',
                close: ''
            }
        };

    //constructor
    function plugin(element, options) {
        this.elem = element;
        this.$elem = $(element);
        this.options = $.extend({}, defaults, options);
        this.collapseHeadings = this.$elem.find('.' + this.options.prefix + this.options.targetClass);
        this.accordionCloseLink = this.$elem.find('.' + this.options.accordionCloseLinkClass);
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    plugin.prototype = {
        constructor: plugin,
        toggleCollapse: function ($currentTarget) {
            var pluginThis = this,
                $collapseIcons = $currentTarget.find('.' + pluginThis.options.prefix + pluginThis.options.iconClass),
                $hiddenContent = $currentTarget.parent().find('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass);

            if ($hiddenContent.hasClass(pluginThis.options.collapseClass)) {
                $hiddenContent.removeClass(pluginThis.options.collapseClass);
                $collapseIcons.removeClass(pluginThis.options.prefix + pluginThis.options.iconClose).addClass(pluginThis.options.prefix + pluginThis.options.iconOpen);
                pluginThis.changeText($currentTarget);
                pluginThis.checkNoScrollClass($currentTarget);
                $(document).trigger(pluginThis._name + '.close');
            } else {
                $hiddenContent.addClass(pluginThis.options.collapseClass);
                $collapseIcons.removeClass(pluginThis.options.prefix + pluginThis.options.iconOpen).addClass(pluginThis.options.prefix + pluginThis.options.iconClose);
                pluginThis.changeText($currentTarget);
                pluginThis.checkNoScrollClass($currentTarget);
                $(document).trigger(pluginThis._name + '.open');
            }
        },
        accordionCollapse: function ($currentTarget) {
            var pluginThis = this,
                $collapseIcons = $currentTarget.find('.' + pluginThis.options.prefix + pluginThis.options.iconClass),
                $hiddenContent = $currentTarget.siblings('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass),
                $currentParent = $currentTarget.parents('.' + pluginThis.options.accordionContainer),
                $accordionTargets = $currentParent.find('.' + pluginThis.options.targetSelected),
                $accordionCollapseIcons = $currentParent.find('.' + pluginThis.options.prefix + pluginThis.options.targetClass + ' .' + pluginThis.options.prefix + pluginThis.options.iconClass),
                $accordionHiddenContent = $currentParent.find('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass);

            if ($hiddenContent.hasClass(pluginThis.options.collapseClass)) {
                // target opened
                $hiddenContent.removeClass(pluginThis.options.collapseClass);
                if (pluginThis.options.iconOpen != '') {
                    $collapseIcons.removeClass(pluginThis.options.iconOpen).addClass(pluginThis.options.iconClose);
                }
                $currentTarget.removeClass(pluginThis.options.targetSelected);
                $hiddenContent.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend oTransitionEnd', function (e) {
                    pluginThis.checkNoScrollClass($currentTarget);
                });
                $(document).trigger(pluginThis._name + '.accordionClose');
            } else {
                // target closed
                $accordionTargets.removeClass(pluginThis.options.targetSelected);
                $accordionHiddenContent.removeClass(pluginThis.options.collapseClass);
                if (pluginThis.options.iconOpen != '') {
                    $accordionCollapseIcons.removeClass(pluginThis.options.iconOpen).addClass(pluginThis.options.iconClose);
                }
                $currentTarget.addClass(pluginThis.options.targetSelected);
                $hiddenContent.addClass(pluginThis.options.collapseClass);
                if (pluginThis.options.iconOpen != '') {
                    $collapseIcons.removeClass(pluginThis.options.iconClose).addClass(pluginThis.options.iconOpen);
                }
                $hiddenContent.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend oTransitionEnd', function (e) {
                    pluginThis.checkNoScrollClass($currentTarget);
                });
                $(document).trigger(pluginThis._name + '.accordionOpen');
            }
        },
        changeText: function ($currentTarget) {
            var pluginThis = this;
            if ($currentTarget.hasClass(pluginThis.options.prefix + pluginThis.options.changeText.changeTextClass)) {
                if ($currentTarget.text() === pluginThis.options.changeText.open) {
                    $currentTarget.text(pluginThis.options.changeText.close);
                } else {
                    $currentTarget.text(pluginThis.options.changeText.open);
                }
            }
        },
        checkNoScrollClass: function ($currentTarget) {
            var pluginThis = this;
            if (!$currentTarget.hasClass(pluginThis.options.prefix + pluginThis.options.noScrollClass)) {
                $('html, body').animate({scrollTop: $($currentTarget).offset().top}, 800);
            }
        },
        checkAccordion: function (event) {
            var pluginThis = event.data.pluginThis,
                $currentTarget = $(this);
            pluginThis.behavior($currentTarget);
            if (pluginThis.options.accordion) {
                pluginThis.accordionCollapse($currentTarget);
            } else {
                pluginThis.toggleCollapse($currentTarget);
            }
        },
        behavior: function ($currentTarget) {
            var pluginThis = this,
                $hiddenContent = $currentTarget.siblings('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass);

            if (pluginThis.options.transition.behavior) {
                $hiddenContent.css({
                    '-webkit-transition-timing-function': pluginThis.options.transition.behavior,
                    '-moz-transition-timing-function': pluginThis.options.transition.behavior,
                    '-o-transition-timing-function': pluginThis.options.transition.behavior,
                    'transition-timing-function': pluginThis.options.transition.behavior
                });
            }

            if (pluginThis.options.transition.duration) {
                $hiddenContent.css({
                    '-webkit-transition-duration': pluginThis.options.transition.duration,
                    '-moz-transition-duration': pluginThis.options.transition.duration,
                    '-o-transition-duration': pluginThis.options.transition.duration,
                    'transition-duration': pluginThis.options.transition.duration
                });
            }

            if (pluginThis.options.transition.delay) {
                $hiddenContent.css({
                    '-webkit-transition-delay': pluginThis.options.transition.delay,
                    '-moz-transition-delay': pluginThis.options.transition.delay,
                    '-o-transition-delay': pluginThis.options.transition.delay,
                    'transition-delay': pluginThis.options.transition.delay
                });
            }
        },
        closeAccordionByLink: function (event) {
            var pluginThis = event.data.pluginThis,
                $currentTarget = $(this),
                $hiddenContent = $currentTarget.parents('.' + pluginThis.options.hiddenContentClass),
                $targetSelected = $hiddenContent.prev('.' + pluginThis.options.targetSelected),
                $collapseIcons = $targetSelected.find('.' + pluginThis.options.iconClass);

            $targetSelected.removeClass(pluginThis.options.targetSelected);
            $hiddenContent.removeClass(pluginThis.options.collapseClass);
            if (pluginThis.options.iconOpen != '') {
                $collapseIcons.removeClass(pluginThis.options.iconOpen).addClass(pluginThis.options.iconClose);
            }
            pluginThis.checkNoScrollClass($currentTarget);
            $(document).trigger(pluginThis._name + '.accordionClose');
        },
        eventBindings: function () {
            this.collapseHeadings.on('click', {pluginThis: this}, this.checkAccordion);
        },
        init: function () {
            this.eventBindings();
        }
    };

    $.fn[pluginName] = function (option) {
        return this.each(function () {
            var data = $.data(this, 'ObjPlugin_' + pluginName),
                options = typeof option === 'object' && option;

            if (!data) $.data(this, 'ObjPlugin_' + pluginName, (data = new plugin(this, options)));
            if (typeof option === 'string') data[option]();
        });
    };

    $.fn[pluginName].defaults = defaults;
    $.fn[pluginName].constructor = plugin;

})(jQuery, window, document);