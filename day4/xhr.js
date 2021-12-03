// AJAX = Asynchronous JavaScript and XML
// XHR = XMLHttpRequest

const GET = 'GET';
const POST = 'POST';
const SERVER_URL = 'http://localhost:8080';

function getData(url, responseCallback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const { response } = this;
    responseCallback(JSON.parse(response));
  };
  xhttp.open(GET, `${SERVER_URL}${url}`);
  xhttp.send();
}

function postData(url, data, responseCallback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const { response } = this;
    responseCallback(JSON.parse(response));
  };
  xhttp.open(POST, `${SERVER_URL}${url}`);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify(data));
}

function logJSONObject(obj) {
  console.log(obj);
}

getData('/v1/inventory', logJSONObject);
getData('/v1/inventory/1', logJSONObject);

postData('/v1/inventory', { name: 'Not Special Inventory', quantity: 2000 }, logJSONObject);
getData('/v1/inventory', logJSONObject);
