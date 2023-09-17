new Vue({
    el: '#app',
    data: {
        initialized: false,
        gridSizeX: 11,
        gridSizeY: 11,
        newColor: '#000000',
        colors: ['#FFFFFF'],
        selectedColor: '#FFFFFF',
        coordinateInput: '',
        grid: Array(11).fill().map(() => Array(11).fill(''))
    },
    methods: {
        addColor() {
            if (this.colors.indexOf(this.newColor) === -1) {
                this.colors.push(this.newColor);
            }
        },
        initializeGrid() {
            this.initialized = true;
        },
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
    },
    computed: {
        getLetters() {
            let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return letters.substring(0, this.gridSizeX).split('');
        }
    },
    watch: {
        gridSizeY(newVal) {
            document.documentElement.style.setProperty('--grid-size-y', newVal);
        }
    },
    created() {
        document.documentElement.style.setProperty('--grid-size-y', this.gridSizeY);
    }
});
