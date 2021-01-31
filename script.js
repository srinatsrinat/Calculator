var mainBlock = document.createElement('div')
mainBlock.classList.add('container-fluid')
mainBlock.setAttribute('style','border:1px solid black; height:520px; width:500px;background-color:lightyellow')
document.body.append(mainBlock)


var row1 = document.createElement('input')
row1.classList.add('row')
row1.setAttribute('style','border:1px solid black; width:100%; height:100px;position:relative;top:10px;margin:0;text-align:right;font-size:60')
row1.setAttribute('id','inputField')
row1.type="text"
row1.placeholder = 'Enter Value'
row1.setAttribute('onkeypress','return false')
mainBlock.append(row1)

var row2 = document.createElement('div')
row2.classList.add('row')
row2.setAttribute('style',' width:100%; height:385px;position:relative;top:20px;margin:0;')
mainBlock.append(row2)

var col1 = document.createElement('div')
col1.classList.add('col-8')
col1.setAttribute('style','width:100%;padding:0;margin:0')
row2.append(col1)

var col2 = document.createElement('div')
col2.classList.add('col-4')
col2.setAttribute('style','width:100%;padding-right:0;margin-right:0')
row2.append(col2)

var numRow1 = document.createElement('div')
numRow1.classList.add('row')
numRow1.setAttribute('style',' width:100%; height:96px; position:relative;padding:0;margin:0')
col1.append(numRow1)

var numRow2 = document.createElement('div')
numRow2.classList.add('row')
numRow2.setAttribute('style',' width:100%; height:96px; position:relative;padding:0;margin:0 ')
col1.append(numRow2)

var numRow3 = document.createElement('div')
numRow3.classList.add('row')
numRow3.setAttribute('style',' width:100%; height:96px; position:relative;padding:0;margin:0 ')
col1.append(numRow3)

var numRow4 = document.createElement('div')
numRow4.classList.add('row')
numRow4.setAttribute('style',' width:100%; height:96px; position:relative;padding:0;margin:0')
col1.append(numRow4)


var opRow1 = document.createElement('div')
opRow1.classList.add('row')
opRow1.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0')
col2.append(opRow1)

var opRow2 = document.createElement('div')
opRow2.classList.add('row')
opRow2.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0 ')
col2.append(opRow2)

var opRow3 = document.createElement('div')
opRow3.classList.add('row')
opRow3.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0 ')
col2.append(opRow3)

var opRow4 = document.createElement('div')
opRow4.classList.add('row')
opRow4.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0')
col2.append(opRow4)

var opRow5 = document.createElement('div')
opRow5.classList.add('row')
opRow5.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0')
col2.append(opRow5)

var opRow6 = document.createElement('div')
opRow6.classList.add('row')
opRow6.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0')
col2.append(opRow6)

var opRow7 = document.createElement('div')
opRow7.classList.add('row')
opRow7.setAttribute('style',' width:100%; height:54.8px; position:relative;padding:0;margin:0')
col2.append(opRow7)

var numRow1col1 = document.createElement('button')
numRow1col1.classList.add('col-4')
numRow1col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow1col1.innerHTML='7'
numRow1col1.id='7'
numRow1col1.value='7'
numRow1col1.setAttribute('onClick','showThis(this)')
numRow1.append(numRow1col1)

var numRow1col2 = document.createElement('button')
numRow1col2.classList.add('col-4')
numRow1col2.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow1col2.innerHTML='8'
numRow1col2.id='8'
numRow1col2.value='8'
numRow1col2.setAttribute('onClick','showThis(this)')
numRow1.append(numRow1col2)

var numRow1col3 = document.createElement('button')
numRow1col3.classList.add('col-4')
numRow1col3.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow1col3.innerHTML='9'
numRow1col3.id='9'
numRow1col3.value='9'
numRow1col3.setAttribute('onClick','showThis(this)')
numRow1.append(numRow1col3)

var numRow2col1 = document.createElement('button')
numRow2col1.classList.add('col-4')
numRow2col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow2col1.innerHTML='4'
numRow2col1.id='4'
numRow2col1.value='4'
numRow2col1.setAttribute('onClick','showThis(this)')
numRow2.append(numRow2col1)

var numRow2col2 = document.createElement('button')
numRow2col2.classList.add('col-4')
numRow2col2.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow2col2.innerHTML='5'
numRow2col2.id='5'
numRow2col2.value='5'
numRow2col2.setAttribute('onClick','showThis(this)')
numRow2.append(numRow2col2)


var numRow2col3 = document.createElement('button')
numRow2col3.classList.add('col-4')
numRow2col3.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow2col3.innerHTML='6'
numRow2col3.id='6'
numRow2col3.value='6'
numRow2col3.setAttribute('onClick','showThis(this)')
numRow2.append(numRow2col3)

