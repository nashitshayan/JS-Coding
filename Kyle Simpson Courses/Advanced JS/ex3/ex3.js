//copy the solution code from ex2.js
// assume this data came from the database
var notes = [
	"This is the first note I've taken!",
	'Now is the time for all good men to come to the aid of their country.',
	'The quick brown fox jumped over the moon.',
];
var NotesManager = function (data) {
	this.notes = data;
};
NotesManager.prototype.addNote = function (note) {
	$('#notes').prepend($("<a href='#'></a>").addClass('note').text(note));
};

NotesManager.prototype.addCurrentNote = function () {
	var current_note = $('#note').val();

	if (current_note) {
		this.notes.push(current_note);
		this.addNote(current_note);
		$('#note').val('');
	}
};
NotesManager.prototype.showHelp = function () {
	$('#help').show();
	var self = this;
	//console.log(this);
	document.addEventListener(
		'click',
		function __handler__(evt) {
			//console.log(this);
			evt.preventDefault();
			evt.stopPropagation();
			evt.stopImmediatePropagation();

			document.removeEventListener('click', __handler__, true);
			self.hideHelp();
		},
		true,
	);
};

NotesManager.prototype.hideHelp = function () {
	$('#help').hide();
};
NotesManager.prototype.handleOpenHelp = function (evt) {
	//console.log(evt);
	console.log('open');
	if (!$('#help').is(':visible')) {
		evt.preventDefault();
		evt.stopPropagation();

		this.showHelp();
	}
};

NotesManager.prototype.handleAddNote = function (evt) {
	//console.log(this);
	this.addCurrentNote();
};

NotesManager.prototype.handleEnter = function (evt) {
	if (evt.which == 13) {
		this.addCurrentNote();
	}
};

NotesManager.prototype.handleDocumentClick = function (evt) {
	$('#notes').removeClass('active');
	$('#notes').children('.note').removeClass('highlighted');
};

NotesManager.prototype.handleNoteClick = function (evt) {
	evt.preventDefault();
	evt.stopPropagation();

	$('#notes').addClass('active');
	$('#notes').children('.note').removeClass('highlighted');
	$(evt.target).addClass('highlighted');
};

NotesManager.prototype.init = function () {
	//	console.log();
	// build the initial list from the existing `notes` data
	var html = '';
	for (i = 0; i < this.notes.length; i++) {
		html += "<a href='#' class='note'>" + this.notes[i] + '</a>';
	}
	$('#notes').html(html);

	// listen to "help" button
	$('#open_help').bind('click', (evt) => this.handleOpenHelp.call(this, evt));

	// listen to "add" button
	$('#add_note').bind('click', () => this.handleAddNote.call(this));

	// listen for <enter> in text box
	$('#new_note').bind('keypress', () => this.handleEnter.call(this));

	// listen for clicks outside the notes box
	$(document).bind('click', () => this.handleDocumentClick.call(this));

	// listen for clicks on note elements
	$('#notes').on('click', '.note', () => this.handleNoteClick.call(this));
};

// var NotesManager = (function notesModule() {
// 	function addNote(note) {
// 		$('#notes').prepend($("<a href='#'></a>").addClass('note').text(note));
// 	}

// 	function addCurrentNote() {
// 		var current_note = $('#note').val();

// 		if (current_note) {
// 			notes.push(current_note);
// 			addNote(current_note);
// 			$('#note').val('');
// 		}
// 	}

// 	function showHelp() {
// 		$('#help').show();

// 		document.addEventListener(
// 			'click',
// 			function __handler__(evt) {
// 				evt.preventDefault();
// 				evt.stopPropagation();
// 				evt.stopImmediatePropagation();

// 				document.removeEventListener('click', __handler__, true);
// 				hideHelp();
// 			},
// 			true,
// 		);
// 	}

// 	function hideHelp() {
// 		$('#help').hide();
// 	}

// 	function handleOpenHelp(evt) {
// 		if (!$('#help').is(':visible')) {
// 			evt.preventDefault();
// 			evt.stopPropagation();

// 			showHelp();
// 		}
// 	}

// 	function handleAddNote(evt) {
// 		addCurrentNote();
// 	}

// 	function handleEnter(evt) {
// 		if (evt.which == 13) {
// 			addCurrentNote();
// 		}
// 	}

// 	function handleDocumentClick(evt) {
// 		$('#notes').removeClass('active');
// 		$('#notes').children('.note').removeClass('highlighted');
// 	}

// 	function handleNoteClick(evt) {
// 		evt.preventDefault();
// 		evt.stopPropagation();

// 		$('#notes').addClass('active');
// 		$('#notes').children('.note').removeClass('highlighted');
// 		$(evt.target).addClass('highlighted');
// 	}

// 	function init() {
// 		// build the initial list from the existing `notes` data
// 		var html = '';
// 		for (i = 0; i < notes.length; i++) {
// 			html += "<a href='#' class='note'>" + notes[i] + '</a>';
// 		}
// 		$('#notes').html(html);

// 		// listen to "help" button
// 		$('#open_help').bind('click', handleOpenHelp);

// 		// listen to "add" button
// 		$('#add_note').bind('click', handleAddNote);

// 		// listen for <enter> in text box
// 		$('#new_note').bind('keypress', handleEnter);

// 		// listen for clicks outside the notes box
// 		$(document).bind('click', handleDocumentClick);

// 		// listen for clicks on note elements
// 		$('#notes').on('click', '.note', handleNoteClick);
// 	}
// 	function loadData(data) {
// 		notes = [...data];
// 	}
// 	var notes = [];
// 	return {
// 		init,
// 		loadData,
// 	};
// })();

var myNotes = new NotesManager(notes);

$(document).ready(myNotes.init.call(myNotes));
