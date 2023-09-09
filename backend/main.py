from flask import Flask, request
from chatbot import setup_auth, Inference
import sys

app = Flask(__name__)
setup_auth("Main")
ChatBotInstance = Inference()

@app.route("/")
def hello_world():
    return {"status": "ok"}

@app.post("/query")
async def handleQuery():
    query = request.json

    result = await ChatBotInstance.evalQuery(query['query'])

    return {"result": "ok", "output": result}

if __name__ == "__main__":
    try:
        app.run(host="localhost", port=8081)
    except KeyboardInterrupt:
        print("Ctrl + C event recieved\nExiting...")
        sys.exit(0)