const withImages = require("next-images");
const removeImports = require("next-remove-imports")();
const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);
module.exports = withTM(
	removeImports(
		withImages({
			i18n: {
				locales: ["id", "en"],
				defaultLocale: "id",
				localeDetection: false,
			},
			images: {
				disableStaticImages: true,
				domains: [
					'192.168.0.109',
					"localhost",
					"pascasarjana-s3.s3.ap-southeast-1.amazonaws.com",
				],
			},
		})
	)
);
