'use strict';

void function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const { target } = event;
        const inputs = target.querySelectorAll('input, select, textarea');
        const data = Array.from(inputs).reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc;
        }, {})

        localStorage.setItem(DATA_KEY, JSON.stringify(data));

        let historyKey = localStorage.getItem(HISTORY_KEY);
        if (!historyKey) {
            localStorage.setItem(HISTORY_KEY, JSON.stringify([data]));
            return;
        }
        historyKey = JSON.parse(historyKey);
        historyKey.push(data);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(historyKey));


    })

    document.addEventListener('DOMContentLoaded', () => {
        let data = localStorage.getItem(DATA_KEY);

        if (!data) return;

        data = JSON.parse(data);
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach((item) => {
            item.value = data[item.name];
        });


    });


    
}()