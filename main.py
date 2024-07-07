import yfinance as yf
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier

nvidia = yf.Ticker("NVDA")
nvidia = nvidia.history(period="max")

del nvidia["Dividends"]
del nvidia["Stock Splits"]

nvidia["Tomorrow"] = nvidia["Close"].shift(-1)

nvidia["Target"] = (nvidia["Tomorrow"] > nvidia["Close"]).astype(int)

nvidia = nvidia.loc["2016-01-01":].copy()

print(nvidia)
print(nvidia.index)

nvidia.plot.line(y = 'Close', use_index = 'True')
plt.show()

