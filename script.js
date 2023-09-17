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
            this.grid = Array(this.gridSizeY).fill().map(() => Array(this.gridSizeX).fill(''));
            this.initialized = true;
        },
        selectColor(color) {
            this.selectedColor = color;
        },
        colorCell(x, y) {
            this.$set(this.grid[y - 1], x - 1, this.selectedColor);
        },
        getColor(x, y) {
            return this.grid[y - 1][x - 1];
        },
        updateColor(index) {
            this.$set(this.colors, index, this.colors[index]);
        },
        removeColor(index) {
            this.colors.splice(index, 1);
        },
        applyCoordinate() {
            const letter = this.coordinateInput.charAt(0).toUpperCase();
            const number = parseInt(this.coordinateInput.slice(1), 10);
            const y = this.getLetters.indexOf(letter) + 1;
            const x = number;
            this.colorCell(x, y);
        },
    },
    computed: {
        getLetters() {
            return Array.from({ length: this.gridSizeY }, (_, i) => String.fromCharCode(65 + i));
        },
        gridStyles() {
            return {
                '--grid-size-x': this.gridSizeX,
                '--grid-size-y': this.gridSizeY,
                'grid-template-columns': `50px repeat(${this.gridSizeX}, 50px)`,
            };
        }
    }
});
