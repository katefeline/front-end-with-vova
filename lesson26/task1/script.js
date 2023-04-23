'use strict';

let Student = function (name, surname, birthyear, lessonsCount) {
    this.name = name;
    this.surname = surname;
    this.birthyear = birthyear;
    this.presence = new Array(lessonsCount);
    this.marks = new Array(lessonsCount);
    this.lessonNum = 0;

};

let user = new Student('Pete', 'Bryason', 1969);


Student.prototype.getAge = function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthyear;
}


Student.prototype.absent = function () {
    this.presence[this.lessonNum] = false;
    this.marks[this.lessonNum] = undefined;
    ++this.lessonNum;
}

Student.prototype.present = function (mark) {
    this.presence[this.lessonNum] = true;
    if (mark > 10 || mark < 0) {
        throw new Error('Mark cannot be this value');

    } else {
        this.marks[this.lessonNum] = mark;
    }
    ++this.lessonNum;
}

Student.prototype.avrMark = function () {

    const mark = this.marks.filter(mark => mark);
    let marks = 0;
    let lessonsAttended = 0;
    mark.forEach((item) => {
        marks = marks + item;
        lessonsAttended++;
    });
    return marks / lessonsAttended;

}


console.log(user.getAge());
user.present(10);
user.present();
user.present(10);
user.present(9);
user.present(7);
user.absent();
user.absent();
user.absent();
user.absent();
console.log(user.avrMark());
console.log(user);