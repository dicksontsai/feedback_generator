window.onbeforeunload = function() {
    return "You do not want to close this";
}

$(".add-comment").click(function() {
        //alert("This button is clicked");
        var form = $(this).parent().children(".add-comment-form");
        form.show();
});
$(".cancel-new-comment").click(function() {
    var form = $(this).parent();
    form.hide();
});



$(".new-comment").click(function() {
    var form = $(this).parent();
    form.hide();
    //alert(form.children(".comment-input").val());
    var new_list_item = $('<li/>');
    new_list_item.addClass("buttons-list-item");
    var new_comment = $('<button/>');
    new_comment.text(form.children(".comment-input").val());
    form.children(".comment-input").val("");
    new_comment.data('point_value', Number(form.children(".point-value-input").val() || 0));
    //console.log(new_comment.data('point_value'));
    new_comment.click(function () {
        var point_value = $(this).data('point_value');
        var point_output = $(this).parent().parent().parent();
        point_output = point_output.children(".point-output");
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            if (point_value) {
                point_output.val(Number(point_output.val()) - Number($(this).data('point_value')));
            }
        } else {
            $(this).addClass("selected");
            if (point_value) {
                point_output.val(Number(point_output.val()) + Number($(this).data('point_value')));
            }
        }

    });
    var tab = form.parent();
    new_list_item.append(new_comment)
    tab.children(".buttons-list").append(new_list_item);
});
/*
$(".new-comment").click(function() {
    alert("Clicked");
    var new_button = $('<button/>', {
        text: "Happy"
    });
    $("#tabs").after(new_button);
});
*/
$("#compile").click(function () {
    var feedback_string = [];
    $(".selected").each(function (index, value) {
        if ($(this).text().length > 0) {
            feedback_string.push($(this).text());
        }
    });
    $(".temporary").each(function (index, value) {
        if ($(this).val().length > 0) {
            feedback_string.push($(this).val());
        }
    });
    $("#output").val(feedback_string.join(", "));
});

$("#grade-new").click(function() {
    $(".selected").each(function (index, value) {
        if (! $(this).hasClass("temporary")) {
            $(this).removeClass("selected");
        }
    });
    $(".temporary").val("");
    $(".point-output").val(0);
});

$(function() {
    $(".sortable").sortable();
});