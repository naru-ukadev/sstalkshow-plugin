/**
 * jQuery SakuraScript TalkShow
 * Author:
 *   naru <bottle@mikage.to>
 * License:
 *   MIT License
 * Depends:
 *   jQuery UI 1.8
 */


$.widget("ui.sstalkshow", {
	// default options
	options: {
	},

	_create: function() {
		this.element.html('test');
	},

	destroy: function() {
		$.Widget.prototype.destroy.apply(this, arguments);
		// now do other stuff particular to this widget
	}
});