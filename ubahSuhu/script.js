const input = document.getElementById('inputSuhu')
const cTof = document.getElementById('cTof')
const fTor = document.getElementById('fTor')
const output = document.getElementById('hasil')

function celciusToFarenheit(c){
  return (c * 9/5) + 32;
}

function farenheitToReamur(d){
  return (d - 32) * 4/9;
}
cTof.addEventListener('dblclick', function(){
  const suhu = parseFloat(input.value);

  const hasil = celciusToFarenheit(suhu);
  output.textContent = `${suhu}^C = ${hasil.toFixed(2)}^F`
})
fTor.addEventListener('click', function(){
  const suhu = parseFloat(input.value);

  const hasil = farenheitToReamur(suhu);
  output.textContent = `${suhu}^F = ${hasil.toFixed(2)}^R`
})