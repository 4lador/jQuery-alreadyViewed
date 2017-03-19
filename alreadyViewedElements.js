var alreadyViewedElements = {
  // All the initialization stuff
  init: function( settings ) {
    alreadyViewedElements.config = {
      selector: 'div.category.row',
      button: {
        html: '<button>',
        text: 'Flush List',
        container: 'body',
        position: 'fixed',
        top: '50%',
        left: '30px',
        onClick: this.remove,
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

  // Set-up things
  setup: function() {
    this.addButton();
    this.updateItems();
  },

  // Update targets elements array
  updateItems: function() {
    alreadyViewedElements.items = jQuery(alreadyViewedElements.config.selector);
  },

  // Remove last seens elements from the DOM
  remove: function() {
    function getLastIdx () {
      return Object.keys(alreadyViewedElements.items).map(function (key) { return alreadyViewedElements.items[key]; }).lastIndexOf(alreadyViewedElements.items.getLastSeen());
    };

    this.updateItems();
    
    var items = alreadyViewedElements.items;
    var toIdx = getLastIdx();

    items.removeTo(toIdx);
    alreadyViewedElements.items = alreadyViewedElements.items.splice(toIdx);
  },

  // Adds a button to do anything with last seens elements (default to remove)
  // The method could be changed in the config object in the 'init' function
  addButton: function() {
    var $button = jQuery(alreadyViewedElements.config.button.html);
    var $container = jQuery(alreadyViewedElements.config.button.container);
    var that = this;

    $button.text(alreadyViewedElements.config.button.text);
    $button.css('position', alreadyViewedElements.config.button.position);
    $button.css('top', alreadyViewedElements.config.button.top);
    $button.css('left', alreadyViewedElements.config.button.left);
    $button.click(function() {
      alreadyViewedElements.config.button.onClick.call();
    });

    $container.append($button);
  },

  items: [],

  lastSeen: null,
};

if ( jQuery.isReady ) {
  alreadyViewedElements.init();
} else {
  $( document ).ready( alreadyViewedElements.init );
}
