import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import Lists from './list';
import Sets from './sets';
import SortedSets from './sortedSet';


const redis = new Redis({
  password: 'man0613man'  
});
//Pass in the redis as an argument in the function.
Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSets(redis);



