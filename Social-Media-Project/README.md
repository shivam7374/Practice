# Social Media Sample Project


## Database Setup

```shell
$ mysql -u root
```

```mysql
create database cbsocialmediadb;

create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';

grant all privileges on cbsocialmediadb.*  to cbsocialuser;

flush privileges;
```

## Project Structure

### Backend (Server)
```shell
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

### Frontend (Client Side Code)

```shell
src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # own own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first / home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js

```
## Business Logic 

### Users

1. **create users** 
    this will create a new user with a random username

### Posts

1. **create post**
    this will create a new post, required fields are 
    - username (the author of this post)
    - title
    - body 

2. **show all posts**
    list all existing posts, we should have following filtering support

    - filter by username
    - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD` 

### Comments 

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**


## API Documentation 

### `users` 

1. `POST /users` 

Creates a new user with random username and an user id

2. `GET /users/{userid}`

Get an user with a given user id

3. `GET /users/{username}`

Get an user with a given username


### `posts` 

1. `GET /posts` 

Get all posts by everyone 

2. `POST /posts` 

Create a new post. 
Required fields in body - 

```
userId=
title=
body=
```



```
Terminal
Output 
mysql> use cbsocialmediadb
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> select * from users;
+----+-------------------+---------------------+---------------------+
| id | username          | createdAt           | updatedAt           |
+----+-------------------+---------------------+---------------------+
|  1 | boundless-piano   | 2020-05-15 14:07:35 | 2020-05-15 14:07:35 |
|  2 | electronic-window | 2020-05-15 14:07:37 | 2020-05-15 14:07:37 |
|  3 | boundless-window  | 2020-05-15 14:07:38 | 2020-05-15 14:07:38 |
|  4 | slim-piano        | 2020-05-15 14:07:39 | 2020-05-15 14:07:39 |
|  5 | dangerous-window  | 2020-05-15 19:38:50 | 2020-05-15 19:38:50 |
|  6 | sleepy-bowl       | 2020-05-16 12:43:36 | 2020-05-16 12:43:36 |
+----+-------------------+---------------------+---------------------+
6 rows in set (0.03 sec)

mysql> select * from users;
+----+-------------------+---------------------+---------------------+
| id | username          | createdAt           | updatedAt           |
+----+-------------------+---------------------+---------------------+
|  1 | boundless-piano   | 2020-05-15 14:07:35 | 2020-05-15 14:07:35 |
|  2 | electronic-window | 2020-05-15 14:07:37 | 2020-05-15 14:07:37 |
|  3 | boundless-window  | 2020-05-15 14:07:38 | 2020-05-15 14:07:38 |
|  4 | slim-piano        | 2020-05-15 14:07:39 | 2020-05-15 14:07:39 |
|  5 | dangerous-window  | 2020-05-15 19:38:50 | 2020-05-15 19:38:50 |
|  6 | sleepy-bowl       | 2020-05-16 12:43:36 | 2020-05-16 12:43:36 |
|  7 | purple-piano      | 2020-05-17 06:02:27 | 2020-05-17 06:02:27 |
+----+-------------------+---------------------+---------------------+
7 rows in set (0.00 sec)

mysql> select * from posts;
+----+-----------------------+----------------------------------------------------------+---------------------+---------------------+--------+
| id | title                 | body                                                     | createdAt           | updatedAt           | userId |
+----+-----------------------+----------------------------------------------------------+---------------------+---------------------+--------+
|  1 | 200 OK                | The request is OK.                                       | 2020-05-15 14:10:38 | 2020-05-15 14:10:38 |      1 |
|  2 | 201 Created           | The request is complete, and a new resource is created . | 2020-05-15 14:11:25 | 2020-05-15 14:11:25 |      1 |
|  3 | 301 Moved Permanently | The requested page has moved to a new url .              | 2020-05-15 14:12:03 | 2020-05-15 14:12:03 |      2 |
|  4 | SS                    | BOSS                                                     | 2020-05-15 20:04:56 | 2020-05-15 20:04:56 |      1 |
|  5 | Arnav Bhaiya          | Mentor of Live Web Dev using Node Js Full Stack          | 2020-05-16 12:57:02 | 2020-05-16 12:57:02 |      4 |
|  6 | Arnav Bhaiya          | Ultimate Mentor                                          | 2020-05-17 05:09:22 | 2020-05-17 05:09:22 |      1 |
|  7 | Shivam Singla         | Hard Working                                             | 2020-05-17 06:23:02 | 2020-05-17 06:23:02 |      6 |
+----+-----------------------+----------------------------------------------------------+---------------------+---------------------+--------+
7 rows in set (0.00 sec)

mysql> select * from comments;
Empty set (0.00 sec)

mysql> select * from posts;
+----+-----------------------+----------------------------------------------------------+---------------------+---------------------+--------+
| id | title                 | body                                                     | createdAt           | updatedAt           | userId |
+----+-----------------------+----------------------------------------------------------+---------------------+---------------------+--------+
|  1 | 200 OK                | The request is OK.                                       | 2020-05-15 14:10:38 | 2020-05-15 14:10:38 |      1 |
|  2 | 201 Created           | The request is complete, and a new resource is created . | 2020-05-15 14:11:25 | 2020-05-15 14:11:25 |      1 |
|  3 | 301 Moved Permanently | The requested page has moved to a new url .              | 2020-05-15 14:12:03 | 2020-05-15 14:12:03 |      2 |
|  4 | SS                    | BOSS                                                     | 2020-05-15 20:04:56 | 2020-05-15 20:04:56 |      1 |
|  5 | Arnav Bhaiya          | Mentor of Live Web Dev using Node Js Full Stack          | 2020-05-16 12:57:02 | 2020-05-16 12:57:02 |      4 |
|  6 | Arnav Bhaiya          | Ultimate Mentor                                          | 2020-05-17 05:09:22 | 2020-05-17 05:09:22 |      1 |
|  7 | Shivam Singla         | Hard Working                                             | 2020-05-17 06:23:02 | 2020-05-17 06:23:02 |      6 |
|  8 | Shivam Singla         | NSUTian 1st Year COE                                     | 2020-05-18 15:52:34 | 2020-05-18 15:52:34 |      6 |
+----+-----------------------+----------------------------------------------------------+---------------------+---------------------+--------+
8 rows in set (0.00 sec)

mysql> select * from comments;
+----+-----------------------+---------------------------------------------+---------------------+---------------------+--------+--------+
| id | title                 | body                                        | createdAt           | updatedAt           | userId | postId |
+----+-----------------------+---------------------------------------------+---------------------+---------------------+--------+--------+
|  1 | 301 Moved Permanently | The requested page has moved to a new url . | 2020-05-18 16:25:20 | 2020-05-18 16:25:20 |   NULL |      2 |
|  2 | Http Server 301       | Fantastic Article!                          | 2020-05-18 16:28:21 | 2020-05-18 16:28:21 |   NULL |      2 |
|  3 | Http Server 301       | Knowledgeable Article!                      | 2020-05-18 16:29:25 | 2020-05-18 16:29:25 |   NULL |      2 |
+----+-----------------------+---------------------------------------------+---------------------+---------------------+--------+--------+
3 rows in set (0.00 sec)

mysql> select * from comments;
+----+-----------------------+---------------------------------------------+---------------------+---------------------+--------+--------+
| id | title                 | body                                        | createdAt           | updatedAt           | userId | postId |
+----+-----------------------+---------------------------------------------+---------------------+---------------------+--------+--------+
|  1 | 301 Moved Permanently | The requested page has moved to a new url . | 2020-05-18 16:25:20 | 2020-05-18 16:25:20 |   NULL |      2 |
|  2 | Http Server 301       | Fantastic Article!                          | 2020-05-18 16:28:21 | 2020-05-18 16:28:21 |   NULL |      2 |
|  3 | Http Server 301       | Knowledgeable Article!                      | 2020-05-18 16:29:25 | 2020-05-18 16:29:25 |   NULL |      2 |
+----+-----------------------+---------------------------------------------+---------------------+---------------------+--------+--------+
3 rows in set (0.02 sec)


mysql>
```