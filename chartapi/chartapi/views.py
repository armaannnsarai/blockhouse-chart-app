from django.http import HttpResponse, JsonResponse


def index(request):
    return HttpResponse("Hello, world.")


def candlestick_data(req):
    return JsonResponse(
        {
            "x": "Candlestick",
            "y": [
                {"x": "2023-01-01", "o": 30, "h": 40, "l": 25, "c": 35},
                {"x": "2023-01-02", "o": 35, "h": 45, "l": 30, "c": 40},
            ],
        }
    )


def line_data(req):
    return JsonResponse({"x": ["Jan", "Feb", "Mar", "Apr"], "y": [10, 20, 30, 40]})


def bar_data(req):
    return JsonResponse(
        {"x": ["Product A", "Product B", "Product C"], "y": [100, 150, 200]}
    )


def pie_data(req):
    return JsonResponse({"x": ["Red", "Blue", "Yellow"], "y": [300, 50, 100]})
