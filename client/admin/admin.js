/**
 * Created by Jasper on 28/12/14.
 */

Template.admin.helpers ({

    publishedorganisation: function (){
        return Published.find({}, {sort: [
            ["name", "asc"]
        ]});
    }

})


Template.admin.events ({
    'click .add': function(){


        Published.insert(
            {
                "name": $('.publishing_org_name').val(),
                "score": $('.publishing_org_score').val()
            }

        )
    },

    'click .remove': function(){



        var e = document.getElementById("selectedorganisation");
        var selectedValue = e.options[e.selectedIndex].value;

       Published.remove(selectedValue)
    },

    'click .edit': function(){
        var e = document.getElementById("editorganisation");
        var selectedValue = e.options[e.selectedIndex].value;
        Published.update({
                _id: selectedValue
            },
            {
                $set: {
                    score: $('.publishing_org_score_edit').val()
                }
            });
    }
})