# Stock Series App

### Description

Stock data can be overwhelming and confusing. Stock Series is a user friendly app that displays key data on the S&P 500 stocks. Users can learn about the companies stock performance including the high/low value, volume, 52 week high/low values, earning per share, and a time series graph of high/low values over the last month. The Stock Series app also provides a description of the stock selected, allowing users to learn more about the companies background and purpose. If users are curious about learning more, Stock Series offers a news feed section with recent news articles relating to the selected stock and a link to the direct article.

Overall, the stock series app is a great resource for users with limited and expansive stock knowledge to learn more about the S&P500 stocks.

### Wireframe and React Componenet Hierarchy

- [Wireframe](https://res.cloudinary.com/dhwx7jnjx/image/upload/v1668543047/FullSizeRender_vyj6lu.jpg)

- [Component Hierarchy](https://res.cloudinary.com/dhwx7jnjx/image/upload/v1668630442/IMG_0029_xfvfz3.jpg)

### API

- [Polygon News Articles](https://api.polygon.io/v2/reference/news?ticker=AAPL&apiKey=yQnhLxouu8Eo81nORx2a7bfCviPQyq6u)

- [Alpha Advantage Key Data](https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo)

  - Exchange, Sector, Industry, 52 Week High, 52 Week Low, and Earnings per share

- [Alpha Advantage Key Data](https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=META&apikey=L9CIXKF2CPVF19PV)

  - High, Low, Volume

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

### Additional Libraries

- Axios
- RevCharts

### Code Snippet:

`<YAxis type="number" domain={[0, (dataMax) => Math.round((dataMax) + 50)]} allowDataOverflow={false}/>`

### Issues and Resolutions:

- Error: API allowed 5 calls/minute. Text search feature called the API everytime letter was clicked.

  - Resolution: Create own data set of S&P 500 to create a drop down menu of company names and stock tickers to prevent a call to the API.

- Error: The API data updates every 24 hours except for weekends. When retrieving the daily high/low prices, I needed to account for weekends since the key to access the data is the date.

  - Resolution: Set up a conditional statement to prevent it from returning data on either Saturday or Sunday.

- Error: API allowed 5 calls/minute which prevented accessing data to render the graph.

  - Resolution: I used a different API that had the same data to render on the graph. The data was also formatted in a way that was easier to access for the graph.

- Error: Graph not adjusting for certain company high/low values on the y-axis.

  - Resolution: I needed to add a domain and used Math.random() to get a whole number.

- Error: Date of news article is in the incorrect format.

  - Resolution: I tried to use .toLocaleDateString to the date section of the articles, but I kept on getting an error that .toLocaleDateString is not an object. As a work around, I trimmed the date and inserted hyphens.

- Error: Some stocks/companies don't have news articles available in the data.

  - Resolution: Make a conditional to display only if there is data for the specific stock/company.

- Error: Error in console: "Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '2022-11-09') at getValues" on KeyData.
  - Resolution: The getValues function was moved to the Container component. Another state was also added called additionalKeyData. This allowed me to expand on the keyData state.

### Future Plans:

- Include a type search bar
- Include temporary data for the home screen so it isn't blank when you first arrive
- Have a rounded value on the y-axis ending in 0 or 5
- Improve styling
  - add rotating banner of stock tickers
