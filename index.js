#!/usr/bin/env node

const { resolve } = require('path');

const jimp = require('jimp');
const glob = require('glob');
const dotnev = require('dotenv');

dotnev.config();

const {
	WATERMARK_DEBUG,
	WATERMARK_IMAGE,
	WATERMARK_IGNORE,
	WATERMARK_IMAGES,
	WATERMARK_SPACING,
	WATERMARK_OPACITY,
	WATERMARK_POSITION,
	WATERMARK_RESIZE_RATIO
} = process.env;

/**
 * Read an environmental variable,
 * convert it to a number
 * and then limit it between
 * a min and a max values
 * @param {string} variable
 * @param {number} defaultValue
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const useEnvNumber = (variable, defaultValue, min, max) => {
	if (typeof variable === 'undefined' || variable === '') {
		return defaultValue;
	}

	const num = Number(variable);

	return num > max ? max : num < min ? min : num;
};

const ratio = useEnvNumber(WATERMARK_RESIZE_RATIO || '10', 10, 0, 100);
const spacing = useEnvNumber(WATERMARK_SPACING || '2', 2, 0, 100);
const opacity = useEnvNumber(WATERMARK_OPACITY || '0.5', 0.9, 0, 1);
const shouldDebug = WATERMARK_DEBUG === 'true';

if (!WATERMARK_IMAGES) {
	shouldDebug && console.error('No images found.');
	process.exit(1);
}

if (!WATERMARK_IMAGE) {
	shouldDebug && console.error('No watermark found.');
	process.exit(1);
}

const IMAGES = glob.sync(`${resolve(WATERMARK_IMAGES)}/**/*.{jpeg,jpg,png}`).filter(filename => {
	const name = filename.toLowerCase();

	if (typeof WATERMARK_IGNORE === 'undefined' || WATERMARK_IGNORE === '') {
		return true;
	}

	const words = WATERMARK_IGNORE.split('|');
	const matches = words.filter(word => name.includes(word));

	return matches.length === 0;
});

/**
 * Get the x and y coordinates of the watermark
 * @param {jimp} image
 * @param {jimp} watermark
 * @param {number} xMargin
 * @param {number} yMargin
 * @returns {Record<'x' | 'y', number>}
 */
const getCoords = (image, watermark, xMargin, yMargin) => {
	const imageWidth = image.bitmap.width;
	const imageHeight = image.bitmap.height;
	const watermarkWidth = watermark.bitmap.width;
	const watermarkHeight = watermark.bitmap.height;

	switch (WATERMARK_POSITION) {
		case 'N':
			return {
				x: imageWidth / 2 - watermarkWidth / 2,
				y: yMargin
			};
		case 'NE':
			return {
				x: imageWidth - watermarkWidth - xMargin,
				y: yMargin
			};
		case 'E':
			return {
				x: imageWidth - watermarkWidth - xMargin,
				y: imageHeight / 2 - watermarkHeight / 2
			};
		case 'SE':
			return {
				x: imageWidth - watermarkWidth - xMargin,
				y: imageHeight - watermarkHeight - yMargin
			};
		case 'S':
			return {
				x: imageWidth / 2 - watermarkWidth / 2,
				y: imageHeight - watermarkHeight - yMargin
			};
		case 'SW':
			return {
				x: xMargin,
				y: imageHeight - watermarkHeight - yMargin
			};
		case 'W':
			return {
				x: xMargin,
				y: imageHeight / 2 - watermarkHeight / 2
			};
		case 'NW':
			return {
				x: xMargin,
				y: yMargin
			};
		case 'C':
			return {
				x: imageWidth / 2 - watermarkWidth / 2,
				y: imageHeight / 2 - watermarkHeight / 2
			};
		default:
			return {
				x: 0,
				y: 0
			};
	}
};

/**
 * Place a watermark over an image
 * @param {string} src
 */
async function waterMark(src) {
	shouldDebug && console.log('Start processing ' + src);

	const image = await jimp.read(src).catch(() => null);
	const watermark = await jimp.read('./icon.png').catch(() => null);

	if (!image || !watermark) {
		return;
	}

	watermark.resize(image.bitmap.width / ratio, jimp.AUTO);

	const xMargin = (image.bitmap.width * spacing) / 100;
	const yMargin = (image.bitmap.width * spacing) / 100;

	const { x, y } = getCoords(image, watermark, xMargin, yMargin);

	image.composite(watermark, x, y, {
		mode: jimp.BLEND_SOURCE_OVER,
		opacityDest: 1,
		opacitySource: opacity
	});

	await image.writeAsync(src).catch(e => {
		shouldDebug && console.error(e);
	});

	shouldDebug && console.log('Done processing ' + src);
	shouldDebug && console.log('---');
}

(async () => {
	for (const image of IMAGES) {
		await waterMark(image);
	}

	process.exit();
})();

// TODO: Test with the failed images
