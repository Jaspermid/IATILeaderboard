/**
 * Created by Jasper on 28/12/14.
 */

Template.leaderboard.helpers ({
    organisation: function () {
        if (Session.get('sort_by_score')) {


            if (Session.get('Published')) {
                return Published.find({}, {sort: {score: -1}});
            }
            else {

                return Implementing.find({}, {sort: {score: -1}});

            }
        }

        else {
                if (Session.get('Published')) {
                    return Published.find({}, {sort: [
                        ["name", "asc"]
                    ]});
                }
                else {

                    return Implementing.find({}, {sort: [
                        ["name", "asc"]
                    ]});
                }
            }
            }



    }
);