"use strict";

void function () {
    document.addEventListener('DOMContentLoaded', () => {
        let data = localStorage.getItem(HISTORY_KEY);

        if (!data) return;

        data = JSON.parse(data);

        const result = data.reduce((acc, item) => {
            const ul = document.createElement('ul');
            Object.keys(item).forEach((key) => {
                const li = document.createElement('li');
                li.innerHTML = `${key} : ${item[key]}`;
                ul.append(li);
            })
            acc.append(ul);
            acc.append(document.createElement('hr'));

            return acc;

        }, document.createElement('div'));

        document.body.append(result);
    })
}()