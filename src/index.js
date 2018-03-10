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
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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