class HotDog {
	constructor(condition, temperature, length, condiments, bread, meat) {
		this.condition = condition;
		this.temperature = temperature;
		this.length = length;
		this.condiments = condiments;
		this.bread = bread;
		this.meat = meat;
	}
	timeTillCool = () => {
		if (this.temperature <= 55) {
			return 'Hotdog is already cold';
		}
		let time = parseInt(this.temperature) - 50;
		return 'It will take ' + time + ' minutes before your hotdog gets cold!';
	};
	timeTillConsumption = () => {
		let time = parseInt(this.length) * 0.5;
		return 'It will take ' + time + ' minutes for you to finish your hotdog!';
	};
}
const updateFunction = () => {
	const form = document.myForm;
	const userHotDog = new HotDog(
		form.Condition.value,
		form.Temperature.value,
		form.Length.value,
		form.Condiments.value,
		form.Bread.value,
		form.Meat.value
	);
	document.getElementById('condition').innerHTML = userHotDog.condition;
	document.getElementById('temperature').innerHTML = userHotDog.temperature;
	document.getElementById('length').innerHTML = userHotDog.length;
	document.getElementById('condiments').innerHTML = userHotDog.condiments;
	document.getElementById('bread').innerHTML = userHotDog.bread;
	document.getElementById('meat').innerHTML = userHotDog.meat;
	document.getElementById('coolingTime').innerHTML = userHotDog.timeTillCool();
	document.getElementById('eatingTime').innerHTML = userHotDog.timeTillConsumption();
	document.querySelector('.wrapper').style.display = 'flex';
};

[...document.querySelectorAll('.section')].forEach(function (item) {
	item.addEventListener('mouseup', () => {
		if (
			window.getComputedStyle(item).background ===
			'rgba(0, 0, 255, 0.32) none repeat scroll 0% 0% / auto padding-box border-box'
		) {
			item.style.background = 'yellow';
		} else {
			item.style.background = 'rgba(0, 0, 255, 0.322)';
		}
	});
});

const hotDogPhoto = document.querySelector('.hotdog');
const hotDogText = document.querySelector('.hotdog-text');
hotDogPhoto.addEventListener('click', () => {
	if (hotDogText.innerText === "Hey, don't do that!") {
		hotDogText.innerText = 'Ouch!';
	} else if (hotDogText.innerText === 'Ouch!') {
		hotDogText.innerText = 'Quit it!';
	} else {
		hotDogText.innerText = "Hey, don't do that!";
	}
});
