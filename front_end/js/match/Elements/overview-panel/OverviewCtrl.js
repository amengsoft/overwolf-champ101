"use strict";
steal(
	'can'
	, 'Routes.js'
	, function (can
		, /**Routes*/ Routes) {

		/**
		 * @see OverviewCtrl.init
		 */
		var OverviewCtrl = can.Control.extend('OverviewCtrl', {
			defaults: {
				overviewTmpl: 'templates/match-overview.mustache'
			}
		}, {
			/**
			 *
			 * @param el
			 * @param options.match {MatchModel}
			 */
			init: function (el, options) {
				this.renderView(options.match.blue, options.match.purple);
			},
			renderView: function (teamBlue, teamPurple) {
				steal.dev.log("rendering view for OverviewCtrl");

				teamBlue = correctSpritePosition(teamBlue);
				teamPurple = correctSpritePosition(teamPurple);

				debugger;
				this.element.html(
					can.view(this.options.overviewTmpl, {
						blue: teamBlue,
						purple: teamPurple
					})
				);


				//debugger;
				// NOTE: correction for black "border" when using sprite in match overview
				function correctSpritePosition(teamArray){
					for (var i = 0; i < teamArray.length; i++) {
						var image = teamArray[i].champ.attr('image');
						image.attr('x', image.x + 2);
						image.attr('y', image.y + 2);
					}
					return teamArray;
				}
			},
			'.portrait mouseenter': function ($el, ev) {
				//steal.dev.log('.portrait mouseenter');
				var $panel = $el.closest('.panel');
				can.route.attr({
					route: Routes.tooltipChampion,
					champ: $el.attr('title'),
					overview: true,
					y: $panel.offset().top + $panel.height()
				});
			},
			'.portrait mouseout': function ($el, ev) {
				//steal.dev.log('.portrait mouseout');
				can.route.attr({
					route: Routes.tooltipHide
				});
			},
			'.portrait click': function ($el, ev) {
				//steal.dev.log('.portrait click');
				can.route.attr({route: Routes.panelChampion, champ: $el.attr('title')});
				$el.removeClass('addable');
			},
			'.show-team.blue click': function ($el, ev) {
				can.route.attr({team: 'blue', route: Routes.panelTeam});
				ev.stopPropagation();
				$('.team.blue').find('.portrait').removeClass('addable');
				$('.show-team.blue').removeClass('addable');

			},
			'.show-team.purple click': function ($el, ev) {
				can.route.attr({team: 'purple', route: Routes.panelTeam});
				ev.stopPropagation();
				$('.show-team.purple').removeClass('addable');
				$('.team.purple').find('.portrait').removeClass('addable');
			}
		});
		return OverviewCtrl;
	});