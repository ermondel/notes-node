![Node.js ](https://github.com/ermondel/tsttmp/blob/master/files/icons48b/Nodejs48v2.png)

## User Notes CLI App

_Project for Udemy NodeJS course._

### About

Adding, reading, displaying a list, deleting user notes in the command line interface.

### Install

Use the Download ZIP button, then unzip it, go to the directory and run the command

```
npm install
```

### Usage

get a list of notes

```

node app.js list

```

get help

```

node app.js --help

```

add a new note

```

node app.js add --title="bill" --body="to pay the bill"

```

read note

```

node app.js read --title="bill"

```

remove note

```

node app.js remove --title="bill"

```

### Technologies

| name    | description                                    |
| ------- | ---------------------------------------------- |
| Node.js | cross-platform JavaScript run-time environment |
| Yargs   | building interactive command line tools        |
| chalk   | terminal string styling                        |
