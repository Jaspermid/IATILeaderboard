/**
 * Created by Jasper on 11/12/14.
 */

Template.published.helpers ({
    organisation: function() {
        return Published.find({});
    }
})