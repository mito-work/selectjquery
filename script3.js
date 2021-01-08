$(".js-filter-form :checkbox").on("click", function(){
	var checked = [];
	$(".js-filter-form :checked").each(function(){
		checked.push($(this).val());
	});
    console.log(checked);
    
    $(".js-filter-items tbody tr").each(function(){
        var cat = $(this).data("cat");
        console.log(cat);
		var is_exist = $.inArray( cat, checked );
        console.log('exit' + is_exist);
        if (is_exist != -1) {
			$(this).removeClass("hidden");
		
		} else {
			$(this).addClass("hidden");
		}
    });
});
