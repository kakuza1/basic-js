const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  	arr: [],
	getLength() {
		this.arr.length;
		return this;
	},
	addLink(value) {
		if (value === undefined) {
			this.arr.push(`(  )`);
		} else this.arr.push(`~~( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (typeof position !== 'number' || position === 0 || position < 0 || !(Number.isInteger(position)) || position > this.arr.length - 1) {
			this.arr = [];
			throw new Error(`You can't remove incorrect link!`)
		} else {
			this.arr.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
		let chain = this.arr.join('').substring(2)
		this.arr = [];
		return chain;
	}
};

module.exports = {
  chainMaker
};
