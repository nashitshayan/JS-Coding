const CDN = (s) => `https://cdnjs.cloudflare.com/ajax/libs/${s}`;
const ramda = CDN('ramda/0.21.0/ramda.min');
const jquery = CDN('jquery/3.0.0-rc1/jquery.min');

requirejs.config({ paths: { ramda, jquery } });
requirejs(['jquery', 'ramda'], ($, { compose, curry, map, prop }) => {
	//app goes here
	const Impure = {
		getJSON: curry((callback, url) => $.getJSON(url, callback)),
		setHTML: curry((sel, html) => $(sel).html(html)),
		trace: curry((tag, x) => {
			console.log(tag, x);
			return x;
		}),
	};

	const host = 'api.flickr.com';
	const path = '/services/feeds/photos_public.gne';
	const query = (t) => `?tags=${t}&format=json&jsoncallback=?`;
	const url = (t) => `https://${host}${path}${query(t)}`;

	const app = compose(Impure.getJSON(Impure.trace('response')), url);
	app('cats');
});
