const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btn10 = document.querySelector('#btn10')
const body = document.querySelector('.fun')
const h2 = body.childNodes


const baseURL = 'https://swapi.dev/api/'

const click1 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/1`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
        console.log(h2)
    })
}
const click2 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/2`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click3 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/3`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click4 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/4`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click5 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/5`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click6 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/6`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click7 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/7`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click8 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/8`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click9 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/9`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
const click10 = (req,res) => {
    clearCharacters()
    axios.get(`${baseURL}/planets/10`).then(res => {
        // console.log(res.data.residents)
        for(let i=0;i<res.data.residents.length;i++){
            console.log(res.data.residents)
            axios.get(res.data.residents[i]).then(res => {
                add = document.createElement('h2')
                add.innerHTML = res.data.name
                body.appendChild(add)
                
                // console.log(res.data.name)
            })
        }
    })
}
function clearCharacters() {
    while(body.firstChild){
        body.removeChild(body.firstChild)
  }
}


btn1.addEventListener('click', click1)
btn2.addEventListener('click', click2)
btn3.addEventListener('click', click3)
btn4.addEventListener('click', click4)
btn5.addEventListener('click', click5)
btn6.addEventListener('click', click6)
btn7.addEventListener('click', click7)
btn8.addEventListener('click', click8)
btn9.addEventListener('click', click9)
btn10.addEventListener('click', click10)