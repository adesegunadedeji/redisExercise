const Sets = (redis)=> {

    redis.sadd('beverages', 'water', 'juice', 'soda', 'coffee');
    redis.smembers('beverages', (err, res)=> {
        console.log(res);
    });

    redis.sadd('spices', "Ground Onion", "Black Pepper", "Curry", "Chilli Peppers");
    redis.smembers('spices', (err, res)=> {
        console.log(res);
    });

    redis.sismember('spices', 'Thyme', (err, res)=> {
        console.log(res);
    });

    redis.sadd('beverages:juice', 'apple', 'orange', "Black Currant");
    redis.sadd('beverages:juice', 'apple', 'orange', "Black Currant");
    redis.smembers('beverages:juice', (err,res)=> {
        console.log(res);
    });

    redis.sunionstore('beverages:beer', 'beverages:juice');
    redis.smembers('beverages:beer', (err, res)=> {
        console.log(res, "Root Beer");
    });

    redis.scard('beverages', (err, res)=> {
        console.log(res);
    });


    redis.spop('beverages:beer');
    redis.smembers('beverages:beer', (err, res)=> {
        console.log(res, "Root Beer");
    });





    // redis.sunionstore('')

}

export default Sets;