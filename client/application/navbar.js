Template.navbar.events ({

    'click .published': function (){

        Session.set ("Published", true)
    },

    'click .implementing': function (){

        Session.set ("Published", false)
    },


    'click .sort_by_score': function (){

        Session.set ("sort_by_score", true)
    },

    'click .sort_by_name': function (){

        Session.set ("sort_by_score", false)
    }

})