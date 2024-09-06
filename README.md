# blockhouse-chart-app

## Setup and run frontend

First, move to the chart-app directory:

```bash
cd chart-app
```

Then, install the dependencies:

```bash
npm install
```

Then, run the app in development mode:

```bash
npm run dev
```

## Setup and run backend

First, move to the chartapi directory:

```bash
cd chartapi
```

Then, install the dependencies:

```bash
pip install -r requirements.txt
```

Then, run the app in development mode:

```bash
python manage.py runserver
```

## Thought Process Behind the Code (Steps)

1. Create a dashboard with a grid to show the graphs.
2. Hardcode data sets into json files.
3. Create graphs and try to render the data.
4. If graphs rendered correctly, create a Django database.
5. Create a REST API to be able to request json formatted information.
6. Add the API endpoints into the react components.
7. Handle any errors.
