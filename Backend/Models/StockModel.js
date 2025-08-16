const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
  {
    Date: String,
    Symbol: String,
    Series: String,
    Open: Number,
    High: Number,
    Low: Number,
    Last: Number,
    Close: Number,
    VWAP: Number,
    Volume: Number,
    Turnover: Number,
    Trades: Number,
    Deliverble: Number,
    PrevClose: String,
  },
  { collection: "stock" }
);

const StockModel = mongoose.model("stock", StockSchema);

module.exports = StockModel;
