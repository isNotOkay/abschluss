'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Slideshowplayer = new Module('slideshowplayer');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Slideshowplayer.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Slideshowplayer.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Slideshowplayer.menus.add({
    title: 'slideshowplayer example page',
    link: 'slideshowplayer example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Slideshowplayer.aggregateAsset('css', 'slideshowplayer.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Slideshowplayer.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Slideshowplayer.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Slideshowplayer.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Slideshowplayer;
});
