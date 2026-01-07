/* 
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note: That buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.
*/

function solution(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (prices[j] < prices[i]) continue;
      if (profit < 0) profit = 0;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  console.log(maxProfit);
}

function solution2(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(prices[i]-min, maxProfit)
  }
  console.log(maxProfit);
}

solution2([7, 1, 5, 3, 6, 4]);
solution2([7,6,4,3,1]);
