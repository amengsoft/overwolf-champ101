/**
 * include Spec-files here
 *
 * include Source-files within the spec-files
 */
import jasmineRequire from 'steal-jasmine';

// for console-reporting uncomment
//import '../lib/jasmine-chrome-console-reporter';
//import '../lib/jasmine-boot-console';

// jasmine add-ons
import '../lib/jasmine-ajax';
//import '../lib/jasmine-fixture/jasmine-fixture';
import '../lib/jasmine-jquery';

// utility files and mocks
import '../helper/overwolfMock';
import './documentation.spec';

// main-files
import './WindowCtrl.spec';
import './MainCtrl.spec';
import './SettingsCtrl.spec';
import './SettingsModel.spec';
import './SettingsProvider.spec';
import './match/MatchCtrl.spec';
import './match/MatchModel.spec'
import './Routes.spec';
import 'Boot.spec';

beforeEach(function () {
	localStorage.clear();
});

afterEach(function () {
});

afterAll(function () {

	window.setTimeout(function () { // modifying the html output after it has been generated
		$('.stack-trace').each(function () {
			// marking the relevant lines of stacktraces after
			// all tests have been run and text got inserted into the DOM
			var html = $(this).html().replace(/(.*tests\/spec.*)/, '<strong style="color:blue;">$1</strong>');
			$(this).html(html);
		});

		$('.suite').each(function () { // modifying suites
			var $specs = $(this).find('.specs');
			var countSpecs = $specs.children().length;
			//if (countSpecs > 0 && countSpecs == $specs.children('.disabled').length)
			//	$(this).remove();// remove suites that are disabled and not empty

			if (countSpecs > 0 && countSpecs == $specs.children('.passed').length)
				$(this).remove(); // remove suites that are not empty and passed completely
		});
	}, 10);
});