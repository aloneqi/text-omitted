function TextOmitted({ width, fontWeight = 'normal', fontSize = 14, fontFamily = 'normal', lineClamp = 1, text = '', extraText = '...', extraWidth = 0 } = {}) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = width;
    this.lineClamp = lineClamp;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.fontFamily = fontFamily;
    this.text = text;
    this.extraText = extraText;
    this.extraWidth = extraWidth;
    this.font();
    this.extraTextWidth = this.ctx.measureText(this.extraText).width + this.extraWidth;
}
TextOmitted.prototype = {
    constructor: TextOmitted,
    font({ fontWeight = this.fontWeight, fontSize = this.fontSize, fontFamily = this.fontFamily } = {}) {
        this.ctx.font = fontWeight + ' ' + fontSize + 'px ' + fontFamily;
    },
    changeExtraText(text = this.extraText) {
        this.extraText = text;
        this.extraTextWidth = this.ctx.measureText(this.extraText).width + this.extraWidth;
    },
    dispose(text) {
        this.text = text || this.text;

        if (Math.ceil(this.ctx.measureText(this.text).width / this.width) < this.lineClamp) return this.text;

        let defaultValue = ~~(this.width / this.fontSize),
            newText,
            rowTextWidth,
            strIndex = 0,
            endIndex = defaultValue,
            variation,
            extraWidth = 0;

        for (let i = 1; i <= this.lineClamp; i++) {
            if (this.lineClamp == i) {
                if (Math.ceil(this.ctx.measureText(this.text.slice(strIndex, this.text.length)).width) < this.width) break;
                extraWidth = this.extraTextWidth;
            }

            let rowText = this.text.slice(strIndex, endIndex);
            rowTextWidth = Math.ceil(this.ctx.measureText(rowText).width + extraWidth);
            while (rowTextWidth < this.width) {
                variation = ~~((this.width - rowTextWidth) / this.fontSize);
                variation ? (rowText = this.text.slice(strIndex, (endIndex += variation))) : (rowText += this.text[endIndex++]);
                rowTextWidth = Math.ceil(this.ctx.measureText(rowText).width + extraWidth);
            }

            strIndex = endIndex - 1;
            this.lineClamp !== i && (endIndex = strIndex + defaultValue);
        }
        return (newText = extraWidth ? this.text.slice(0, endIndex - 1) + this.extraText : this.text);
    },
    delete() {
        this.canvas = this.ctx = null;
    },
};