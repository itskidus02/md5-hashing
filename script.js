function generateMD5() {
    var input = document.getElementById('input').value;
    var md5 = MD5(input);
    document.getElementById('output').innerText = md5;
  }
  