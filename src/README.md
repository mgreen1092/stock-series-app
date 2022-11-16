# Stock Series App

### Wireframe and React Componenet Hierarchy

- [Wireframe](https://res.cloudinary.com/dhwx7jnjx/image/upload/v1668543047/FullSizeRender_vyj6lu.jpg)

- [Component Hierarchy](https://res.cloudinary.com/dhwx7jnjx/image/upload/v1668630442/IMG_0029_xfvfz3.jpg)

### API

- [Alpha Advantage News](https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=WMT&topics=technology&apikey=L9CIXKF2CPVF19PV.)

- [Alpha Advantage Key Data](https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo)

- [Twelve Data Time Series](https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=8fbbb93916fd4d0bb531696e24ca8115)

### MVP Goals:

- Webpage with option to select stock
- Shows price/volume and information about the stock
- Have a chart/graph demonstrating historical data

### Post MVP Goals:

- Use D3 to make a graph of stock prices over time
- Related news articles about selected stock

### Components:

| Component    | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| App          | Contains the header, make the initial data pull and include React Router |
| Header       | Includes the nav and will render the container                           |
| Container    | Includes KeyData, Articles, Graph, and Symbol holds API fetch            |
| KeyData      | Displays all key data elements of the webpage                            |
| Articles     | Displays news articles of related stock information                      |
| Graph        | Displays time series data                                                |
| SymbolSearch | Displays dropdown of S&P 500 stocks                                      |
| Description  | Adds description of the company selected                                 |

### Time Frames:

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | -------- | -------------- | ------------- | ----------- |
| Working with API | H        | 3 hours        | 4 hours       | 4 hours     |
| Search Bar       | H        | 1.5 hours      | 1 hour        | 1 hour      |
| Graph            | M        | 2 hours        | 1 hour        | 1 hour      |
| Articles         | M        | 2 hours        | 1 hour        | 1 hour      |
| Key data         | H        | 3 hours        | 3 hours       | 3 hours     |

### Code Snippet:

### Issues and Resolutions:

Error: API allowed 5 calls/minute. Text search feature called the API everytime letter was clicked.
Resolution: Create own data set of S&P 500 to create a drop down menu of company names and stock tickers to prevent a call to the API.

Error: The API data updates every 24 hours except for weekends. When retrieving the daily high/low prices, I needed to account for weekends since the key to access the data is the date.
Resolution: Set up a conditional statement to prevent it from returning data on either Saturday or Sunday.

Error: API allowed 5 calls/minute which prevented accessing data to render the graph.
Resolution: I used a different API that had the same data to render on the graph. The data was also formatted in a way that was easier to access for the graph.

Error: Graph not adjusting for certain company high/low values on the y-axis.
Resolution: I needed to add a domain and used Math.random() to get a whole number.

Error: Date of news article is in the incorrect format.
Resolution:

Error: Some stocks/companies don't have news articles available in the data.
Resolution: Make a conditional to display only if there is data for the specific stock/company.
