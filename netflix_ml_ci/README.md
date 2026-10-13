# Netflix ML CI/CD Pipeline

GitHub Actions ML CI/CD implementation for the supplied Netflix dataset.

Prediction task: classify a title as `Movie` or `TV Show`.

Dataset: 100 records, 12 columns. Train/test split: 80/20.

Pipeline:
1. Data preparation
2. Logistic Regression training
3. ML tests
4. Accuracy quality gate >= 0.75
5. GitHub Actions artifact preservation
6. Flask prediction API
7. Release candidate artifact
8. Docker build and runtime validation

Run locally:
```bash
pip install -r requirements.txt
python prepare_data.py
python train_model.py
python quality_gate.py
pytest -q
python app.py
```
