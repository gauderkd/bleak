# Bleak

An elegant AJAX driven theme for [Ghost](http://github.com/tryghost/ghost/) by [Peter Amende](http://zutrinken.com/).

Edits made by [Kyle Gauder](http://fdraconis.com). You can find the original theme [here](https://github.com/zutrinken/bleak).

***

Here is what the edited theme looks like
![Bleak-Draconis Theme Example](https://github.com/gauderkd/bleak-Draconis/blob/master/assets/bleak-draconis-example.png)

## Main Features
- _Subscriber Button Support!_
- Easy CSS Variables for changing Theme Color scheme and Fonts
- Menu pushed into top bar as text
- Different hover effect for Featured posts
- Social Icons (from [Font Awesome](http://fontawesome.io/icons/)) with hover effects
- [Hover.css](https://github.com/IanLunn/Hover)
- Increased excerpt length
- Author bios at bottom of Post Pages (similar to Casper theme)

[Click here to see the theme in action](http://www.fdraconis.com/)

# Main Edited Files

### index.hbs

- Added Social Icons using [Font Awesome](http://fontawesome.io/icons/).

### default.hbs

- Added link to [Font Awesome](http://fontawesome.io/icons/) stylesheet
- Removed ".nav-menu" and ".menu" hierarchy (no pop-up menu).
- Moved {{navigation}} HB expression from footer to body where nav-menu was

## posts.hbs

- Added code in footer for bios
- Includes picture, bio, location and website link

### /partials/loop.hbs

- Changed "post-excerpt" word number from 15 to 50 (line 19)

### /partials/navigation.hbs

- Removed "#menu" hierarchy completely and replaced with simple ".drakonav" <nav> tag (gets rid of pop-up menu structure, pushes menu into top bar)
- Changed list class from ".menu-list-item" to ".drakolist"

### style.css

- Reformatted code (never worked with sourcemapping before :c )
- Added CSS variable "root" container.
- This has four variables: Main color, secondary Color, Title Font, and main "everything else" font
- _Font color of hover'd <a> tag links is on line 154. This needs to be changed manually. It didn't like the variable..._
- Added support for Kankin Font
- Changed all instances of Color Code: #36D995 to Main color variable
- Changed all instances of Color Code: #2DB77E to Secondary color variable
- Added font-family: Title Font variable for .header-name
- Added featured:hovered coding for different effect when hovering over a Featured post
- Added styling for navigation bar to make it appear along the top bar (aligned to the right)
- Added hover effects for Font Awesome social icons

# The Rest of The Readme

## Zutrinken's Features

* Responsive layout
* Blog navigation
* Post navigation
* Cover images for blog, tag and author archives
* Featured posts style
* Automatic code syntax highlight and line numbers
* Disqus support
* Sharing buttons

## Disqus Setup

To enable [Disqus](https://disqus.com/) comments go to your blogs code injection settings and add `<script>var disqus="YOUR_DISQUS_SHORTNAME";</script>` to your blog header.

## Development

Install [Grunt](http://gruntjs.com/getting-started/):

	npm install -g grunt-cli

Install Grunt modules:

	npm install

Install [Bower](http://bower.io):

	npm install -g bower

Install Bower components:

	bower install

Build Grunt project:

	grunt

Distribute Grunt project:

	grunt build

## Copyright & License

Copyright (C) 2015-2016 Peter Amende - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
