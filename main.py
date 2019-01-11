from sanic import Sanic
from sanic.log import logger
from sanic.response import json,text
from redis_conn import RedisConn
from sanic_cors import CORS, cross_origin

redis_conn = RedisConn().redis_conn()

app = Sanic()
CORS(app, automatic_options=True)

@app.route("/api/name", methods=['GET'])
async def get_name(request):
    name = redis_conn.get('name')
    return json({"name": name})

@app.route("/api/name", methods=['DELETE'])
async def del_name(request):
    redis_conn.delete('name')
    return json({"name": "deleted"})

@app.route("/api/name", methods=['POST'])
async def new_name(request):
    redis_conn.set('name',request.json['newName'])
    return json({"name":request.json['newName']})

@app.route("/api/name", methods=['PUT'])
async def update_name(request):
    redis_conn.set('name',request.json['updateName'])
    return json({"name":request.json['updateName']})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000, debug=True)
