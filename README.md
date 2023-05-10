# movie-search-frontend
1 ) this is my backend source code .
2 ) if You want to download and run the Code , you just clone from git hub and open the terminal and run the command (npm install)
3 ) the above command will automatically install all the packages required to run the application 
4 ) the only need is Database connection String , and that is i configured with Deployment environment .
5 ) here I used (express, cors , mongodb , monngoose ) and for database I used (Mongodb Atlas)  a free online database provider
6 ) in your case you need create file named (.env) .
7 ) inside this file you have to give two variables like this .

MONGODB_URL = "Your Database connection String of mongodb Atlas";
PORT = 5000


that solve !
