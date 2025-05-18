app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    mood = data.get("mood")
    sleep = int(data.get("sleep"))
    stress = int(data.get("stress"))

    # BASIC MOCK LOGIC
    if stress >= 8 or sleep < 4 or mood in ["sad", "anxious"]:
        risk = "High"
    elif stress >= 5 or sleep < 6:
        risk = "Moderate"
    else:
        risk = "Low"

    return jsonify({"risk": risk})
