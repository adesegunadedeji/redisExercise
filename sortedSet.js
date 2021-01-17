const SortedSets = (redis)=> {


    redis.zadd('rockets', 1990, 'Pegasus', 1990, 'Atlas', 1991, 'Atlas I', 1995, 'Delta III',
    2000, 'Minotaur I', 2000, 'Minotaur II', 2006, 'Falcon I', 2020, 'SpaceX');

    redis.zrange('rockets', 0, -1, 'withscores', (err, res)=> {
        console.log(res);
    });

    redis.zrangebyscore('rockets', '-inf', 2000, 'withscores', (err, res)=> {
        console.log(res);
    } 
    );

}

export default SortedSets;