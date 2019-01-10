# class for redis connection 

import redis

class RedisConn(object):

    def redis_conn(self):
   
        return redis.Redis(
                           host='localhost',
                           port=6379,
                           password='')

