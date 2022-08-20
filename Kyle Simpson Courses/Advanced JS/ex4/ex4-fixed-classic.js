function Widget(width, height) {
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}

Widget.prototype.render = function ($where) {
	console.log(this.$elem);
	if (this.$elem) {
		this.$elem
			.css({
				width: this.width + 'px',
				height: this.height + 'px',
			})
			.appendTo($where);
	}
};

function Button(width, height, label) {
	Widget.call(this, width, height);
	this.label = label;
	this.$elem = $('<button>').text(label);
}
Button.prototype.render = function ($where) {
	Widget.prototype.render.call(this, $where);
	this.$elem.bind('click', this.handleOnClick.bind(this));
};
Button.prototype.handleOnClick = function (evt) {
	console.log(`Button ${this.label} clicked! `);
};
$(document).ready(function () {
	var $body = $(document.body);
	var btn1 = new Button(50, 50, 'btn1');
	var btn2 = new Button(50, 50, 'btn2');
	console.log(btn1);
	btn1.render($body);
	btn2.render($body);
});
