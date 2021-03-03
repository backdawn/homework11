function upCase() {
  let inputText = document.getElementById('inputText').value,
      inputText2 ='';
  let outputText = document.getElementById('outputText');
  // console.log(inputText);
  // console.log(outputText);
  // console.log(array);
  for (let i = 0; i < inputText.length; i++) {
          //если первая маленькая и остальные большие
    if (inputText.charAt(i) === inputText.charAt(i).toLowerCase()) {
      inputText2 += inputText.charAt(i).toUpperCase();
      // console.log(array[i]);
      // console.log(array[0].toUpperCase() + array[i].toLowerCase());
      // console.log(inputText.join(''));
    }
    else if (inputText.charAt(i) === inputText.charAt(i).toUpperCase()) {
      inputText2 += inputText.charAt(i).toLowerCase();

    }
    else {
      inputText2 += inputText.charAt(i);
    }
  }
  console.log(inputText2);
  outputText.value = inputText2;
}