var numRow3col1 = document.createElement('button')
numRow3col1.classList.add('col-4')
numRow3col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow3col1.innerHTML='1'
numRow3col1.id='1'
numRow3col1.value='1'
numRow3col1.setAttribute('onClick','showThis(this)')
numRow3.append(numRow3col1)

var numRow3col2 = document.createElement('button')
numRow3col2.classList.add('col-4')
numRow3col2.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow3col2.innerHTML='2'
numRow3col2.id='2'
numRow3col2.value='2'
numRow3col2.setAttribute('onClick','showThis(this)')
numRow3.append(numRow3col2)

var numRow3col3 = document.createElement('button')
numRow3col3.classList.add('col-4')
numRow3col3.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow3col3.innerHTML='3'
numRow3col3.id='3'
numRow3col3.value='3'
numRow3col3.setAttribute('onClick','showThis(this)')
numRow3.append(numRow3col3)

var numRow4col1 = document.createElement('button')
numRow4col1.classList.add('col-4')
numRow4col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow4col1.innerHTML='0'
numRow4col1.id='0'
numRow4col1.value='0'
numRow4col1.setAttribute('onClick','showThis(this)')
numRow4.append(numRow4col1)

var numRow4col2 = document.createElement('button')
numRow4col2.classList.add('col-4')
numRow4col2.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow4col2.innerHTML='.'
numRow4col2.id='.'
numRow4col2.value='.'
numRow4col2.setAttribute('onClick','showThis(this)')
numRow4.append(numRow4col2)

var numRow4col3 = document.createElement('button')
numRow4col3.classList.add('col-4')
numRow4col3.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
numRow4col3.innerHTML='AC'
numRow4col3.setAttribute('onClick','reLoad()')
numRow4.append(numRow4col3)

var opRow1col1 = document.createElement('button')
opRow1col1.classList.add('col-12')
opRow1col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
opRow1col1.innerHTML='/'
opRow1col1.id='/'
opRow1col1.value='/'
opRow1col1.setAttribute('onClick','showThis(this)')
opRow1.append(opRow1col1)

var opRow2col1 = document.createElement('button')
opRow2col1.classList.add('col-12')
opRow2col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
opRow2col1.innerHTML='*'
opRow2col1.id='*'
opRow2col1.value='*'
opRow2col1.setAttribute('onClick','showThis(this)')
opRow2.append(opRow2col1)

var opRow3col1 = document.createElement('button')
opRow3col1.classList.add('col-12')
opRow3col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
opRow3col1.innerHTML='-'
opRow3col1.id='-'
opRow3col1.value='-'
opRow3col1.setAttribute('onClick','showThis(this)')
opRow3.append(opRow3col1)

var opRow4col1 = document.createElement('button')
opRow4col1.classList.add('col-12')
opRow4col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
opRow4col1.innerHTML='+'
opRow4col1.id='+'
opRow4col1.value='+'
opRow4col1.setAttribute('onClick','showThis(this)')
opRow4.append(opRow4col1)

var opRow5col1 = document.createElement('button')
opRow5col1.classList.add('col-12')
opRow5col1.setAttribute('style','border: 1px solid black;width:100%;font-size:30;')
opRow5col1.innerHTML='Modulo'
opRow5col1.id='%'
opRow5col1.value='%'
opRow5col1.setAttribute('onClick','showThis(this)')
opRow5.append(opRow5col1)

var opRow6col1 = document.createElement('button')
opRow6col1.classList.add('col-12')
opRow6col1.setAttribute('style','border: 1px solid black;width:100%;font-size:35')
opRow6col1.innerHTML='='
opRow6col1.id='='
opRow6col1.value='='
opRow6col1.setAttribute('onClick','Calculator()')
opRow6.append(opRow6col1)

var opRow7col1 = document.createElement('button')
opRow7col1.classList.add('col-12')
opRow7col1.setAttribute('style','border: 1px solid black;width:100%;font-size:25')
opRow7col1.innerHTML='Backspace'
opRow7col1.value='Backspace'
opRow7col1.setAttribute('onClick','showThis(this)')
opRow7.append(opRow7col1)

var arr=['']

function showThis(item){
  
  var toDisplay = item
  var toHold = document.getElementById('inputField')



  if(toDisplay.value=="Backspace")
  {
    if(arr.length==0)
    { toHold.value='!Need Value!'}
    else{
    var arr1 = arr.split('')
    arr1.pop()
    arr = arr1.join('')
    toHold.value=arr
    console.log(arr)
    }
  }
  else{  
  arr+=toDisplay.value
  console.log(arr)
  toHold.value=arr}
}

function reLoad()
{
  window.location.reload()

}

function Calculator()
{
  try{
  var result = eval(arr)
  console.log(result)
  var toHold = document.getElementById('inputField')
  toHold.value = result
  }
  catch (error){
    console.log(error)
    var toHold = document.getElementById('inputField')
    toHold.value = 'Incorrect Entry'
  }
}





