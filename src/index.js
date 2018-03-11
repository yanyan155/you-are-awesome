// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
	return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
	return Symbol(propertyName);
};

const createProtoMagicObject = () => {

	var res = function () {};
	res.__proto__ = res.prototype;
	return res;
};

var count = 0;
const incrementor = () => {

	count ++;

	function recursion() {
    count ++;
    return recursion;
  }

  recursion.toString = function() {
    return count; 
  };

  return recursion;
};

const asyncIncrementor = () => {
	
};

const createIncrementer = () => {

    return {
    	[Symbol.iterator]() {
        	return this;
    	},
    	value: 0,
    	next() {
        	this.value++;
        	return { value: this.value};
    	}
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};

const getDeepPropertiesCount = (obj) => {
	var count = 0;
	function recursion (obj) {
		for (var key in obj) {
			count++;
			if (Object.keys(obj[key]).length > 0) {
				var res = recursion(obj[key]);
			}
		}
		return count;
	}
	return recursion(obj);
};

const createSerializedObject = () => {
	
};
const toBuffer = () => {};
const sortByProto = (array) => {
	var res = array.sort(function(a, b) {
	  return a.isPrototypeOf(b);
	});
	return res;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;