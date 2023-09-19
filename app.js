
var todoOrderList = document.getElementById('todoList');
var todoInputText = document.getElementById('todoText');
var now = new Date()
var nowTime = now.toLocaleTimeString()

todoInputText.addEventListener('keydown', function (e) {
	if (e.code == "Enter") {
		add()
	}
})

function add() {

	if (todoInputText.value != "") {

		var userData = JSON.parse(localStorage.getItem('todo')) ?? [];

		userData.push({
			'text': todoInputText.value,
			'time': nowTime
		});

		localStorage.setItem('todo', JSON.stringify(userData))
	}
	dataFromStorage();
	todoInputText.value = "";

}

var dataFromStorage = () => {

	var data = JSON.parse(localStorage.getItem('todo')) ?? [];
	finalData = "";

	data.forEach(function (item, index) {

		finalData += `<li>
		<p>${item.text} <span class="addTime">${item.time}</span></p>
		<button onclick="delt(${index})" class="delBtn">x</button>
		</li>`
	

	})

	
todoOrderList.innerHTML = finalData;
}


dataFromStorage();




function delt(i) {
	var userData = JSON.parse(localStorage.getItem('todo')) ?? [];

	userData.splice(i, 1);

	localStorage.setItem('todo', JSON.stringify(userData))
	dataFromStorage();
}
