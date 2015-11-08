/*profileInfo = new Mongo.Collection('profile');
PlayersList.insert({
    profilName: "Krystal",
    hairStyle: " multi selsectNatural, Realxed ,Texlax, Texturised, Transitioning, Locks ",
    hairType: " multiselect",
    hairGoal: "mutliselect ",
    hairGoalData:" datepicker"
    measurements: " in inches or cm" ,
});
calInfo = new Mongo.Collection('calendar');
calInfo.insert({
    hairNotes: " large text field",
    hairStatusFront: " ",
    hairStatusBack: " ",
    hairStatusLeft: " ",
    hairStatusRight: " ",
    hairPhotos: "link to photo saved to the server",
});

products = new Mongo.Collection('products');
products.insert({
    productName: "",
    productType:"",
    productImage:"",
    productIngredient: "",
    productReview: "", 9

});
*/
Router.route('/index');
Router.route('/', {
    template: 'index'
});
Router.route("/products");
onYouTubeIframeAPIReady ={}; 
player={};
accountsClientOrServer.onLogin(func){

}



if (Meteor.isClient) {
jQuery(document).ready(function () {

    //Open the menu
    jQuery("#hamburger").click(function () {

        jQuery('#content').css('min-height', jQuery(window).height());

        jQuery('nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#content').width();

        //set the content with the width that it has originally
        jQuery('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    jQuery("#contentLayer").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                jQuery('#content').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');
                jQuery('nav').css('opacity', 0);
                jQuery('#content').css('min-height', 'auto');

            }
        });
    });

});
/*
// YouTube API will call onYouTubeIframeAPIReady() when API ready.
    // Make sure it's a global variable.
    onYouTubeIframeAPIReady = function () {

        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        player = new YT.Player("player", {

            height: "400", 
            width: "600", 

            // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
            videoId: "LdH1hSWGFGU", 

            // Events like ready, state change, 
            events: {

                onReady: function (event) {

                    // Play video when player ready.
                    event.target.playVideo();
                    console.log("here");
                }

            }

        });

    };

    YT.load();
*/
     
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Factual.configure({
        key: "u5BL2Xpr8u0zIuKlJ5zKY1uaGtSrfw7qAUnP9k61",
        secret: "3rUuDIPG7IBwQxvHwzujU44oVMP9iNaxRPZHfGKR"
    });
  Factual.get('/t/places-us',{q:"century city mall", "include_count":"true"}, 
      function (error, res) {
        console.log("show "+ res.included_rows +"/"+ res.total_row_count +" rows:", res.data);
     });

   
}
