(function () {

    const app = document.querySelector(".app");
    const socket = io();
    let uname;

    addEventListener.querySelector(".join-screen #join-user").addEventListener("click", function () {
        let username = app.querySelector(".join-screen #username").value;
        if (username.length == 0) {
            return;
        }
        socket.emit("newuser", username);
        uname = username;
        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    addEventListener.querySelector(".chat-screen #send-message").addEventListener("click", function () {
        let message = app.querySelector(".chat-screen #message-input").value;
        if(message.length == 0){
            return;
        }
        renderMessage("my",{
            username:uname,
            text:message
        })
        socket.emit("chat",{
            username:uname,
            text:message
        })
        app.querySelector(".chat-screen #message-input").value ="";
    })

    function renserMessage(type,message){
        let messageContainer = app.querySelector(".chat-screen .message");
        if(type == "my"){
            let e1 = document.createElement("div");
            e1.setAttribute("class", "message my-message");
            e1.innerHTML = `
                <div>
                   <div class="name">You</div>
                   <div class="name">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);

        }else if(type == "other"){
            let e1 = document.createElement("div");
            e1.setAttribute("class", "message other-message");
            e1.innerHTML = `
                <div>
                   <div class="name">${message.username}</div>
                   <div class="name">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        }else if(type == "upate"){
            let e1 = document.createElement("div");
            e1.setAttribute("class", "update");
            e1.innerHTML = message
            messageContainer.appendChild(el);
        }

        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();