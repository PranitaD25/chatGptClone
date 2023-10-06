# chatGptClone

Chatgpt is replica of Chatgpt app with fully functional backend.
When a question or prompt is given by a user,app looks for same question or input in the mongodb database.If same input is present,it fetches the answer from the database and saves time of calling openai api and waiting for answer,Otherwise if question is new, it gets the ans from Open API key and stores the Q&A for future use.Used HTML and Tailwind CSS to design frontend of application.  Flask is used as web framework,Mongodb Atlas to store data on cloud.Connection with database is done with help of Mongoose.


## Features

- Screen compatible
- Answers in real time
- Fullscreen mode
- Generate same question in one click



## Tech Stack

**Client:** Html,TailwindCSS

**Server:** Node, Flask


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

Learned to call api and fetch response in real time and use it.
Tailwind CSS offers enhanced functionality and easy development.
Mongodb is useful to store unstructured data of api's if any
Developing a good frontend is always challenging yet productive.
## Acknowledgements

 - [openAI](https://platform.openai.com/docs/quickstart)
 - [chatgpt](https://chat.openai.com/)
 - [Flask Minimal App](https://flask.palletsprojects.com/en/1.1.x/quickstart/)


## Authors

- [Pranita Deshpande]()

