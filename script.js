
const adjectives = [
    "Синий",
    "Ловкий",
    "Древний",
    "Мрачный",
    "Зелёный",
    "Хитрый",
    "Могучий",
    "Скрытный",
    "Дикий",
    "Железный",
    "Быстрый",
    "Одноглазый",
	"Мудрый",
    "Красивый",
    "Старый",
    "Красный",
    "Хилый",
    "Мелкий",
    "Огромный",
    "Живучий",
    "Крохотный",
    "Чахлый",
	"Бурый",
"Серый",
"Морской",
"Мшистый",
"Корявый",
"Косматый",
"Летучий",
"Сухой",
"Свирепый",
"Угрюмый",
"Хромой",
"Слепой",
"Безумный",
"Молчаливый",
"Гнилой",
"Разгульный",
"Мрачный",
"Девственный"
];


const nouns = [
    "Кабан",
    "Олень",
    "Волк",
    "Дуб",
    "Корень",
    "Медведь",
    "Сокол",
    "Мох",
    "Коготь",
    "Ворон",
    "Зуб",
    "Барсук",
	"Петух",
    "Крыса",
    "Глаз",
    "Кедр",
    "Енот",
    "Тетерев",
    "Вепрь",
    "Крот",
	"Лес",
	"Пруд",
	"Уж",
"Жаба",
"Паук",
"Шип",
"Вереск",
"Чертополох",
"Гриб",
"Пень",
"Череп",
"Шрам",
"Камень",
"Утес",
"Ручей",
    "Кот"
];


const generateButton = document.getElementById("generate-button");
const nameOutput = document.getElementById("name-output");


function generateName() {

    const adjIndex = Math.floor(Math.random() * adjectives.length);
    

    const nounIndex = Math.floor(Math.random() * nouns.length);


    const randomAdjective = adjectives[adjIndex];
    const randomNoun = nouns[nounIndex];


nameOutput.value = `${randomAdjective} ${randomNoun}`;
}


generateButton.addEventListener("click", generateName);