microscope-ws (ES6)
====================

## NOT NPM READY YET

ES6, Socket.IO fully compatible, POO WebSocket framework.

[![Build Status](https://travis-ci.org/microscopejs/microscope-web-es6.svg?branch=master)](https://travis-ci.org/microscopejs/microscope-web-es6)

![microscopejs](http://microscopejs.com/images/mcsp_bg.png)

Requirements
------------

* node
* npm
* gulp

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install gulp (sudo on linux/OSX) :

	npm install gulp -g

#### install dependencies (sudo on linux/OSX) :

	npm install

Development commands
--------------------

#### test (run gulp test):

	npm test

#### build:

	gulp build

* compile src with babel to lib folder

#### test:

	gulp test
	
* validate source code (jsHint).

#### docs:

	gulp docs
	
* generate annoted code documentation (docco).
* generate annoted code samples documentation (docco).

How to use ?
============

Show : ./samples

Roadmap
=======

* improve unit testing
* deploy to npm as replacement for microscope-ws