[![Github Build](https://github.com/scriptex/node-jimp-watermark/workflows/Build/badge.svg)](https://github.com/scriptex/node-jimp-watermark/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/node-jimp-watermark/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/node-jimp-watermark&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-node-jimp-watermark-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/node-jimp-watermark/badge)](https://www.codefactor.io/repository/github/scriptex/node-jimp-watermark)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/node-jimp-watermark/README.md?pixel)](https://github.com/scriptex/node-jimp-watermark/)

# Node Jimp Watermark

> Add watermark to images using NodeJS and Jimp

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/node-jimp-watermark?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/node-jimp-watermark?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/node-jimp-watermark?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/node-jimp-watermark)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/node-jimp-watermark?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/node-jimp-watermark?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/node-jimp-watermark?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/node-jimp-watermark?style=plastic)

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

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
