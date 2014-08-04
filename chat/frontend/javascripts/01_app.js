// 等候 HTML 文件完成載入
$(document).ready(function(){
    initSubmitForm();
});

var initSubmitForm = function() {
    // 使用 ajax() 來呼叫 REST API
    $.ajax({
        url: 'http://localhost:3000/discussion/latest/3',
        type: "GET",
        dataType: "json",
        complete: function(data, textStatus, jqXHR) {
            console.log(textStatus);
        },
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        }
    });
    
    return false;
};