var alreadyViewedElements = {
  init: function( settings ) {
    alreadyViewedElements.config = {
      selector: 'div.category.row',
      button: {
        html: '<button>',
        text: 'Flush List',
        container: 'body',
        position: 'fixed',
        top: '50%',
        left: '30px'
      }
    };

    jQuery.fn.getLastSeen = function () {
    	var lastseen = 0;
      var that = this;

    	that.each(function(idx, val) {
    		var rect = this.getBoundingClientRect();
    		var top = rect.top;
    		lastseen = idx-1;

        if (top > 0) {
          return false;
        }
    	});

      return this[lastseen];
    };

    jQuery.fn.removeTo = function (idx) {
    	for (var i = 0; i < idx; i++) {
    		jQuery(this[i]).remove();
    	}

    	return this;
    };

    jQuery.extend( alreadyViewedElements.config , settings );

    alreadyViewedElements.setup();
  },

  setup: function() {
    this.addButton();
  },

  updateItems: function() {
    alreadyViewedElements.items = jQuery(alreadyViewedElements.config.selector);
  },

  remove: function() {
    this.updateItems();

    var items = alreadyViewedElements.items;
    var toIdx = Object.keys(alreadyViewedElements.items).map(function (key) { return alreadyViewedElements.items[key]; }).lastIndexOf(alreadyViewedElements.items.getLastSeen());
    items.removeTo(toIdx);
  },

  addButton: function() {
    var $button = jQuery(alreadyViewedElements.config.button.html);
    var $container = jQuery(alreadyViewedElements.config.button.container);
    var that = this;

    $button.text(alreadyViewedElements.config.button.text);
    $button.css('position', alreadyViewedElements.config.button.position);
    $button.css('top', alreadyViewedElements.config.button.top);
    $button.css('left', alreadyViewedElements.config.button.left);
    $button.click(function() {
      that.remove();
    })

    $container.append($button);
  },

  items: [],
};

if ( jQuery.isReady ) {
  alreadyViewedElements.init();
} else {
  $( document ).ready( alreadyViewedElements.init );
}
