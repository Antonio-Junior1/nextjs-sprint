from flask import Flask, request, jsonify
from flask_cors import CORS  # Importar CORS
import pickle

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas as rotas

# Carregar o modelo e o vetorizador TF-IDF
with open('modelo_random_forest2.pkl', 'rb') as f:
    modelo = pickle.load(f)

with open('tfidf_vectorizer.pkl', 'rb') as v:
    vetorizador = pickle.load(v)

@app.route('/prever', methods=['POST'])
def prever():
    # Recebe o parâmetro do sintoma via JSON no corpo da requisição
    dados = request.get_json()

    # Verifica se o parâmetro "Sintoma" foi enviado
    if not dados or 'Sintoma' not in dados:
        return jsonify({'erro': 'O campo "Sintoma" é obrigatório.'}), 400

    parametro = dados['Sintoma']

    # Coloca o parametro em uma lista e vetoriza usando o vetorizador TF-IDF
    entrada_vetorizada = vetorizador.transform([parametro])  # Colocando `parametro` em uma lista

    # Realiza a previsão com o modelo carregado
    resultado = modelo.predict(entrada_vetorizada)

    # Retorna a previsão como JSON
    return jsonify({'previsao': resultado[0]})

if __name__ == "__main__":
    app.run(debug=True)
