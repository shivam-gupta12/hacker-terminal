msg1 = document.getElementById("msg1")
msg_class = document.querySelector(".messages")
// msg2 = document.querySelector("msg2")
// msg3 = document.querySelector("msg3")
// msg4 = document.querySelector("msg4")
// msg5 = document.querySelector("msg5")



const randomdelay = async () =>{
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const additem = async (message) => {
    await randomdelay(); 
    let div = document.createElement("div")
    div.innerHTML = message
    document.body.append(div)
}

async function main(){
    let messages = [
        "Initializing hacking",
        "Reading your files ",
        "Password files detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ]

    let  t = setInterval(() => {
        last = document.body.lastElementChild
        if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else {
            last.innerHTML += "." 
        }
    }, 100);
    
    for (const message of messages) {
       await additem(message)
    }

    await randomdelay()
    clearInterval(t)
    let div = document.createElement("div")
    div.innerHTML = "HACKED !!!"
    document.body.append(div)
    div.classList.add("last-div");
}

main()