Reactjs gallery app fetching images from [unsplash](https://unsplash.com/) and showing images according to search

## Installation

Node js is required, you can download it from [Here](https://nodejs.org/en/)

After installing node js download this project and open the project in vs code and open terminal and run this command
```bash
npm i
```
the above command will fetch the essential modules.

After that run the following command to run the App.

```bash
npm start
```
## Docker installation

If you want to use the app using you can follow these instructions. 

Docker is required, you can download it from [Here](https://hub.docker.com/)

After installing Docker download this project and open the project in vs code and open terminal and run this command

```bash
docker build —tag react .
```
If you haven’t opened the terminal in the project folder then replace "." with the path of the project 

```bash
docker run —publish 3000:3000 react
```

The App will run after this on localhost.
