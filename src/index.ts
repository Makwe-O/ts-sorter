import Sorter from './Sorter';
import NumberCollection from './NumberCollection';
import StringCollection from './StringCollection';

const collection = new NumberCollection([1, 2, 3, 43, 2, 2]);
const collection2 = new StringCollection('mmakwe');
const arr = new Sorter(collection);
const arr2 = new Sorter(collection2);

arr.sort();
arr2.sort();
