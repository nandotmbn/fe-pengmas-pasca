const withImages = require("next-images");
const removeImports = require("next-remove-imports");
const withTM = require("next-transpile-modules");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: false,
  },
  transpilePackages: ["next-transpile-modules"],
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false,
  },
  images: {
    disableStaticImages: true,
    domains: ["192.168.0.109", "localhost", "pascasarjana-s3.s3.ap-southeast-1.amazonaws.com"],
  },
};

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withPWA, withTM, withImages, removeImports];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...nextConfig });
};

/*
(
  removeImports(
    withImages({
      i18n: {
        locales: ["id", "en"],
        defaultLocale: "id",
        localeDetection: false,
      },
      images: {
        disableStaticImages: true,
        domains: ["192.168.0.109", "localhost", "pascasarjana-s3.s3.ap-southeast-1.amazonaws.com"],
      },
    })
  )
);
*/
