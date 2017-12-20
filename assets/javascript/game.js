$(document).ready(function(){
	$("#reset").on("click", function() {
		var target = Math.floor(Math.random() * 102) + 19;
		$("#target").attr("data", target);
		$("#score").attr("data", 0);
		$("#red-crystal").attr("data", Math.floor(Math.random() * 12) + 1);
		$("#yellow-crystal").attr("data", Math.floor(Math.random() * 12) + 1);
		$("#green-crystal").attr("data", Math.floor(Math.random() * 12) + 1);
		$("#blue-crystal").attr("data", Math.floor(Math.random() * 12) + 1);
		update();
	});
	$(".crystal").on("click", function() {
		a = parseInt($(this).attr("data")) + parseInt($("#score").attr("data"));
		$("#score").attr("data", a);
		update();

	});
	var update = function() {
		$("#target").text($("#target").attr("data"));
		$("#score").text($("#score").attr("data"));
	};
});