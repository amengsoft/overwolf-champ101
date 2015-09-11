"use strict";
var can = require('can');
var Routes = {
	// TooltipCtrl
	tooltipChampion: 'tooltip/champ/:champ',
	tooltipSpell: 'tooltip/champ/:champ/:index',
	tooltipHide: 'tooltip/hide',

	// MatchCtrl
	/** Toggles all Panels */
	togglePanels: 'toggle/all',
	showPanels: 'show/all',
	/** removes the panel with given id (0 = uppermost panel) */
	closePanel: 'close/panel/:id',
	closeAllPanels: 'close/panel/all',

	// ChampionCtrl
	panelChampion: 'add/:champ',
	panelTeam: 'show/:team',

	// OverviewController
	reloadMatch: 'reload/match',

	// WindowController
	openWindow: 'open/:window',
	closeWindow: 'close/:window',
	minimizeWindow: 'minimize/:window',
	restoreWindow: 'restore/:window',
	refreshWindow: 'refresh/:window',
	toggleWindow: 'toggle/:window',

	ready: function () {

		// TooltipCtrl
		can.route('#!' + Routes.tooltipChampion);
		can.route('#!' + Routes.tooltipSpell);
		can.route('#!' + Routes.tooltipHide);

		// MatchCtrl
		can.route('#!' + Routes.closePanel);
		can.route('#!' + Routes.closeAllPanels);
		can.route('#!' + Routes.showPanels);


		// ChampionCtrl
		can.route('#!' + Routes.togglePanels);
		can.route('#!' + Routes.panelChampion);
		can.route('#!' + Routes.panelTeam);

		// OverviewCtrl
		can.route('!#' + Routes.reloadMatch);

		// WindowController
		can.route('!#' + Routes.openWindow);
		can.route('!#' + Routes.closeWindow);
		can.route('!#' + Routes.minimizeWindow);
		can.route('!#' + Routes.restoreWindow);
		can.route('!#' + Routes.refreshWindow);
		can.route('!#' + Routes.toggleWindow);

		can.route.ready();
	}

};
module.exports = Routes;