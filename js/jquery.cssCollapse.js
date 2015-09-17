;
(function ($, window, document, undefined) {
	"use strict";

	var pluginName = 'cssCollapse',
		defaults = {
			accordion: 'yes',
			accordionContainer: 'accordionContainer',
			prefix: 'cssCollapse-',
			targetClass: 'target',
			hiddenContentClass: 'hiddenContent',
			collapseClass: 'is-open',
			iconClass: 'collapseIcons',
			iconOpen: 'icon-add',
			iconClose: 'icon-minus-fill',
			behaviour: '',
			speed: '',
			delay: ''
		};

	//constructor
	function plugin(element, options) {
		this.elem = element;
		this.$elem = $(element);
		this.options = $.extend({}, defaults, options);
		this.collapseHeadings = this.$elem.find('.' + this.options.prefix + this.options.targetClass);
		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	plugin.prototype = {
		constructor: plugin,
		toggleCollapse: function ($currentTarget) {
			var pluginThis = this,
				$collapseIcons = $currentTarget.find('.' + pluginThis.options.prefix + pluginThis.options.iconClass),
				$hiddenContent = $currentTarget.siblings('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass);

			if ($hiddenContent.hasClass(pluginThis.options.collapseClass)) {
				$hiddenContent.removeClass(pluginThis.options.collapseClass);
				$collapseIcons.removeClass(pluginThis.options.prefix + pluginThis.options.iconClose).addClass(pluginThis.options.prefix + pluginThis.options.iconOpen);
				$(document).trigger(pluginThis._name + '.close');
			} else {
				$hiddenContent.addClass(pluginThis.options.collapseClass);
				$collapseIcons.removeClass(pluginThis.options.prefix + pluginThis.options.iconOpen).addClass(pluginThis.options.prefix + pluginThis.options.iconClose);
				$(document).trigger(pluginThis._name + '.open');
			}
		},
		accordionCollapse: function ($currentTarget) {
			var pluginThis = this,
				$collapseIcons = $currentTarget.find('.' + pluginThis.options.prefix + pluginThis.options.iconClass),
				$hiddenContent = $currentTarget.siblings('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass),
				$currentParent = $currentTarget.parents('.' + pluginThis.options.accordionContainer),
				$accordionCollapseIcons = $currentParent.find('.' + pluginThis.options.prefix + pluginThis.options.targetClass + ' > .' + pluginThis.options.prefix + pluginThis.options.iconClass),
				$accordionHiddenContent = $currentParent.find('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass);

			if ($hiddenContent.hasClass(pluginThis.options.collapseClass)) {
				$hiddenContent.removeClass(pluginThis.options.collapseClass);
				$collapseIcons.removeClass(pluginThis.options.prefix + pluginThis.options.iconClose).addClass(pluginThis.options.prefix + pluginThis.options.iconOpen);
				$(document).trigger(pluginThis._name + '.accordionClose');
			} else {
				$accordionHiddenContent.removeClass(pluginThis.options.collapseClass);
				$accordionCollapseIcons.removeClass(pluginThis.options.prefix + pluginThis.options.iconClose);
				$hiddenContent.addClass(pluginThis.options.collapseClass);
				$collapseIcons.addClass(pluginThis.options.prefix + pluginThis.options.iconClose);
				$(document).trigger(pluginThis._name + '.accordionOpen');
			}
		},
		checkAccordion: function (event) {
			var pluginThis = event.data.pluginThis,
				$currentTarget = $(this);
			pluginThis.behaviour($currentTarget);
			if (pluginThis.options.accordion == 'yes') {
				pluginThis.accordionCollapse($currentTarget);
			} else {
				pluginThis.toggleCollapse($currentTarget);
			}
		},
		behaviour: function ($currentTarget) {
			var pluginThis = this,
				$hiddenContent = $currentTarget.siblings('.' + pluginThis.options.prefix + pluginThis.options.hiddenContentClass);

			if (pluginThis.options.behaviour != '') {
				$hiddenContent.css({
					'-webkit- transition-timing-function': pluginThis.options.behaviour,
					'-moz- transition-timing-function': pluginThis.options.behaviour,
					'-ms- transition-timing-function': pluginThis.options.behaviour,
					'-o- transition-timing-function': pluginThis.options.behaviour,
					'transition-timing-function': pluginThis.options.behaviour
				});
			}

			if (pluginThis.options.speed != '') {
				$hiddenContent.css({
					'-webkit- transition-duration': pluginThis.options.speed,
					'-moz- transition-duration': pluginThis.options.speed,
					'-ms- transition-duration': pluginThis.options.speed,
					'-o- transition-duration': pluginThis.options.speed,
					'transition-duration': pluginThis.options.speed
				});
			}

			if (pluginThis.options.delay != '') {
				$hiddenContent.css({
					'-webkit- transition-delay': pluginThis.options.delay,
					'-moz- transition-delay': pluginThis.options.delay,
					'-ms- transition-delay': pluginThis.options.delay,
					'-o- transition-delay': pluginThis.options.delay,
					'transition-delay': pluginThis.options.delay
				});
			}
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
		})
	};

	$.fn[pluginName].defaults = defaults;
	$.fn[pluginName].constructor = plugin;

	$(document).cssCollapse();

})(jQuery, window, document);