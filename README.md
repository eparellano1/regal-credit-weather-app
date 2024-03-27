# React Weather App
A weather app with 5 day forecast based on React

## App Usage
By default, the app shows the current weather conditions of Manila.

To search for a city, just type in any city in the input bar and click search.

It is also important to note that the maximum API calls per day for the free version of AccuWeather API is **50 per day**, so try not to hit this limit when searching for a city.

## Live App
You can use the live app by clicking [**HERE**](https://regal-credit-weather-app.netlify.app)


Alternatively, you can install and run the app locally on your machine using the steps below:


## Local Installation
Using the terminal, clone the repo to your local machine

```
git clone https://github.com/eparellano1/regal-credit-weather-app.git
```
Go into the directory then install the packages

```
cd regal-credit-weather-app
npm install
```

After the packages are installed, create a `.env` file in the root of the project and enter your API key from Accuweather with the format
```
VITE_REACT_APP_API_KEY = YOUR_API_KEY
```

After you have assigned your api key in the `.env` file, run the front end by entering the command in the terminal
```
npm run dev
```


You can now access the app via your browser using the URL: [http://localhost:5173/](http://localhost:5173/)

## References and Documentation
- All code written in this project are all **self-made** unless stated otherwise

- App layout inspired by [GreatStack](https://www.youtube.com/watch?v=7JqdjWB88Kk)

- All icons were retrieved from [Flaticon](https://www.flaticon.com/) and [IconScout](https://iconscout.com/unicons)
- Frameworks and packages used: 
    1. React v18.2.0
    2. Vite v5.2.0 
    3. Dotenv v16.4.5
    4. TailwindCSS v3.4.1 
    5. Framer Motion v11.0.21

