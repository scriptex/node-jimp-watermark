[![GitHub issues](https://img.shields.io/github/issues/scriptex/node-jimp-watermark.svg)](https://github.com/scriptex/node-jimp-watermark/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/node-jimp-watermark.svg)](https://github.com/scriptex/node-jimp-watermark/commits/master)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/node-jimp-watermark/README.md)](https://github.com/scriptex/node-jimp-watermark/)

# Node Jimp Watermark

> Add watermark to images using NodeJS and Jimp

## Usage

1. Clone [this repository](https://github.com/scriptex/node-jimp-watermark)
2. Copy `.env.example` to `.env`
3. Set values to all environmental variables in the `.env` file:

    ```sh
    # Turns on/off console logging
    WATERMARK_DEBUG=true

    # Absolute path to the file which will be used as a watermark
    WATERMARK_IMAGE=/Users/user/projects/icon.png

    # Absolute path to the folder containing the images
    WATERMARK_IMAGES=/Users/user/projects/images

    # Spacing between the watermark and the image edges
    # in percentage (from 0 to 100)
    WATERMARK_SPACING=2

    # Opacity of the watermark when placed over the image
    WATERMARK_OPACITY=0.5

    # Ratio in percentage (from 0 to 100) relative to
    # the watermarked image which is used to resize
    # the watermark if the watermark is larger
    WATERMARK_RESIZE_RATIO=10

    # The position of the watermark.
    # Possible values are:
    # N (north),
    # NE (northeast),
    # E (east),
    # SE (southeast),
    # S (south),
    # SW (southwest),
    # W (west),
    # NW (northwest),
    # C (center)
    WATERMARK_POSITION=SE

    # A pipe split words which shouldn't be found in the images file names
    WATERMARK_IGNORE=logo|icon|banner|unsplash|placeholder
    ```

4. Run `yarn start`
5. Profit

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fnode-jimp-watermark&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate on PayPal](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/scriptex)
[![Donate on Liberapay](https://img.shields.io/liberapay/receives/scriptex.svg?logo=liberapay)](https://liberapay.com/scriptex/)
[![Donate on Issuehunt](https://raw.githubusercontent.com/BoostIO/issuehunt-materials/master/v1/issuehunt-shield-v1.svg)](https://issuehunt.io/r/scriptex/node-jimp-watermark)

## LICENSE

MIT

```

```
