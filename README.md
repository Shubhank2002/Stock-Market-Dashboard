Deployed Link: Frontend URL - https://stock-market-dashboard-frontend-0aum.onrender.com
                Backend URL - https://stock-market-dashboard-frontend-0aum.onrender.com

Both Frontend and Backend are Deployed on Render                


Development Approach

The development of this stock market dashboard followed a structured MERN stack approach.
I began by designing the data model in MongoDB to store stock market data, where each document represents a single trading day of a company with details like Open, High, Low, Close, Volume, and Deliverable metrics.
The backend was built with Express.js and Mongoose, exposing REST APIs to fetch company lists and stock data. On the frontend, I used React with Context API to manage state, enabling the sidebar to dynamically update the main section based on the selected company.
I focused on making the UI clean and intuitive with Tailwind CSS, while stock performance is visualized using Recharts (bar, pie, and line charts). A default section was also designed to give users a meaningful experience even when no company is selected.

Technologies Used:

MongoDB & Mongoose – Data storage and modeling

Express.js – REST API development

React.js (with Context API) – Frontend and state management

Tailwind CSS – Responsive styling

Recharts – Data visualization with charts

Challenges Encountered:

One major challenge was ensuring the charts looked good against the dashboard’s background theme.
To solve this, I customized grid lines, tooltips, and card styles to blend with the design. Another issue was handling datasets—while real stock data can be large, I structured the API to fetch only relevant records per company to keep performance smooth.
Managing state between the sidebar and main content was also tricky at first, but the Context API helped simplify the flow. Overall, the project helped me deepen my understanding of data-driven UI development and visualization in React.


