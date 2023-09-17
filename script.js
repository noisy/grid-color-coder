new Vue({
    el: '#app',
    data: {
        colors: ['green', 'black', 'orange', 'red', 'white'],
        selectedColor: 'green',
        coordinateInput: '',
        grid: Array(11).fill().map(() => Array(11).fill(''))
    },
    methods: {
        selectColor(color) {
            this.selectedColor = color;
        },
        colorCell(x, y) {
            this.grid[x-1][y-1] = this.selectedColor;
        },
        getColor(x, y) {
            return this.grid[x-1][y-1];
        },
        applyCoordinate() {
            const input = this.coordinateInput.toUpperCase();
            const match = input.match(/^([A-K])([1-9]|10|11)$/);
            if (match) {
                const y = match[1].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
                const x = parseInt(match[2], 10);
                this.colorCell(x, y);
                this.coordinateInput = '';
            }
        }
    }
});
