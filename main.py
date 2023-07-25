from flask import Flask,render_template,jsonify,request
from flask_pymongo import PyMongo

import openai
openai.api_key = "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"


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://pranita:pranita@chatgpt.qp0y4b9.mongodb.net/chatgpt"
mongo = PyMongo(app)


@app.route('/')
def home():
    chats = mongo.db.chats.find({})

     # Convert the MongoDB Cursor to a list and reverse it to get the latest chats first
    all_chats = list(chats)[::-1]

    # Get only the last 3 chats
    last_3_chats = all_chats[:3]

    # Pass the last 3 chats to the template for rendering
    return render_template("index.html", myChats=last_3_chats)


@app.route("/api",methods=["GET","POST"])
def qa():
    if request.method=="POST":
        question=request.json.get("question")
        chat=mongo.db.chats.find_one({"question":question})
        if chat:
        #    data={"question":question,"answer":f"{chat['answer']}"}
           data ={"question": question, "answer": chat['answer']}
           return jsonify(data)
        else:
             # Format the 'question' as a message object
            message = {
                'role': 'user',
                'content': question
            }

            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[message], 
                temperature=1,
                max_tokens=256,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )

            print(response) 
            answer_text = response["choices"][0]["message"]["content"]
            data = {"question": question, "answer": answer_text}
    

           # Save the chat in the database for future reference
            mongo.db.chats.insert_one({"question":question,"answer":answer_text})
            return jsonify(data)

app.run(debug=True)