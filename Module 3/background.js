$(function() {
	$.get('https://twitter.com/i/notifications',function(data) {
		// console.log(data);
		var htmlData = data;
		$data = append($(htmlData).find('#stream-items-id').eq(0));
		$data.find('.activity-truncated-tweet').remove();
		$data.find('.activity-supplement').remove();
		$('body').append($data);
	})
});