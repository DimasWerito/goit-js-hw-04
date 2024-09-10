const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName; // Змінюємо значення властивості username
  },

  updatePlayTime(hours) {
    this.playTime += hours; // Додаємо значення до playTime
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`; // Повертаємо інформацію про профіль
  },
};

// Перевірка
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
