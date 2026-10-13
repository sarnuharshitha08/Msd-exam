# Customer Churn ML CI/CD Pipeline

This project applies an end-to-end machine-learning CI/CD workflow to the supplied **Customer Churn** dataset.

## Dataset
- Raw records: 52
- Unique customer records after deduplication: 50
- Features: 9
- Target: `Churn`
- Target classes: Yes / No

## Workflow
1. Data cleaning and normalization
2. Train/test split (80/20, stratified, random_state=42)
3. Compare six ML models
4. Select the best model
5. Save the trained model and metrics
6. Run a quality gate
7. Test the Flask prediction API
8. Build and validate a Docker image
9. Run the full workflow automatically with GitHub Actions

## Best model
**Logistic Regression**

| Model | Accuracy | Precision | Recall | F1 |
|---|---:|---:|---:|---:|
| Logistic Regression | 0.90 | 0.8333 | 1.00 | 0.9091 |
| Decision Tree | 0.70 | 0.6667 | 0.80 | 0.7273 |
| Random Forest | 0.70 | 0.7500 | 0.60 | 0.6667 |
| Gradient Boosting | 0.70 | 0.7500 | 0.60 | 0.6667 |
| SVM | 0.70 | 0.7500 | 0.60 | 0.6667 |
| KNN | 0.60 | 0.6000 | 0.60 | 0.6000 |

Quality gate: accuracy >= 0.65.

## Run locally

```bash
pip install -r requirements.txt
python prepare_data.py
python train_model.py
python quality_gate.py
pytest -q
python app.py
```

Then open `http://localhost:5000/`.

## GitHub Actions
The workflow is at `.github/workflows/ml-ci.yml`. It retrains the model on every relevant push/PR, runs tests and the quality gate, uploads artifacts, and validates the Dockerized API.

## Repository placement
This project is placed in `customer_churn_ml_ci/` inside the existing `sarnuharshitha08/Msd-exam` repository so the existing application files are not overwritten.
