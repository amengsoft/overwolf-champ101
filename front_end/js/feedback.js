/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Entry point for feedback.html
/////////////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";
steal(
	'FeedbackCtrl.js'
	, 'Routes.js'
	, function (/**FeedbackCtrl*/ FeedbackCtrl
		, /**Routes*/ Routes) {

		Routes.ready();

		var feedback = new FeedbackCtrl('#content');
	});